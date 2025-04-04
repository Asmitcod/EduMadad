from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from pydantic import BaseModel
import database  # ✅ Ensure database.py is executed
from database import get_db_connection  # ✅ Import database function

# Create FastAPI app
app = FastAPI(title="Student Loan Navigator API")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Debugging: Print database connection URL
print("🔹 Database connection initialized.")

# Pydantic model for scheme data
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

# Run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
