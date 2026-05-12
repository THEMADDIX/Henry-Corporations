import joblib
import pandas as pd
from pathlib import Path
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OrdinalEncoder, LabelEncoder
from sklearn.compose import ColumnTransformer
from sklearn.metrics import classification_report, accuracy_score

MODEL_PATH = Path(__file__).parent.parent / "trained_models" / "loan_risk.joblib"
LABEL_PATH = Path(__file__).parent.parent / "trained_models" / "loan_risk_labels.joblib"

CATEGORICAL = ["sector"]
NUMERICAL = [
    "annual_revenue", "years_in_business", "credit_score",
    "loan_amount", "existing_debt", "num_employees",
    "debt_ratio", "loan_to_revenue",
]
FEATURES = CATEGORICAL + NUMERICAL
TARGET = "risk_level"


def build_pipeline():
    preprocessor = ColumnTransformer([
        ("cat", OrdinalEncoder(handle_unknown="use_encoded_value", unknown_value=-1), CATEGORICAL),
    ], remainder="passthrough")

    return Pipeline([
        ("pre", preprocessor),
        ("model", RandomForestClassifier(
            n_estimators=200,
            max_depth=8,
            min_samples_leaf=5,
            class_weight="balanced",
            random_state=42,
            n_jobs=-1,
        )),
    ])


class LoanRiskModel:
    def __init__(self):
        self.pipeline = None
        self.label_encoder = LabelEncoder()

    def train(self, df: pd.DataFrame):
        X = df[FEATURES]
        y = self.label_encoder.fit_transform(df[TARGET].astype(str))
        self.pipeline = build_pipeline()
        self.pipeline.fit(X, y)

    def evaluate(self, df: pd.DataFrame) -> dict:
        X = df[FEATURES]
        y = self.label_encoder.transform(df[TARGET].astype(str))
        preds = self.pipeline.predict(X)
        report = classification_report(y, preds, target_names=self.label_encoder.classes_, output_dict=True)
        return {
            "accuracy": float(accuracy_score(y, preds)),
            "macro_f1": float(report["macro avg"]["f1-score"]),
        }

    def predict(self, features: dict) -> dict:
        row = pd.DataFrame([features])
        encoded = self.pipeline.predict(row)[0]
        proba = self.pipeline.predict_proba(row)[0]
        label = self.label_encoder.inverse_transform([encoded])[0]
        class_probs = {
            cls: float(p) for cls, p in zip(self.label_encoder.classes_, proba)
        }
        return {"risk_level": label, "probabilities": class_probs}

    def save(self, path: Path = MODEL_PATH):
        joblib.dump(self.pipeline, path)
        joblib.dump(self.label_encoder, LABEL_PATH)

    @classmethod
    def load(cls, path: Path = MODEL_PATH) -> "LoanRiskModel":
        obj = cls()
        obj.pipeline = joblib.load(path)
        obj.label_encoder = joblib.load(LABEL_PATH)
        return obj
