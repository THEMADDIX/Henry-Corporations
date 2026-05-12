"""Henry Corporations — ML Backend API (FastAPI)"""

from contextlib import asynccontextmanager
from pathlib import Path
from typing import Literal

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

from models.sales_forecast import SalesForecastModel
from models.price_optimizer import PriceOptimizerModel
from models.churn_predictor import ChurnPredictorModel
from models.loan_risk import LoanRiskModel
from models.gst_compliance import GSTComplianceModel

TRAINED_DIR = Path(__file__).parent / "trained_models"

_models: dict = {}


@asynccontextmanager
async def lifespan(app: FastAPI):
    missing = []
    for name, cls, path in [
        ("sales_forecast", SalesForecastModel, TRAINED_DIR / "sales_forecast.joblib"),
        ("price_optimizer", PriceOptimizerModel, TRAINED_DIR / "price_optimizer.joblib"),
        ("churn_predictor", ChurnPredictorModel, TRAINED_DIR / "churn_predictor.joblib"),
        ("loan_risk", LoanRiskModel, TRAINED_DIR / "loan_risk.joblib"),
        ("gst_compliance", GSTComplianceModel, TRAINED_DIR / "gst_compliance.joblib"),
    ]:
        if path.exists():
            _models[name] = cls.load(path)
        else:
            missing.append(name)

    if missing:
        print(f"WARNING: Models not found (run train_all.py first): {missing}")
    else:
        print("All models loaded successfully.")
    yield
    _models.clear()


app = FastAPI(
    title="Henry Corporations ML API",
    description="AI-powered insights for e-commerce seller management",
    version="1.0.0",
    lifespan=lifespan,
)


# ── Request / Response Schemas ────────────────────────────────────────────────

class SalesForecastRequest(BaseModel):
    platform: Literal["Amazon", "Flipkart", "Meesho", "Shopsy", "Myntra"]
    category: Literal["Electronics", "Fashion", "Home", "Beauty", "Sports", "Books"]
    season: Literal["Summer", "Winter", "Monsoon", "Festival"]
    day_of_week: int = Field(..., ge=0, le=6)
    month: int = Field(..., ge=1, le=12)
    num_listings: int = Field(..., ge=1)
    avg_rating: float = Field(..., ge=1.0, le=5.0)
    ad_spend: float = Field(..., ge=0)


class SalesForecastResponse(BaseModel):
    predicted_sales_amount: float


class PriceOptimizeRequest(BaseModel):
    platform: Literal["Amazon", "Flipkart", "Meesho", "Shopsy", "Myntra"]
    category: Literal["Electronics", "Fashion", "Home", "Beauty", "Sports", "Books"]
    cost_price: float = Field(..., gt=0)
    competitor_price: float = Field(..., gt=0)
    demand_score: float = Field(..., ge=0.0, le=1.0)
    stock_level: int = Field(..., ge=0)
    days_on_platform: int = Field(..., ge=0)


class PriceOptimizeResponse(BaseModel):
    optimal_price: float


class ChurnRequest(BaseModel):
    tenure_months: int = Field(..., ge=0)
    monthly_revenue: float = Field(..., ge=0)
    num_platforms: int = Field(..., ge=1, le=10)
    support_tickets: int = Field(..., ge=0)
    last_activity_days: int = Field(..., ge=0)
    num_services: int = Field(..., ge=1)
    payment_delays: int = Field(..., ge=0)


class ChurnResponse(BaseModel):
    churned: int
    churn_probability: float


class LoanRiskRequest(BaseModel):
    annual_revenue: float = Field(..., gt=0)
    years_in_business: int = Field(..., ge=0)
    credit_score: int = Field(..., ge=300, le=900)
    loan_amount: float = Field(..., gt=0)
    existing_debt: float = Field(..., ge=0)
    num_employees: int = Field(..., ge=1)
    sector: Literal["ecommerce", "retail", "manufacturing", "services"]


class LoanRiskResponse(BaseModel):
    risk_level: str
    probabilities: dict


class GSTRequest(BaseModel):
    annual_turnover: float = Field(..., gt=0)
    returns_due: int = Field(..., ge=1)
    returns_filed: int = Field(..., ge=0)
    late_payments: int = Field(..., ge=0)
    sector: Literal["goods", "services", "mixed", "exempt"]
    years_registered: int = Field(..., ge=0)
    amendments_filed: int = Field(..., ge=0)


class GSTResponse(BaseModel):
    compliance_risk: str
    probabilities: dict


# ── Endpoints ─────────────────────────────────────────────────────────────────

@app.get("/health")
def health():
    return {"status": "ok", "models_loaded": list(_models.keys())}


@app.post("/predict/sales-forecast", response_model=SalesForecastResponse)
def predict_sales(req: SalesForecastRequest):
    if "sales_forecast" not in _models:
        raise HTTPException(503, "Model not loaded. Run train_all.py first.")
    prediction = _models["sales_forecast"].predict(req.model_dump())
    return SalesForecastResponse(predicted_sales_amount=round(prediction, 2))


@app.post("/predict/price-optimize", response_model=PriceOptimizeResponse)
def predict_price(req: PriceOptimizeRequest):
    if "price_optimizer" not in _models:
        raise HTTPException(503, "Model not loaded. Run train_all.py first.")
    price = _models["price_optimizer"].predict(req.model_dump())
    return PriceOptimizeResponse(optimal_price=round(price, 2))


@app.post("/predict/churn", response_model=ChurnResponse)
def predict_churn(req: ChurnRequest):
    if "churn_predictor" not in _models:
        raise HTTPException(503, "Model not loaded. Run train_all.py first.")
    result = _models["churn_predictor"].predict(req.model_dump())
    return ChurnResponse(**result)


@app.post("/predict/loan-risk", response_model=LoanRiskResponse)
def predict_loan_risk(req: LoanRiskRequest):
    if "loan_risk" not in _models:
        raise HTTPException(503, "Model not loaded. Run train_all.py first.")
    data = req.model_dump()
    data["debt_ratio"] = data["existing_debt"] / max(data["annual_revenue"], 1)
    data["loan_to_revenue"] = data["loan_amount"] / max(data["annual_revenue"], 1)
    result = _models["loan_risk"].predict(data)
    return LoanRiskResponse(**result)


@app.post("/predict/gst-compliance", response_model=GSTResponse)
def predict_gst(req: GSTRequest):
    if "gst_compliance" not in _models:
        raise HTTPException(503, "Model not loaded. Run train_all.py first.")
    data = req.model_dump()
    data["filing_rate"] = data["returns_filed"] / max(data["returns_due"], 1)
    result = _models["gst_compliance"].predict(data)
    return GSTResponse(**result)
