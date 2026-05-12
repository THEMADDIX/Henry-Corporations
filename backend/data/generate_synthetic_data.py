"""Generate synthetic training data for all Henry Corporation backend models."""

import numpy as np
import pandas as pd
from pathlib import Path

RNG = np.random.default_rng(42)

DATA_DIR = Path(__file__).parent


def generate_sales_data(n=5000):
    platforms = ["Amazon", "Flipkart", "Meesho", "Shopsy", "Myntra"]
    categories = ["Electronics", "Fashion", "Home", "Beauty", "Sports", "Books"]
    seasons = ["Summer", "Winter", "Monsoon", "Festival"]

    platform = RNG.choice(platforms, n)
    category = RNG.choice(categories, n)
    season = RNG.choice(seasons, n)
    day_of_week = RNG.integers(0, 7, n)
    month = RNG.integers(1, 13, n)
    num_listings = RNG.integers(5, 500, n)
    avg_rating = RNG.uniform(3.0, 5.0, n)
    ad_spend = RNG.exponential(2000, n)

    platform_factor = {"Amazon": 1.5, "Flipkart": 1.3, "Meesho": 0.8, "Shopsy": 0.7, "Myntra": 1.1}
    cat_factor = {"Electronics": 2.0, "Fashion": 1.4, "Home": 1.1, "Beauty": 1.0, "Sports": 0.9, "Books": 0.6}
    season_factor = {"Festival": 1.8, "Winter": 1.2, "Summer": 1.0, "Monsoon": 0.9}

    pf = np.array([platform_factor[p] for p in platform])
    cf = np.array([cat_factor[c] for c in category])
    sf = np.array([season_factor[s] for s in season])

    sales = (
        5000
        + num_listings * 50
        + avg_rating * 800
        + ad_spend * 1.5
        + (7 - day_of_week) * 200
    ) * pf * cf * sf + RNG.normal(0, 3000, n)
    sales = np.clip(sales, 500, None)

    df = pd.DataFrame({
        "platform": platform,
        "category": category,
        "season": season,
        "day_of_week": day_of_week,
        "month": month,
        "num_listings": num_listings,
        "avg_rating": avg_rating,
        "ad_spend": ad_spend,
        "sales_amount": sales,
    })
    df.to_csv(DATA_DIR / "sales_data.csv", index=False)
    print(f"Sales data: {len(df)} rows -> sales_data.csv")
    return df


def generate_price_data(n=4000):
    platforms = ["Amazon", "Flipkart", "Meesho", "Shopsy", "Myntra"]
    categories = ["Electronics", "Fashion", "Home", "Beauty", "Sports", "Books"]

    platform = RNG.choice(platforms, n)
    category = RNG.choice(categories, n)
    cost_price = RNG.uniform(100, 5000, n)
    competitor_price = cost_price * RNG.uniform(1.1, 2.5, n)
    demand_score = RNG.uniform(0, 1, n)
    stock_level = RNG.integers(0, 1000, n)
    days_on_platform = RNG.integers(1, 730, n)

    margin = RNG.uniform(0.15, 0.45, n)
    optimal_price = cost_price * (1 + margin) + demand_score * 200 + RNG.normal(0, 100, n)
    optimal_price = np.clip(optimal_price, cost_price * 1.05, competitor_price * 1.1)

    df = pd.DataFrame({
        "platform": platform,
        "category": category,
        "cost_price": cost_price,
        "competitor_price": competitor_price,
        "demand_score": demand_score,
        "stock_level": stock_level,
        "days_on_platform": days_on_platform,
        "optimal_price": optimal_price,
    })
    df.to_csv(DATA_DIR / "price_data.csv", index=False)
    print(f"Price data: {len(df)} rows -> price_data.csv")
    return df


def generate_churn_data(n=3000):
    tenure_months = RNG.integers(1, 60, n)
    monthly_revenue = RNG.exponential(15000, n)
    num_platforms = RNG.integers(1, 6, n)
    support_tickets = RNG.integers(0, 20, n)
    last_activity_days = RNG.integers(1, 180, n)
    num_services = RNG.integers(1, 5, n)
    payment_delays = RNG.integers(0, 10, n)

    churn_prob = (
        0.05
        - tenure_months * 0.005
        - monthly_revenue * 0.000005
        - num_platforms * 0.02
        + support_tickets * 0.03
        + last_activity_days * 0.004
        + payment_delays * 0.06
    )
    churn_prob = 1 / (1 + np.exp(-churn_prob * 3))
    churned = RNG.binomial(1, np.clip(churn_prob, 0.02, 0.98), n)

    df = pd.DataFrame({
        "tenure_months": tenure_months,
        "monthly_revenue": monthly_revenue,
        "num_platforms": num_platforms,
        "support_tickets": support_tickets,
        "last_activity_days": last_activity_days,
        "num_services": num_services,
        "payment_delays": payment_delays,
        "churned": churned,
    })
    df.to_csv(DATA_DIR / "churn_data.csv", index=False)
    print(f"Churn data: {len(df)} rows -> churn_data.csv (churn rate: {churned.mean():.2%})")
    return df


def generate_loan_data(n=2500):
    annual_revenue = RNG.exponential(800000, n)
    years_in_business = RNG.integers(1, 25, n)
    credit_score = RNG.integers(550, 850, n)
    loan_amount = RNG.uniform(50000, 5000000, n)
    existing_debt = RNG.exponential(200000, n)
    num_employees = RNG.integers(1, 200, n)
    sector = RNG.choice(["ecommerce", "retail", "manufacturing", "services"], n)

    debt_ratio = existing_debt / np.maximum(annual_revenue, 1)
    loan_to_revenue = loan_amount / np.maximum(annual_revenue, 1)

    risk_score = (
        - (credit_score - 550) / 300 * 2
        - years_in_business * 0.05
        - np.log1p(annual_revenue) * 0.1
        + debt_ratio * 1.5
        + loan_to_revenue * 0.8
    )
    risk_score = risk_score + RNG.normal(0, 0.3, n)

    risk_level = pd.cut(risk_score, bins=[-np.inf, -0.5, 0.5, np.inf], labels=["low", "medium", "high"])

    df = pd.DataFrame({
        "annual_revenue": annual_revenue,
        "years_in_business": years_in_business,
        "credit_score": credit_score,
        "loan_amount": loan_amount,
        "existing_debt": existing_debt,
        "num_employees": num_employees,
        "sector": sector,
        "debt_ratio": debt_ratio,
        "loan_to_revenue": loan_to_revenue,
        "risk_level": risk_level,
    })
    df.to_csv(DATA_DIR / "loan_data.csv", index=False)
    print(f"Loan data: {len(df)} rows -> loan_data.csv")
    return df


def generate_gst_data(n=2000):
    annual_turnover = RNG.exponential(2000000, n)
    returns_due = RNG.integers(6, 25, n)
    returns_filed = np.minimum(returns_due, returns_due - RNG.integers(0, 8, n))
    late_payments = RNG.integers(0, 12, n)
    sector = RNG.choice(["goods", "services", "mixed", "exempt"], n)
    years_registered = RNG.integers(1, 15, n)
    amendments_filed = RNG.integers(0, 10, n)

    filing_rate = returns_filed / returns_due
    risk_score = (
        (1 - filing_rate) * 3
        + late_payments * 0.2
        + amendments_filed * 0.15
        - years_registered * 0.05
        - np.log1p(annual_turnover) * 0.05
    )
    risk_score += RNG.normal(0, 0.2, n)

    compliance_risk = pd.cut(risk_score, bins=[-np.inf, 0.3, 1.0, np.inf], labels=["low", "medium", "high"])

    df = pd.DataFrame({
        "annual_turnover": annual_turnover,
        "returns_due": returns_due,
        "returns_filed": returns_filed,
        "late_payments": late_payments,
        "sector": sector,
        "years_registered": years_registered,
        "amendments_filed": amendments_filed,
        "filing_rate": filing_rate,
        "compliance_risk": compliance_risk,
    })
    df.to_csv(DATA_DIR / "gst_data.csv", index=False)
    print(f"GST data: {len(df)} rows -> gst_data.csv")
    return df


if __name__ == "__main__":
    print("Generating synthetic datasets...\n")
    generate_sales_data()
    generate_price_data()
    generate_churn_data()
    generate_loan_data()
    generate_gst_data()
    print("\nAll datasets generated successfully.")
