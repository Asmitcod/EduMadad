import os
from dotenv import load_dotenv
import psycopg2
from psycopg2.extras import RealDictCursor

# ✅ Load .env file forcefully
dotenv_loaded = load_dotenv(override=True)
print(f"🔹 .env Loaded: {dotenv_loaded}")

# ✅ Debug environment variables
print("🔹 DB_HOST:", os.getenv("DB_HOST"))
print("🔹 DB_NAME:", os.getenv("DB_NAME"))
print("🔹 DB_USER:", os.getenv("DB_USER"))
print("🔹 DB_PASSWORD:", "****" if os.getenv("DB_PASSWORD") else "None")  # Hide password
print("🔹 DB_PORT:", os.getenv("DB_PORT"))

# ✅ Construct DATABASE_URL
DB_CONFIG = {
    "host": os.getenv("DB_HOST"),
    "dbname": os.getenv("DB_NAME"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "port": os.getenv("DB_PORT"),
}

DATABASE_URL = f"postgresql://{DB_CONFIG['user']}:{DB_CONFIG['password']}@{DB_CONFIG['host']}:{DB_CONFIG['port']}/{DB_CONFIG['dbname']}"
print("🔹 Database URL:", DATABASE_URL)  # Debugging

# ✅ Database connection function
def get_db_connection():
    try:
        conn = psycopg2.connect(**DB_CONFIG, cursor_factory=RealDictCursor)
        return conn
    except Exception as e:
        print(f"❌ Database connection error: {e}")
        raise Exception(f"Database connection error: {str(e)}")