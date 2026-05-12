import joblib
import numpy as np
import pandas as pd
from pathlib import Path
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OrdinalEncoder
from sklearn.compose import ColumnTransformer
from sklearn.metrics import mean_absolute_error, r2_score

MODEL_PATH = Path(__file__).parent.parent / "trained_models" / "price_optimizer.joblib"

CATEGORICAL = ["platform", "category"]
NUMERICAL = ["cost_price", "competitor_price", "demand_score", "stock_level", "days_on_platform"]
FEATURES = CATEGORICAL + NUMERICAL
TARGET = "optimal_price"


def build_pipeline():
    preprocessor = ColumnTransformer([
        ("cat", OrdinalEncoder(handle_unknown="use_encoded_value", unknown_value=-1), CATEGORICAL),
    ], remainder="passthrough")

    return Pipeline([
        ("pre", preprocessor),
        ("model", RandomForestRegressor(
            n_estimators=200,
            max_depth=10,
            min_samples_leaf=5,
            random_state=42,
            n_jobs=-1,
        )),
    ])


class PriceOptimizerModel:
    def __init__(self):
        self.pipeline = None

    def train(self, df: pd.DataFrame):
        X, y = df[FEATURES], df[TARGET]
        self.pipeline = build_pipeline()
        self.pipeline.fit(X, y)

    def evaluate(self, df: pd.DataFrame) -> dict:
        X, y = df[FEATURES], df[TARGET]
        preds = self.pipeline.predict(X)
        return {
            "mae": float(mean_absolute_error(y, preds)),
            "r2": float(r2_score(y, preds)),
        }

    def predict(self, features: dict) -> float:
        row = pd.DataFrame([features])
        return float(self.pipeline.predict(row)[0])

    def save(self, path: Path = MODEL_PATH):
        joblib.dump(self.pipeline, path)

    @classmethod
    def load(cls, path: Path = MODEL_PATH) -> "PriceOptimizerModel":
        obj = cls()
        obj.pipeline = joblib.load(path)
        return obj
