"""Master training script — generates data and trains all 5 Henry Corporation models."""

import sys
import time
from pathlib import Path

# Make sure backend package is importable when run from any directory
sys.path.insert(0, str(Path(__file__).parent))

from data.generate_synthetic_data import (
    generate_sales_data,
    generate_price_data,
    generate_churn_data,
    generate_loan_data,
    generate_gst_data,
)
from models.sales_forecast import SalesForecastModel
from models.price_optimizer import PriceOptimizerModel
from models.churn_predictor import ChurnPredictorModel
from models.loan_risk import LoanRiskModel
from models.gst_compliance import GSTComplianceModel

TRAINED_DIR = Path(__file__).parent / "trained_models"
TRAINED_DIR.mkdir(exist_ok=True)


def _banner(title: str):
    print(f"\n{'='*60}")
    print(f"  {title}")
    print(f"{'='*60}")


def train_sales_forecast():
    _banner("1/5  Sales Forecasting Model")
    df = generate_sales_data()
    split = int(len(df) * 0.8)
    train_df, test_df = df.iloc[:split], df.iloc[split:]

    model = SalesForecastModel()
    t0 = time.time()
    model.train(train_df)
    elapsed = time.time() - t0

    metrics = model.evaluate(test_df)
    model.save()
    print(f"  Train time : {elapsed:.1f}s")
    print(f"  MAE        : ₹{metrics['mae']:,.0f}")
    print(f"  R²         : {metrics['r2']:.4f}")
    print(f"  Saved      : trained_models/sales_forecast.joblib")
    return metrics


def train_price_optimizer():
    _banner("2/5  Price Optimization Model")
    df = generate_price_data()
    split = int(len(df) * 0.8)
    train_df, test_df = df.iloc[:split], df.iloc[split:]

    model = PriceOptimizerModel()
    t0 = time.time()
    model.train(train_df)
    elapsed = time.time() - t0

    metrics = model.evaluate(test_df)
    model.save()
    print(f"  Train time : {elapsed:.1f}s")
    print(f"  MAE        : ₹{metrics['mae']:,.0f}")
    print(f"  R²         : {metrics['r2']:.4f}")
    print(f"  Saved      : trained_models/price_optimizer.joblib")
    return metrics


def train_churn_predictor():
    _banner("3/5  Customer Churn Predictor")
    df = generate_churn_data()
    split = int(len(df) * 0.8)
    train_df, test_df = df.iloc[:split], df.iloc[split:]

    model = ChurnPredictorModel()
    t0 = time.time()
    model.train(train_df)
    elapsed = time.time() - t0

    metrics = model.evaluate(test_df)
    model.save()
    print(f"  Train time : {elapsed:.1f}s")
    print(f"  ROC-AUC    : {metrics['roc_auc']:.4f}")
    print(f"  Precision  : {metrics['precision']:.4f}")
    print(f"  Recall     : {metrics['recall']:.4f}")
    print(f"  F1         : {metrics['f1']:.4f}")
    print(f"  Saved      : trained_models/churn_predictor.joblib")
    return metrics


def train_loan_risk():
    _banner("4/5  Loan Risk Assessor")
    df = generate_loan_data()
    split = int(len(df) * 0.8)
    train_df, test_df = df.iloc[:split], df.iloc[split:]

    model = LoanRiskModel()
    t0 = time.time()
    model.train(train_df)
    elapsed = time.time() - t0

    metrics = model.evaluate(test_df)
    model.save()
    print(f"  Train time : {elapsed:.1f}s")
    print(f"  Accuracy   : {metrics['accuracy']:.4f}")
    print(f"  Macro F1   : {metrics['macro_f1']:.4f}")
    print(f"  Saved      : trained_models/loan_risk.joblib")
    return metrics


def train_gst_compliance():
    _banner("5/5  GST Compliance Risk Model")
    df = generate_gst_data()
    split = int(len(df) * 0.8)
    train_df, test_df = df.iloc[:split], df.iloc[split:]

    model = GSTComplianceModel()
    t0 = time.time()
    model.train(train_df)
    elapsed = time.time() - t0

    metrics = model.evaluate(test_df)
    model.save()
    print(f"  Train time : {elapsed:.1f}s")
    print(f"  Accuracy   : {metrics['accuracy']:.4f}")
    print(f"  Macro F1   : {metrics['macro_f1']:.4f}")
    print(f"  Saved      : trained_models/gst_compliance.joblib")
    return metrics


def main():
    print("\nHenry Corporations — Backend Model Training Pipeline")
    print(f"{'='*60}")

    total_start = time.time()
    results = {}

    results["sales_forecast"] = train_sales_forecast()
    results["price_optimizer"] = train_price_optimizer()
    results["churn_predictor"] = train_churn_predictor()
    results["loan_risk"] = train_loan_risk()
    results["gst_compliance"] = train_gst_compliance()

    total_elapsed = time.time() - total_start

    _banner("Training Complete")
    print(f"  Total time : {total_elapsed:.1f}s")
    print(f"\n  Models saved to: {TRAINED_DIR}")
    print("\n  Summary:")
    print(f"    sales_forecast  → R²={results['sales_forecast']['r2']:.3f}")
    print(f"    price_optimizer → R²={results['price_optimizer']['r2']:.3f}")
    print(f"    churn_predictor → AUC={results['churn_predictor']['roc_auc']:.3f}")
    print(f"    loan_risk       → Acc={results['loan_risk']['accuracy']:.3f}")
    print(f"    gst_compliance  → Acc={results['gst_compliance']['accuracy']:.3f}")
    print()


if __name__ == "__main__":
    main()
