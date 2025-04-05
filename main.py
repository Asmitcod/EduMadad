from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from pydantic import BaseModel
import database
from database import get_db_connection

app = FastAPI(title="Student Loan Navigator API")

# CORS Middleware for frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your frontend origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data model
class GovernmentScheme(BaseModel):
    id: Optional[int] = None
    scheme_name: str
    short_description: Optional[str] = None
    detailed_description: Optional[str] = None
    criteria: Optional[str] = None
    contact_details: Optional[str] = None
    terms_and_conditions: Optional[str] = None
    repayment_period: Optional[str] = None
    moratorium_period: Optional[str] = None
    maximum_moratorium_period: Optional[str] = None
    interest_rate_min: Optional[float] = None
    interest_rate_max: Optional[float] = None
    loan_processing_fee: Optional[float] = None
    prepayment_charges: Optional[float] = None
    maximum_amount: Optional[float] = None
    country: Optional[str] = None
    institute_specific: Optional[str] = None
    website_url: Optional[str] = None
    min_10th_marks: Optional[float] = None
    min_12th_marks: Optional[float] = None
    eligible_states: Optional[str] = None
    eligible_castes: Optional[str] = None
    eligible_genders: Optional[str] = None
    parent1_profession_criteria: Optional[str] = None
    parent2_profession_criteria: Optional[str] = None
    govt_achievements_required: Optional[str] = None

# Root API
@app.get("/")
def read_root():
    return {"message": "Welcome to Student Loan Navigator API"}

# Get all schemes
@app.get("/schemes", response_model=List[GovernmentScheme])
def get_all_schemes():
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM government_schemes")
        schemes = cursor.fetchall()
        return schemes
    finally:
        conn.close()

# Get scheme by ID
@app.get("/schemes/{scheme_id}", response_model=GovernmentScheme)
def get_scheme_by_id(scheme_id: int):
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM government_schemes WHERE id = %s", (scheme_id,))
        scheme = cursor.fetchone()
        if scheme is None:
            raise HTTPException(status_code=404, detail="Scheme not found")
        return scheme
    finally:
        conn.close()

# Filter schemes based on eligibility
@app.get("/search", response_model=List[GovernmentScheme])
def search_schemes(
    interest_rate_max: Optional[float] = Query(None),
    repayment_period: Optional[str] = Query(None),
    maximum_amount_min: Optional[float] = Query(None),
    marks_10th: Optional[float] = Query(None),
    marks_12th: Optional[float] = Query(None),
    eligible_states: Optional[str] = Query(None),
    eligible_castes: Optional[str] = Query(None),
    eligible_genders: Optional[str] = Query(None),
    parent1_profession: Optional[str] = Query(None),
    parent2_profession: Optional[str] = Query(None),
    govt_achievements: Optional[str] = Query(None)
):
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        query = "SELECT * FROM government_schemes WHERE 1=1"
        params = []

        if interest_rate_max is not None:
            query += " AND interest_rate_max <= %s"
            params.append(interest_rate_max)

        if repayment_period is not None:
            query += " AND repayment_period = %s"
            params.append(repayment_period)

        if maximum_amount_min is not None:
            query += " AND maximum_amount >= %s"
            params.append(maximum_amount_min)

        if marks_10th is not None:
            query += " AND (min_10th_marks <= %s OR min_10th_marks IS NULL)"
            params.append(marks_10th)

        if marks_12th is not None:
            query += " AND (min_12th_marks <= %s OR min_12th_marks IS NULL)"
            params.append(marks_12th)

        if eligible_states is not None:
            query += " AND (eligible_states ILIKE %s OR eligible_states = 'ALL')"
            params.append(f"%{eligible_states}%")

        if eligible_castes is not None:
            query += " AND (eligible_castes ILIKE %s OR eligible_castes = 'ALL')"
            params.append(f"%{eligible_castes}%")

        if eligible_genders is not None:
            query += " AND (eligible_genders ILIKE %s OR eligible_genders = 'ALL')"
            params.append(f"%{eligible_genders}%")

        if parent1_profession is not None:
            query += " AND (parent1_profession_criteria ILIKE %s OR parent1_profession_criteria IS NULL)"
            params.append(f"%{parent1_profession}%")

        if parent2_profession is not None:
            query += " AND (parent2_profession_criteria ILIKE %s OR parent2_profession_criteria IS NULL)"
            params.append(f"%{parent2_profession}%")

        if govt_achievements is not None:
            query += " AND (govt_achievements_required ILIKE %s OR govt_achievements_required IS NULL)"
            params.append(f"%{govt_achievements}%")

        cursor.execute(query, params)
        schemes = cursor.fetchall()
        return schemes
    finally:
        conn.close()

# To run the app with: `python main.py`
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
