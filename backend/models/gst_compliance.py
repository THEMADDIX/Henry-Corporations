import joblib
import pandas as pd
from pathlib import Path
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OrdinalEncoder, LabelEncoder
from sklearn.compose import ColumnTransformer
from sklearn.metrics import classification_report, accuracy_score

MODEL_PATH = Path(__file__).parent.parent / "trained_models" / "gst_compliance.joblib"
LABEL_PATH = Path(__file__).parent.parent / "trained_models" / "gst_compliance_labels.joblib"

CATEGORICAL = ["sector"]
NUMERICAL = [
    "annual_turnover", "returns_due", "returns_filed",
    "late_payments", "years_registered", "amendments_filed", "filing_rate",
]
FEATURES = CATEGORICAL + NUMERICAL
TARGET = "compliance_risk"


def build_pipeline():
    preprocessor = ColumnTransformer([
        ("cat", OrdinalEncoder(handle_unknown="use_encoded_value", unknown_value=-1), CATEGORICAL),
    ], remainder="passthrough")

    return Pipeline([
        ("pre", preprocessor),
        ("model", GradientBoostingClassifier(
            n_estimators=150,
            max_depth=4,
            learning_rate=0.1,
            subsample=0.8,
            random_state=42,
        )),
    ])


class GSTComplianceModel:
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
        return {"compliance_risk": label, "probabilities": class_probs}

    def save(self, path: Path = MODEL_PATH):
        joblib.dump(self.pipeline, path)
        joblib.dump(self.label_encoder, LABEL_PATH)

    @classmethod
    def load(cls, path: Path = MODEL_PATH) -> "GSTComplianceModel":
        obj = cls()
        obj.pipeline = joblib.load(path)
        obj.label_encoder = joblib.load(LABEL_PATH)
        return obj
