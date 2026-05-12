import joblib
import pandas as pd
from pathlib import Path
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, roc_auc_score

MODEL_PATH = Path(__file__).parent.parent / "trained_models" / "churn_predictor.joblib"

FEATURES = [
    "tenure_months", "monthly_revenue", "num_platforms",
    "support_tickets", "last_activity_days", "num_services", "payment_delays",
]
TARGET = "churned"


def build_pipeline():
    return Pipeline([
        ("scaler", StandardScaler()),
        ("model", GradientBoostingClassifier(
            n_estimators=150,
            max_depth=4,
            learning_rate=0.1,
            subsample=0.8,
            random_state=42,
        )),
    ])


class ChurnPredictorModel:
    def __init__(self):
        self.pipeline = None

    def train(self, df: pd.DataFrame):
        X, y = df[FEATURES], df[TARGET]
        self.pipeline = build_pipeline()
        self.pipeline.fit(X, y)

    def evaluate(self, df: pd.DataFrame) -> dict:
        X, y = df[FEATURES], df[TARGET]
        preds = self.pipeline.predict(X)
        proba = self.pipeline.predict_proba(X)[:, 1]
        report = classification_report(y, preds, output_dict=True)
        return {
            "roc_auc": float(roc_auc_score(y, proba)),
            "precision": float(report["1"]["precision"]),
            "recall": float(report["1"]["recall"]),
            "f1": float(report["1"]["f1-score"]),
        }

    def predict(self, features: dict) -> dict:
        row = pd.DataFrame([features])
        label = int(self.pipeline.predict(row)[0])
        prob = float(self.pipeline.predict_proba(row)[0, 1])
        return {"churned": label, "churn_probability": prob}

    def save(self, path: Path = MODEL_PATH):
        joblib.dump(self.pipeline, path)

    @classmethod
    def load(cls, path: Path = MODEL_PATH) -> "ChurnPredictorModel":
        obj = cls()
        obj.pipeline = joblib.load(path)
        return obj
