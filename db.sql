--CREATING THE TABLE
CREATE TABLE IF NOT EXISTS government_schemes (
    id SERIAL PRIMARY KEY,
    scheme_name VARCHAR(255) NOT NULL,
    short_description VARCHAR(255),
    detailed_description TEXT,
    criteria TEXT,
    contact_details TEXT,
    terms_and_conditions TEXT,
    repayment_period VARCHAR(50),
    moratorium_period VARCHAR(50),
    maximum_moratorium_period VARCHAR(50),
    interest_rate_min DECIMAL(5,2),
    interest_rate_max DECIMAL(5,2),
    loan_processing_fee DECIMAL(5,2),
    prepayment_charges DECIMAL(5,2),
    maximum_amount DECIMAL(12,2),
    country VARCHAR(100),
    institute_specific VARCHAR(255),
    website_url VARCHAR(255),
    min_10th_marks DECIMAL(5,2),
    min_12th_marks DECIMAL(5,2),
    eligible_states VARCHAR(255),
    eligible_castes VARCHAR(255),
    eligible_genders VARCHAR(255),
    parent1_profession_criteria TEXT,
    parent2_profession_criteria TEXT,
    govt_achievements_required TEXT
);

-- Insert all the education loan schemes with details
INSERT INTO government_schemes (
    scheme_name,
    short_description,
    detailed_description,
    criteria,
    contact_details,
    terms_and_conditions,
    repayment_period,
    moratorium_period,
    maximum_moratorium_period,
    interest_rate_min,
    interest_rate_max,
    loan_processing_fee,
    prepayment_charges,
    maximum_amount,
    country,
    institute_specific,
    website_url,
    min_10th_marks,
    min_12th_marks,
    eligible_states,
    eligible_castes,
    eligible_genders,
    parent1_profession_criteria,
    parent2_profession_criteria,
    govt_achievements_required
) VALUES
-- Bank of Baroda Schemes
(
    'Pradhan Mantri Vidyalaxmi - Bank of Baroda',
    'PMVL Scheme by BOB',
    'Special education loan scheme under PM Vidyalaxmi for students pursuing higher education in quality institutions.',
    'All graduation/post-graduation degree and diploma courses offered by 860 QHEIs listed under the scheme.',
    'Customer Service: 1800 258 4455 (Toll-Free)
Email: education.loan@bankofbaroda.com',
    'Student must have secured admission to courses in QHEIs recognized under the scheme.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.85,
    9.40,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For institutions listed under the PM Vidyalaxmi scheme',
    'www.bankofbaroda.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to QHEIs under the PMVL scheme' -- Government achievement requirement
),
(
    'Baroda Education Loan to Students of Premier Institutions In India',
    'BOB Premier Institutions Loan',
    'Specialized education loan for students who have secured admission to premier institutions in India like IITs, IIMs, NITs etc.',
    'Students admitted to premier institutions like IITs, IIMs, NITs, IISc, AIIMS, and other specified premier institutions.',
    'Customer Service: 1800 258 4455 (Toll-Free)
Email: education.loan@bankofbaroda.com',
    'Student must have secured admission to specified premier institutions.
Co-borrower (parent/guardian) is mandatory.
Margin: 5% for loans up to Rs. 30 lakhs, 15% for loans above Rs. 30 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.35,
    8.90,
    0,
    0,
    10000000.00, -- 1 Crore INR
    'INDIA',
    'For premier institutions only (IITs, IIMs, NITs, etc.)',
    'www.bankofbaroda.com',
    70.00, -- Minimum 70% in 10th
    70.00, -- Minimum 70% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Selection through JEE/CAT/GATE/NEET or equivalent entrance examinations' -- Government achievement requirement
),

-- Bank of India Schemes
(
    'Star Education Loan Studies Abroad',
    'BOI Foreign Education Loan',
    'Comprehensive education loan scheme for students pursuing higher education abroad in recognized universities.',
    'Students admitted to recognized universities/institutions abroad for graduate, post-graduate, and professional courses.',
    'Customer Service: 1800 103 1906 (Toll-Free)
Email: starcare@bankofindia.co.in',
    'Student must have secured admission to recognized universities abroad.
Co-borrower (parent/guardian) is mandatory.
Margin: 15% for loans.
Collateral security required for loans above Rs. 7.5 lakhs.',
    '15 YEARS',
    'Course Period + 6 months',
    'Course Period + 1 year',
    8.40,
    9.65,
    0.50,
    0,
    60000000.00, -- 6 Crore INR
    'INDIA',
    'For recognized foreign universities',
    'www.bankofindia.co.in',
    65.00, -- Minimum 65% in 10th
    70.00, -- Minimum 70% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'IELTS/TOEFL/GRE/GMAT as per university requirements' -- Government achievement requirement
),
(
    'West Bengal Student Credit Card',
    'WB Student Credit Card by BOI',
    'Special education loan scheme in collaboration with West Bengal government to provide financial assistance to students from West Bengal.',
    'Students domiciled in West Bengal pursuing studies in India or abroad.',
    'Customer Service: 1800 103 1906 (Toll-Free)
Email: starcare@bankofindia.co.in',
    'Student must be a domicile of West Bengal.
Age limit: 18-40 years.
Co-borrower (parent/guardian) is mandatory.
No margin required.
No collateral security required.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    4.00,
    4.00, -- Fixed rate subsidized by state government
    0,
    0,
    1000000.00, -- 10 Lakhs INR
    'INDIA',
    'For all recognized institutions',
    'www.bankofindia.co.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'West Bengal', -- Only for West Bengal residents
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'No specific achievement required' -- No specific government achievement required
),
(
    'PM-Vidyalaxmi Education Loan - BOI',
    'PM-VL by Bank of India',
    'Education loan scheme under PM Vidyalaxmi initiative for students pursuing higher education in quality institutions.',
    'Students admitted to quality higher educational institutions (QHEIs) listed under the PM Vidyalaxmi scheme.',
    'Customer Service: 1800 103 1906 (Toll-Free)
Email: starcare@bankofindia.co.in',
    'Student must have secured admission to courses in QHEIs recognized under the scheme.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.90,
    9.30,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For institutions listed under the PM Vidyalaxmi scheme',
    'www.bankofindia.co.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to QHEIs under the PMVL scheme' -- Government achievement requirement
),
(
    'Star Education Loan Studies in India',
    'BOI Domestic Education Loan',
    'Education loan scheme for students pursuing higher education in recognized institutions within India.',
    'Students admitted to recognized colleges/universities in India for graduate, post-graduate, and professional courses.',
    'Customer Service: 1800 103 1906 (Toll-Free)
Email: starcare@bankofindia.co.in',
    'Student must have secured admission to recognized institutions in India.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.
Collateral security required for loans above Rs. 7.5 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.20,
    9.50,
    0,
    0,
    5000000.00, -- 50 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.bankofindia.co.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'No specific achievement required' -- No specific government achievement required
),

-- Central Bank of India Schemes
(
    'Cent Vidyarthi Scheme',
    'CBI Education Loan',
    'Comprehensive education loan scheme for students pursuing higher education in India and abroad.',
    'Students admitted to recognized institutions in India and abroad.',
    'Customer Service: 1800 200 1911 (Toll-Free)
Email: support@centralbank.co.in',
    'Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs for studies in India and 15% for studies abroad.
Collateral security required for loans above Rs. 7.5 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.10,
    9.45,
    0,
    0,
    5000000.00, -- 50 Lakhs INR
    'INDIA',
    'For all recognized institutions',
    'www.centralbankofindia.co.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'No specific achievement required' -- No specific government achievement required
),

-- Canara Bank Schemes
(
    'IBAs Model Education Loan Scheme for study in India and Abroad',
    'Canara IBA Model Loan',
    'Education loan scheme following IBA model guidelines for students pursuing higher education in India and abroad.',
    'Students admitted to recognized institutions in India and abroad.',
    'Customer Service: 1800 425 0018 (Toll-Free)
Email: educationloan@canarabank.com',
    'Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs for studies in India and 15% for studies abroad.
Collateral security required for loans above Rs. 7.5 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.25,
    9.50,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For all recognized institutions',
    'www.canarabank.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'No specific achievement required' -- No specific government achievement required
),
(
    'VIDYA TURANT',
    'Canara Instant Education Loan',
    'Fast-track education loan scheme with quick processing and approval for premier institutions.',
    'Students admitted to premier institutions listed by Canara Bank.',
    'Customer Service: 1800 425 0018 (Toll-Free)
Email: educationloan@canarabank.com',
    'Student must have secured admission to specified premier institutions.
Digital loan processing with minimal documentation.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.85,
    9.10,
    0,
    0,
    5000000.00, -- 50 Lakhs INR
    'INDIA',
    'For premier institutions specified by Canara Bank',
    'www.canarabank.com',
    65.00, -- Minimum 65% in 10th
    65.00, -- Minimum 65% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Selection through entrance examinations for premier institutions' -- Government achievement requirement
),
(
    'PM Vidyalaxmi - Canara Bank',
    'PMVL by Canara Bank',
    'Education loan scheme under PM Vidyalaxmi initiative for students pursuing higher education in quality institutions.',
    'Students admitted to quality higher educational institutions (QHEIs) listed under the PM Vidyalaxmi scheme.',
    'Customer Service: 1800 425 0018 (Toll-Free)
Email: educationloan@canarabank.com',
    'Student must have secured admission to courses in QHEIs recognized under the scheme.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.95,
    9.35,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For institutions listed under the PM Vidyalaxmi scheme',
    'www.canarabank.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to QHEIs under the PMVL scheme' -- Government achievement requirement
),
(
    'IBA Skill Loan Scheme',
    'Canara Skill Development Loan',
    'Loan scheme for skill development training in recognized institutions following IBA guidelines.',
    'Students enrolled in skill development courses in recognized institutions.',
    'Customer Service: 1800 425 0018 (Toll-Free)
Email: educationloan@canarabank.com',
    'Student must be enrolled in skill development courses in recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No collateral security required for loans up to Rs. 7.5 lakhs.
Age: 18-50 years.',
    '7 YEARS',
    'Course Period + 6 months',
    'Course Period + 6 months',
    9.00,
    10.50,
    0,
    0,
    150000.00, -- 1.5 Lakhs INR
    'INDIA',
    'For skill development institutions recognized by NSDC/Sector Skill Councils/State Skill Development Missions/State Skill Corporations',
    'www.canarabank.com',
    50.00, -- Minimum 50% in 10th
    50.00, -- Minimum 50% in 12th (if applicable)
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'No specific achievement required' -- No specific government achievement required
),

-- DCB Bank Schemes
(
    'Secured education loan for higher studies domestic',
    'DCB Domestic Education Loan',
    'Education loan scheme for students pursuing higher education in recognized institutions within India with collateral security.',
    'Students admitted to recognized institutions in India.',
    'Customer Service: 1800 209 5363 (Toll-Free)
Email: customercare@dcbbank.com',
    'Student must have secured admission to recognized institutions in India.
Co-borrower (parent/guardian) is mandatory.
Collateral security required for all loans.
Margin: 15% of the loan amount.',
    '12 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    9.50,
    11.00,
    0.50,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.dcbbank.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'No specific achievement required' -- No specific government achievement required
),
(
    'Secured Education for higher studies overseas',
    'DCB Foreign Education Loan',
    'Education loan scheme for students pursuing higher education in recognized universities abroad with collateral security.',
    'Students admitted to recognized universities abroad.',
    'Customer Service: 1800 209 5363 (Toll-Free)
Email: customercare@dcbbank.com',
    'Student must have secured admission to recognized universities abroad.
Co-borrower (parent/guardian) is mandatory.
Collateral security required for all loans.
Margin: 15-20% of the loan amount.',
    '12 YEARS',
    'Course Period + 6 months',
    'Course Period + 1 year',
    9.75,
    11.50,
    0.75,
    0,
    10000000.00, -- 1 Crore INR
    'INDIA',
    'For recognized universities abroad',
    'www.dcbbank.com',
    65.00, -- Minimum 65% in 10th
    65.00, -- Minimum 65% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'IELTS/TOEFL/GRE/GMAT as per university requirements' -- Government achievement requirement
),

-- IDBI Bank Schemes
(
    'General Offer for studies in India',
    'IDBI Domestic Education Loan',
    'Education loan scheme for students pursuing higher education in recognized institutions within India.',
    'Students admitted to recognized institutions in India.',
    'Customer Service: 1800 209 4324 (Toll-Free)
Email: info@idbi.co.in',
    'Student must have secured admission to recognized institutions in India.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.
Collateral security required for loans above Rs. 7.5 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.50,
    9.75,
    0,
    0,
    5000000.00, -- 50 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.idbibank.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'No specific achievement required' -- No specific government achievement required
),
(
    'Education Loan for Studies Abroad',
    'IDBI Foreign Education Loan',
    'Education loan scheme for students pursuing higher education in recognized universities abroad.',
    'Students admitted to recognized universities abroad.',
    'Customer Service: 1800 209 4324 (Toll-Free)
Email: info@idbi.co.in',
    'Student must have secured admission to recognized universities abroad.
Co-borrower (parent/guardian) is mandatory.
Margin: 15% for all loans.
Collateral security required for all loans.',
    '15 YEARS',
    'Course Period + 6 months',
    'Course Period + 1 year',
    8.75,
    10.25,
    0.50,
    0,
    9000000.00, -- 90 Lakhs INR
    'INDIA',
    'For recognized universities abroad',
    'www.idbibank.in',
    65.00, -- Minimum 65% in 10th
    65.00, -- Minimum 65% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'IELTS/TOEFL/GRE/GMAT as per university requirements' -- Government achievement requirement
),

-- Indian Bank Schemes
(
    'Education Loan under PM Vidyalaxmi Scheme - Indian Bank',
    'PMVL by Indian Bank',
    'Education loan scheme under PM Vidyalaxmi initiative for students pursuing higher education in quality institutions.',
    'Students admitted to quality higher educational institutions (QHEIs) listed under the PM Vidyalaxmi scheme.',
    'Customer Service: 1800 425 1400 (Toll-Free)
Email: educationloan@indianbank.co.in',
    'Student must have secured admission to courses in QHEIs recognized under the scheme.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.85,
    9.25,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For institutions listed under the PM Vidyalaxmi scheme',
    'www.indianbank.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to QHEIs under the PMVL scheme' -- Government achievement requirement
),

-- Indian Overseas Bank Schemes
(
    'IOB VIDYA SHREST',
    'IOB Premier Institution Loan',
    'Education loan scheme for students admitted to premier institutions in India.',
    'Students admitted to premier institutions like IITs, IIMs, NITs, AIIMS, and other specified premier institutions.',
    'Customer Service: 1800 425 4445 (Toll-Free)
Email: educationloan@iobnet.co.in',
    'Student must have secured admission to specified premier institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.
No collateral security required for loans up to Rs. 30 lakhs for specified premier institutions.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.50,
    8.85,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For premier institutions only (IITs, IIMs, NITs, etc.)',
    'www.iob.in',
    70.00, -- Minimum 70% in 10th
    70.00, -- Minimum 70% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Selection through JEE/CAT/GATE/NEET or equivalent entrance examinations' -- Government achievement requirement
),
(
    'VIDYA SURAKSHA',
    'IOB Secured Education Loan',
    'Education loan scheme with collateral security for students pursuing higher education in India and abroad.',
    'Students admitted to recognized institutions in India and abroad.',
    'Customer Service: 1800 425 4445 (Toll-Free)
Email: educationloan@iobnet.co.in',
    'Student must have secured admission to recognized institutions in India or abroad.
Co-borrower (parent/guardian) is mandatory.
Margin: 5% for studies in India and 15% for studies abroad.
Collateral security required for all loans.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.15,
    9.50,
    0.25,
    0,
    8000000.00,  -- 80 Lakhs INR
    'INDIA',
    'For all recognized institutions',
    'www.iob.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'No specific achievement required' -- No specific government achievement required
),
(
    'PM VIDYALAXMI SCHEME - IOB',
    'PM-VL by IOB', 
    'Education loan scheme under PM Vidyalaxmi initiative for students pursuing higher education in quality institutions.',
    'Students admitted to quality higher educational institutions (QHEIs) listed under the PM Vidyalaxmi scheme.',
    'Customer Service: 1800 425 4445 (Toll-Free)
Email: educationloan@iobnet.co.in',
    'Student must have secured admission to courses in QHEIs recognized under the scheme.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.90,
    9.35, 
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For institutions listed under the PM Vidyalaxmi scheme',
    'www.iob.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to QHEIs under the PMVL scheme' -- Government achievement requirement
),
(
    'VIDYA JYOTHI',
    'IOB Merit Scholarship Loan',
    'Education loan scheme with scholarship component for meritorious students from economically weaker sections.',
    'Meritorious students from economically weaker sections admitted to recognized institutions in India.',
    'Customer Service: 1800 425 4445 (Toll-Free)
Email: educationloan@iobnet.co.in',
    'Student must have secured minimum 80% marks in qualifying examination.
Annual family income should not exceed Rs. 4.5 lakhs.
Co-borrower (parent/guardian) is mandatory.
No margin required.
No collateral security required for loans up to Rs. 10 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.95,
    8.95,
    0,
    0,
    1000000.00, -- 10 Lakhs INR
    'INDIA',
    'For all recognized institutions in India',
    'www.iob.in',
    80.00, -- Minimum 80% in 10th
    80.00, -- Minimum 80% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'Annual family income not exceeding Rs. 4.5 lakhs', -- Income criteria for parent1
    'Annual family income not exceeding Rs. 4.5 lakhs', -- Income criteria for parent2
    'Merit-based (minimum 80% marks in qualifying examination)' -- Government achievement requirement
),


-- Karnataka Vikas Grameena Bank PM-VIDYALAXMI
(
    'Karnataka Vikas Grameena Bank PM-VIDYALAXMI',
    'PMVL Scheme by KVGB',
    'Special education loan scheme under PM Vidyalaxmi for students pursuing higher education in quality institutions.',
    'All graduation/post-graduation degree and diploma courses offered by QHEIs listed under the scheme.',
    'Customer Service: 1800 123 2220 (Toll-Free)
Email: education.loan@kvgbank.com',
    'Student must have secured admission to courses in QHEIs recognized under the scheme.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.75,
    9.25,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For institutions listed under the PM Vidyalaxmi scheme',
    'www.kvgbank.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'KARNATAKA', -- Available in Karnataka state
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to QHEIs under the PMVL scheme' -- Government achievement requirement
),

-- Bank of Maharashtra Model Education Loan Scheme
(
    'Bank of Maharashtra Model Education Loan Scheme',
    'Model Education Loan by Bank of Maharashtra',
    'Standard education loan scheme for students pursuing higher education in India and abroad.',
    'Graduation, post-graduation, professional and technical courses in India and abroad.',
    'Customer Service: 1800 102 2222 (Toll-Free)
Email: education.loan@mahabank.co.in',
    'Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs for studies in India, 15% for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.00,
    9.50,
    0,
    0,
    7500000.00, -- 75 Lakhs INR for studies in India
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.bankofmaharashtra.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions' -- Government achievement requirement
),

-- Bank of Maharashtra Pradhan Mantri Vidya Laxmi
(
    'Bank of Maharashtra Pradhan Mantri Vidya Laxmi (PM – Vidyalaxmi)',
    'PMVL Scheme by BoM for QHEIs',
    'Education Loan scheme for quality Higher Educational Institutions (QHEIs) under PM Vidyalaxmi initiative.',
    'All graduation/post-graduation degree and diploma courses offered by QHEIs listed under the scheme.',
    'Customer Service: 1800 102 2222 (Toll-Free)
Email: pmvidyalaxmi@mahabank.co.in',
    'Student must have secured admission to courses in QHEIs recognized under the scheme.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.70,
    9.25,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For institutions listed under the PM Vidyalaxmi scheme',
    'www.bankofmaharashtra.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to QHEIs under the PMVL scheme' -- Government achievement requirement
),

-- MEGHALAYA RURAL BANK EDUCATION LOAN
(
    'MEGHALAYA RURAL BANK EDUCATION LOAN',
    'Education Loan by MRB',
    'Education loan scheme for students from Meghalaya pursuing higher education in India and abroad.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities.',
    'Customer Service: 0364-252xxxx
Email: educationloan@meghalayaruralbank.co.in',
    'Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs for studies in India, 15% for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.25,
    9.75,
    0,
    0,
    5000000.00, -- 50 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.meghalayaruralbank.co.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'MEGHALAYA', -- Primarily available in Meghalaya
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions' -- Government achievement requirement
),

-- THE NAINITAL BANK LIMITED Education Loan "Gyani"
(
    'THE NAINITAL BANK LIMITED Education Loan "Gyani"',
    'Gyani Education Loan by Nainital Bank',
    'Education loan scheme for students pursuing higher education in India and abroad under the Gyani program.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities.',
    'Customer Service: 1800 180 2222 (Toll-Free)
Email: gyani.eduloans@nainitalbank.co.in',
    'Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs for studies in India, 15% for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.20,
    9.70,
    0.50, -- 0.5% processing fee
    0,
    6000000.00, -- 60 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.nainitalbank.co.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions' -- Government achievement requirement
),

-- Karnataka Gramin Bank PM-VIDYALAXMI SCHEME
(
    'Karnataka Gramin Bank PM-VIDYALAXMI SCHEME',
    'PMVL Scheme by KGB',
    'Special education loan scheme under PM Vidyalaxmi for students pursuing higher education in quality institutions.',
    'All graduation/post-graduation degree and diploma courses offered by QHEIs listed under the scheme.',
    'Customer Service: 1800 425 1444 (Toll-Free)
Email: education.loan@kgbank.com',
    'Student must have secured admission to courses in QHEIs recognized under the scheme.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.75,
    9.25,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For institutions listed under the PM Vidyalaxmi scheme',
    'www.karnatakagraminbank.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'KARNATAKA', -- Available in Karnataka state
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to QHEIs under the PMVL scheme' -- Government achievement requirement
),

-- Karnataka Gramin Bank Vidya sagar education loan scheme
(
    'Karnataka Gramin Bank Vidya sagar education loan scheme',
    'Vidya Sagar Loan by KGB',
    'Education loan scheme for students pursuing higher education in India.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities in India.',
    'Customer Service: 1800 425 1444 (Toll-Free)
Email: vidyasagar.loan@kgbank.com',
    'Student must have secured admission to recognized institutions in India.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.25,
    9.75,
    0,
    0,
    5000000.00, -- 50 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.karnatakagraminbank.com',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'KARNATAKA', -- Available in Karnataka state
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions' -- Government achievement requirement
),

-- Karnataka Gramin Bank VIDYA SAGAR EDUCATION LOAN SCHEME ABROAD
(
    'Karnataka Gramin Bank VIDYA SAGAR EDUCATION LOAN SCHEME ABROAD',
    'Vidya Sagar Abroad Loan by KGB',
    'Education loan scheme for students pursuing higher education abroad.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities abroad.',
    'Customer Service: 1800 425 1444 (Toll-Free)
Email: vidyasagar.abroad@kgbank.com',
    'Student must have secured admission to recognized institutions abroad.
Co-borrower (parent/guardian) is mandatory.
15% margin for all loans for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.50,
    10.00,
    0,
    0,
    8000000.00, -- 80 Lakhs INR
    'ABROAD',
    'For recognized institutions abroad',
    'www.karnatakagraminbank.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'KARNATAKA', -- Available in Karnataka state
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions abroad' -- Government achievement requirement
),

-- Punjab National Bank PNB PRATIBHA
(
    'Punjab National Bank PNB PRATIBHA',
    'PNB PRATIBHA for Merit Students',
    'Special education loan scheme for meritorious students pursuing higher education in premier institutions.',
    'Students who have secured admission to premier institutions like IITs, IIMs, NITs, AIIMS etc.',
    'Customer Service: 1800 180 2222 (Toll-Free)
Email: pratibha.eduloans@pnb.co.in',
    'Student must have secured admission to specified premier institutions.
Co-borrower (parent/guardian) is mandatory.
Margin: 5% for loans up to Rs. 30 lakhs, 15% for loans above Rs. 30 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.45,
    8.95,
    0,
    0,
    10000000.00, -- 1 Crore INR
    'INDIA',
    'For premier institutions only (IITs, IIMs, NITs, etc.)',
    'www.pnbindia.in',
    70.00, -- Minimum 70% in 10th
    70.00, -- Minimum 70% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Selection through JEE/CAT/GATE/NEET or equivalent entrance examinations' -- Government achievement requirement
),

-- Punjab National Bank PNB SARASWATI
(
    'Punjab National Bank PNB SARASWATI',
    'PNB SARASWATI Education Loan',
    'Standard education loan scheme for students pursuing higher education in India and abroad.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities.',
    'Customer Service: 1800 180 2222 (Toll-Free)
Email: saraswati.eduloans@pnb.co.in',
    'Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs for studies in India, 15% for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.10,
    9.60,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.pnbindia.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions' -- Government achievement requirement
),

-- Punjab National Bank CONCESSIONAL EDUCATION LOAN TO PWDs
(
    'Punjab National Bank CONCESSIONAL EDUCATION LOAN TO PWDs',
    'PNB Education Loan for PWDs',
    'Special concessional education loan scheme for Persons with Disabilities pursuing higher education.',
    'PWD students pursuing courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities.',
    'Customer Service: 1800 180 2222 (Toll-Free)
Email: pwd.eduloans@pnb.co.in',
    'Student must be a Person with Disability as certified by competent authority.
Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.50,
    9.00,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.pnbindia.in',
    50.00, -- Minimum 50% in 10th
    50.00, -- Minimum 50% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Disability certificate from competent authority' -- Government achievement requirement
),

-- Punjab National Bank PNB KAUSHAL
(
    'Punjab National Bank PNB KAUSHAL',
    'PNB KAUSHAL for Skill Development',
    'Education loan scheme for vocational/skill development courses in India.',
    'Job-oriented vocational/technical courses/skill development courses offered by recognized institutions.',
    'Customer Service: 1800 180 2222 (Toll-Free)
Email: kaushal.eduloans@pnb.co.in',
    'Student must have secured admission to recognized vocational training institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '7 YEARS',
    'Course Period + 6 months',
    'Course Period + 6 months',
    8.00,
    9.50,
    0,
    0,
    2000000.00, -- 20 Lakhs INR
    'INDIA',
    'For recognized vocational training institutions',
    'www.pnbindia.in',
    50.00, -- Minimum 50% in 10th
    50.00, -- Minimum 50% in 12th (if applicable)
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized vocational training institutions' -- Government achievement requirement
),

-- Punjab National Bank PNB UDAAN
(
    'Punjab National Bank PNB UDAAN',
    'PNB UDAAN for Studies Abroad',
    'Specialized education loan scheme for students pursuing higher education abroad.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities abroad.',
    'Customer Service: 1800 180 2222 (Toll-Free)
Email: udaan.eduloans@pnb.co.in',
    'Student must have secured admission to recognized institutions abroad.
Co-borrower (parent/guardian) is mandatory.
15% margin for all loans for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.50,
    10.00,
    0,
    0,
    9000000.00, -- 90 Lakhs INR
    'ABROAD',
    'For recognized institutions abroad',
    'www.pnbindia.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions abroad' -- Government achievement requirement
),

-- Punjab National Bank PNB HONHAAR
(
    'Punjab National Bank PNB HONHAAR',
    'PNB HONHAAR for Meritorious Students',
    'Education loan scheme for meritorious students with relaxed terms.',
    'Students who have secured a minimum of 80% marks in qualifying examination for the course.',
    'Customer Service: 1800 180 2222 (Toll-Free)
Email: honhaar.eduloans@pnb.co.in',
    'Student must have secured minimum 80% marks in qualifying examination.
Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.75,
    9.25,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.pnbindia.in',
    80.00, -- Minimum 80% in 10th
    80.00, -- Minimum 80% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Minimum 80% marks in qualifying examination' -- Government achievement requirement
),


-- Rajasthan Marudhara Gramin Bank RMGB EDUCATION LOAN
(
    'Rajasthan Marudhara Gramin Bank RMGB EDUCATION LOAN',
    'Education Loan by RMGB',
    'Comprehensive education loan scheme for students from Rajasthan pursuing higher education in India and abroad.',
    'All graduation/post-graduation degree and diploma courses offered by recognized institutions.',
    'Customer Service: 1800 123 3113 (Toll-Free)
Email: education.loan@rmgb.in',
    'Student must have secured admission to courses in recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs for studies in India, 15% for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.10,
    9.60,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.rmgb.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'RAJASTHAN', -- Available in Rajasthan state
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions' -- Government achievement requirement
),

-- Telangana Grameena Bank EDUCATION LOAN FOR STUDIES IN INDIA
(
    'Telangana Grameena Bank EDUCATION LOAN FOR STUDIES IN INDIA',
    'Education Loan for Studies in India by TGB',
    'Education loan scheme for students pursuing higher education in India.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities in India.',
    'Customer Service: 1800 420 9100 (Toll-Free)
Email: eduloans@tgbhyd.in',
    'Student must have secured admission to recognized institutions in India.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.25,
    9.75,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.tgbhyd.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'TELANGANA', -- Available in Telangana state
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions' -- Government achievement requirement
),

-- Telangana Grameena Bank EDUCATION LOAN FOR ABROAD STUDIES
(
    'Telangana Grameena Bank EDUCATION LOAN FOR ABROAD STUDIES',
    'Education Loan for Abroad Studies by TGB',
    'Education loan scheme for students pursuing higher education abroad.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities abroad.',
    'Customer Service: 1800 420 9100 (Toll-Free)
Email: abroadedu@tgbhyd.in',
    'Student must have secured admission to recognized institutions abroad.
Co-borrower (parent/guardian) is mandatory.
15% margin for all loans for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.50,
    10.00,
    0,
    0,
    8500000.00, -- 85 Lakhs INR
    'ABROAD',
    'For recognized institutions abroad',
    'www.tgbhyd.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'TELANGANA', -- Available in Telangana state
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions abroad' -- Government achievement requirement
),

-- Tamil Nadu Grama Bank Education Loan Studies in India upto 7.50 lakh
(
    'Tamil Nadu Grama Bank Education Loan Studies in India upto 7.50 lakh',
    'Education Loan by TNGB',
    'Education loan scheme for students pursuing higher education in India with a maximum limit of 7.50 lakhs.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities in India.',
    'Customer Service: 1800 425 1110 (Toll-Free)
Email: education@tngb.co.in',
    'Student must have secured admission to recognized institutions in India.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.20,
    9.70,
    0,
    0,
    750000.00, -- 7.50 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.tngb.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'TAMIL NADU', -- Available in Tamil Nadu state
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions' -- Government achievement requirement
),

-- TRIPURA GRAMIN BANK TGB Education Loan Scheme
(
    'TRIPURA GRAMIN BANK TGB Education Loan Scheme',
    'Education Loan by TGB',
    'Education loan scheme for students from Tripura pursuing higher education in India and abroad.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities.',
    'Customer Service: 1800 345 0140 (Toll-Free)
Email: education@tripuragraminbank.co.in',
    'Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs for studies in India, 15% for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.15,
    9.65,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.tripuragraminbank.co.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'TRIPURA', -- Available in Tripura state
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions' -- Government achievement requirement
),

-- Union Bank of India UNION EDUCATION LOAN FOR INLAND STUDIES
(
    'Union Bank of India UNION EDUCATION LOAN FOR INLAND STUDIES',
    'Union Education Loan for Studies in India',
    'Standard education loan scheme for students pursuing higher education in India.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities in India.',
    'Customer Service: 1800 22 2244 (Toll-Free)
Email: education.inland@unionbankofindia.com',
    'Student must have secured admission to recognized institutions in India.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.10,
    9.60,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.unionbankofindia.co.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions' -- Government achievement requirement
),

-- Union Bank of India UNION KISAN SHIKSHA SUBHIDHA FOR STUDENTS BELONGING TO AGRARIAN FAMILY
(
    'Union Bank of India UNION KISAN SHIKSHA SUBHIDHA FOR STUDENTS BELONGING TO AGRARIAN FAMILY',
    'Union Kisan Shiksha Subhidha',
    'Special education loan scheme for students from agricultural families.',
    'Students from agrarian families pursuing courses leading to graduate/postgraduate degree, diploma courses.',
    'Customer Service: 1800 22 2244 (Toll-Free)
Email: kisanshiksha@unionbankofindia.com',
    'Student must be from an agrarian family with parents engaged in agricultural activities.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.90,
    9.40,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.unionbankofindia.co.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'Engaged in agricultural activities', -- Parent1 must be engaged in agriculture
    'No specific requirement', -- No specific requirement for parent2
    'Parents should be engaged in agricultural activities' -- Government achievement requirement
),

-- Union Bank of India UNION EDUCATION STUDENTS WITH FEES REIMBURSEMENT FACILITY FROM RESPECTIVE GOVERNMENTS SC/ST CATEGORY
(
    'Union Bank of India UNION EDUCATION STUDENTS WITH FEES REIMBURSEMENT FACILITY FROM RESPECTIVE GOVERNMENTS SC/ST CATEGORY',
    'Union Education Loan for SC/ST with Fee Reimbursement',
    'Special education loan scheme for SC/ST students eligible for fee reimbursement from government.',
    'SC/ST students eligible for fee reimbursement pursuing courses in recognized institutions.',
    'Customer Service: 1800 22 2244 (Toll-Free)
Email: scst.education@unionbankofindia.com',
    'Student must belong to SC/ST category.
Student must be eligible for fee reimbursement from respective state government.
Co-borrower (parent/guardian) is mandatory.
No margin requirement.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.75,
    9.25,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.unionbankofindia.co.in',
    50.00, -- Minimum 50% in 10th
    50.00, -- Minimum 50% in 12th
    'ALL', -- Available in all states
    'SC,ST', -- Available for SC/ST castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Eligibility for fee reimbursement from government' -- Government achievement requirement
),

-- Union Bank of India UNION EDUCATION LOAN FOR FOREIGN STUDIES
(
    'Union Bank of India UNION EDUCATION LOAN FOR FOREIGN STUDIES',
    'Union Education Loan for Studies Abroad',
    'Education loan scheme for students pursuing higher education abroad.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities abroad.',
    'Customer Service: 1800 22 2244 (Toll-Free)
Email: foreign.education@unionbankofindia.com',
    'Student must have secured admission to recognized institutions abroad.
Co-borrower (parent/guardian) is mandatory.
15% margin for all loans for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.50,
    10.00,
    0,
    0,
    9000000.00, -- 90 Lakhs INR
    'ABROAD',
    'For recognized institutions abroad',
    'www.unionbankofindia.co.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions abroad' -- Government achievement requirement
),

-- Union Bank of India UNION EDUCATION PM VIDYALAXMI
(
    'Union Bank of India UNION EDUCATION PM VIDYALAXMI',
    'Union PM VIDYALAXMI Scheme',
    'Special education loan scheme under PM Vidyalaxmi for students pursuing higher education in quality institutions.',
    'All graduation/post-graduation degree and diploma courses offered by QHEIs listed under the scheme.',
    'Customer Service: 1800 22 2244 (Toll-Free)
Email: pmvl@unionbankofindia.com',
    'Student must have secured admission to courses in QHEIs recognized under the scheme.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.75,
    9.25,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For institutions listed under the PM Vidyalaxmi scheme',
    'www.unionbankofindia.co.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to QHEIs under the PMVL scheme' -- Government achievement requirement
),

-- Union Bank of India UNION EDUCATION SKILL DEVELOPMENT LOAN
(
    'Union Bank of India UNION EDUCATION SKILL DEVELOPMENT LOAN',
    'Union Skill Development Loan',
    'Education loan scheme for vocational/skill development courses in India.',
    'Job-oriented vocational/technical courses/skill development courses offered by recognized institutions.',
    'Customer Service: 1800 22 2244 (Toll-Free)
Email: skill.loan@unionbankofindia.com',
    'Student must have secured admission to recognized vocational training institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '7 YEARS',
    'Course Period + 6 months',
    'Course Period + 6 months',
    8.00,
    9.50,
    0,
    0,
    2000000.00, -- 20 Lakhs INR
    'INDIA',
    'For recognized vocational training institutions',
    'www.unionbankofindia.co.in',
    50.00, -- Minimum 50% in 10th
    50.00, -- Minimum 50% in 12th (if applicable)
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized vocational training institutions' -- Government achievement requirement
),

-- Union Bank of India UNION EDUCATION NON-PM VIDYALAXMI
(
    'Union Bank of India UNION EDUCATION NON-PM VIDYALAXMI',
    'Union Education Loan for Non-PMVL Institutions',
    'Education loan scheme for students pursuing higher education in institutions not covered under PM Vidyalaxmi scheme.',
    'Courses leading to graduate/postgraduate degree, diploma courses conducted by recognized colleges/universities not listed under PMVL.',
    'Customer Service: 1800 22 2244 (Toll-Free)
Email: nonpmvl@unionbankofindia.com',
    'Student must have secured admission to recognized institutions not covered under PMVL.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.25,
    9.75,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions not listed under the PM Vidyalaxmi scheme',
    'www.unionbankofindia.co.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institutions' -- Government achievement requirement
),

-- Union Bank of India UNION EDUCATION WEST BENGAL STUDENT LOAN
(
    'Union Bank of India UNION EDUCATION WEST BENGAL STUDENT LOAN',
    'Union Education Loan for West Bengal Students',
    'Special education loan scheme for students from West Bengal.',
    'Students from West Bengal pursuing courses leading to graduate/postgraduate degree, diploma courses.',
    'Customer Service: 1800 22 2244 (Toll-Free)
Email: wb.education@unionbankofindia.com',
    'Student must be a resident of West Bengal.
Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.10,
    9.60,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.unionbankofindia.co.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'WEST BENGAL', -- Available in West Bengal state
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'West Bengal domicile certificate' -- Government achievement requirement
),

-- Union Bank of India UNION EDUCATION NRI STUDENTS STUDY IN INDIA
(
    'Union Bank of India UNION EDUCATION NRI STUDENTS STUDY IN INDIA',
    'Union Education Loan for NRI Students',
    'Education loan scheme for NRI students pursuing higher education in India.',
    'NRI students pursuing courses leading to graduate/postgraduate degree, diploma courses in recognized institutions in India.',
    'Customer Service: 1800 22 2244 (Toll-Free)
Email: nri.education@unionbankofindia.com',
    'Student must be an NRI or dependent of NRI.
Student must have secured admission to recognized institutions in India.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.00,
    9.50,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.unionbankofindia.co.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'NRI status or equivalent', -- Parent1 must have NRI status
    'No specific requirement', -- No specific requirement for parent2
    'NRI documentation' -- Government achievement requirement
),

-- Union Bank of India UNION EDUCATION LOAN SPECIAL SCHEME FOR ISB STUDENT FOR PGPM/PG-PRO/PG-MAX
(
    'Union Bank of India UNION EDUCATION LOAN SPECIAL SCHEME FOR ISB STUDENT FOR PGPM/PG-PRO/PG-MAX',
    'Union Education Loan for ISB Students',
    'Special education loan scheme for students pursuing PGPM/PG-PRO/PG-MAX at Indian School of Business (ISB).',
    'Students admitted to PGPM/PG-PRO/PG-MAX programs at ISB Hyderabad/Mohali.',
    'Customer Service: 1800 22 2244 (Toll-Free)
Email: isb.education@unionbankofindia.com',
    'Student must have secured admission to PGPM/PG-PRO/PG-MAX programs at ISB.
Co-borrower (parent/guardian) is mandatory.
5% margin for loans.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.50,
    9.00,
    0,
    0,
    10000000.00, -- 1 Crore INR
    'INDIA',
    'For Indian School of Business (ISB) Hyderabad/Mohali only',
    'www.unionbankofindia.co.in',
    70.00, -- Minimum 70% in 10th
    70.00, -- Minimum 70% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to ISB for PGPM/PG-PRO/PG-MAX' -- Government achievement requirement
),

-- Union Bank of India UNION EDUCATION SPECIAL UNION EDUCATION LOAN SCHEME FOR ABROAD STUDY
(
    'Union Bank of India UNION EDUCATION SPECIAL UNION EDUCATION LOAN SCHEME FOR ABROAD STUDY',
    'Union Special Education Loan for Abroad Studies',
    'Premium education loan scheme for students pursuing higher education in top-ranked universities abroad.',
    'Students admitted to top 100 globally ranked universities for graduate/postgraduate programs.',
    'Customer Service: 1800 22 2244 (Toll-Free)
Email: premium.foreign@unionbankofindia.com',
    'Student must have secured admission to top 100 globally ranked universities.
Co-borrower (parent/guardian) is mandatory.
10% margin for loans.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.25,
    9.75,
    0,
    0,
    12500000.00, -- 1.25 Crore INR
    'ABROAD',
    'For top 100 globally ranked universities only',
    'www.unionbankofindia.co.in',
    70.00, -- Minimum 70% in 10th
    70.00, -- Minimum 70% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to top 100 globally ranked universities' -- Government achievement requirement
),

-- UCO Bank UCO UDAAN LOAN SCHEME
(
    'UCO UDAAN LOAN SCHEME',
    'Education loan for students pursuing higher education in India and abroad',
    'UCO UDAAN is designed to support students pursuing higher education in recognized institutions in India and abroad. The scheme offers competitive interest rates and flexible repayment options.',
    'Students admitted to recognized institutions for undergraduate, postgraduate, professional and other courses.',
    'Customer Service: 1800 103 0123 (Toll-Free)
Email: education.loan@ucobank.co.in',
    'Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs. 
5% margin for loans in India above Rs. 4 lakhs.
15% margin for studies abroad above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.20,
    9.50,
    0.5,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized educational institutions in India and abroad',
    'www.ucobank.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institution' -- Government achievement requirement
),

-- UCO Bank UCO ASPIRE 2.0 LOAN SCHEME
(
    'UCO ASPIRE 2.0 LOAN SCHEME',
    'Premier education loan for students pursuing education in top-tier institutions',
    'UCO ASPIRE 2.0 is a specialized education loan scheme for students who have secured admission to premier institutions like IITs, IIMs, NITs, AIIMS, and other top-ranked institutions in India and abroad. The scheme offers preferential interest rates and higher loan limits.',
    'Students admitted to premier institutions like IITs, IIMs, NITs, AIIMS, and other top 100 institutions as per NIRF ranking or equivalent international rankings.',
    'Customer Service: 1800 103 0123 (Toll-Free)
Email: aspire.loan@ucobank.co.in',
    'Student must have secured admission to specified premier institutions.
Co-borrower (parent/guardian) is mandatory.
5% margin for loans up to Rs. 30 lakhs.
10% margin for loans above Rs. 30 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.70,
    8.90,
    0,
    0,
    10000000.00, -- 1 Crore INR
    'INDIA',
    'For premier institutions only (IITs, IIMs, NITs, AIIMS, etc.)',
    'www.ucobank.com',
    70.00, -- Minimum 70% in 10th
    70.00, -- Minimum 70% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Selection through JEE/CAT/GATE/NEET or equivalent entrance examinations' -- Government achievement requirement
),

-- UCO Bank UCO UTKARSH LOAN SCHEME
(
    'UCO UTKARSH LOAN SCHEME',
    'Loan scheme for vocational education and skill development',
    'UCO UTKARSH is designed to support students pursuing vocational education, skill development programs, and courses recognized by NSDC, Sector Skill Councils, State Skill Development Missions, or other government agencies.',
    'Students pursuing vocational courses, diploma programs, certification courses in recognized skill development institutions.',
    'Customer Service: 1800 103 0123 (Toll-Free)
Email: utkarsh.loan@ucobank.co.in',
    'Student must have secured admission to recognized vocational/skill development institution.
Co-borrower (parent/guardian) is mandatory for loans above Rs. 50,000.
No margin for loans up to Rs. 1 lakh.
5% margin for loans above Rs. 1 lakh.',
    '7 YEARS',
    'Course Period + 6 months',
    'Course Period + 6 months',
    8.50,
    9.75,
    0.25,
    0,
    1500000.00, -- 15 Lakhs INR
    'INDIA',
    'For vocational training institutes and skill development centers',
    'www.ucobank.com',
    50.00, -- Minimum 50% in 10th
    50.00, -- Minimum 50% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized vocational/skill development institution' -- Government achievement requirement
),

-- UCO Bank UCO SKILL LOAN SCHEME
(
    'UCO SKILL LOAN SCHEME',
    'Specialized loan for short-term skill development courses',
    'UCO SKILL LOAN SCHEME is tailored for students pursuing short-term skill development courses (3 months to 2 years) recognized by NSDC/Sector Skill Councils/State Skill Development Missions/other government agencies.',
    'Students pursuing short-term skill development courses of duration 3 months to 2 years recognized by government agencies.',
    'Customer Service: 1800 103 0123 (Toll-Free)
Email: skill.loan@ucobank.co.in',
    'Course must be recognized by NSDC/Sector Skill Councils/State Skill Development Missions/other government agencies.
No margin requirement.
No collateral for loans up to Rs. 1 lakh.
Third-party guarantee required for loans above Rs. 1 lakh.',
    '5 YEARS',
    'Course Period + 3 months',
    'Course Period + 3 months',
    9.00,
    10.25,
    0,
    0,
    150000.00, -- 1.5 Lakhs INR
    'INDIA',
    'For short-term skill development courses only',
    'www.ucobank.com',
    45.00, -- Minimum 45% in 10th
    45.00, -- Minimum 45% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Enrollment in recognized skill development course' -- Government achievement requirement
),

-- SBI Student Loan Scheme
(
    'SBI Student Loan Scheme',
    'Comprehensive education loan for studies in India and abroad',
    'SBI Student Loan Scheme provides financial assistance to Indian nationals for pursuing higher education in India and abroad. The scheme covers various expenses including tuition fees, hostel fees, examination fees, library fees, and other expenses related to course completion.',
    'Students seeking admission to recognized institutions for higher studies in India or abroad.',
    'Customer Service: 1800 11 2211 (Toll-Free)
Email: studentloan@sbi.co.in',
    'Student must have secured admission to a recognized institution.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs for studies in India.
15% margin for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.15,
    9.60,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.sbi.co.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institution' -- Government achievement requirement
),

-- SBI Global Ed-Vantage
(
    'SBI Global Ed-Vantage',
    'Premium education loan for studies abroad',
    'SBI Global Ed-Vantage is a specialized loan scheme for students pursuing higher education in premier foreign institutions. The scheme offers higher loan amounts, competitive interest rates, and extended repayment periods to support international education aspirations.',
    'Students admitted to select foreign universities/institutions for graduate, post-graduate, or doctoral studies.',
    'Customer Service: 1800 11 2211 (Toll-Free)
Email: globaledvantage@sbi.co.in',
    'Student must have secured admission to specified foreign institutions.
Co-borrower (parent/guardian) is mandatory.
15% margin requirement.
Collateral security required for full loan amount.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.50,
    9.80,
    0.5,
    0,
    15000000.00, -- 1.5 Crore INR
    'INDIA',
    'For select foreign universities/institutions',
    'www.sbi.co.in',
    65.00, -- Minimum 65% in 10th
    65.00, -- Minimum 65% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized foreign institution' -- Government achievement requirement
),

-- SBI Scholar Loan Scheme
(
    'SBI Scholar Loan Scheme',
    'Specialized loan for students admitted to premier institutions',
    'SBI Scholar Loan Scheme is designed for students who have secured admission to premier institutions like IITs, IIMs, NITs, AIIMS, and other top-ranked institutions. The scheme offers preferential interest rates and higher loan limits.',
    'Students admitted to premier institutions like IITs, IIMs, NITs, AIIMS, and other specified premier institutions.',
    'Customer Service: 1800 11 2211 (Toll-Free)
Email: scholarloan@sbi.co.in',
    'Student must have secured admission to specified premier institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.85,
    9.25,
    0,
    0,
    10000000.00, -- 1 Crore INR
    'INDIA',
    'For premier institutions only (IITs, IIMs, NITs, etc.)',
    'www.sbi.co.in',
    70.00, -- Minimum 70% in 10th
    70.00, -- Minimum 70% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Selection through JEE/CAT/GATE/NEET or equivalent entrance examinations' -- Government achievement requirement
),

-- HDFC Bank Education Loan for Indian Education
(
    'HDFC Bank Education Loan for Indian Education',
    'Loan for higher education in recognized Indian institutions',
    'HDFC Bank Education Loan for Indian Education provides financial support to students pursuing higher education in recognized institutions across India. The loan covers tuition fees, hostel fees, and other educational expenses.',
    'Students pursuing undergraduate, postgraduate, or professional courses in recognized Indian institutions.',
    'Customer Service: 1800 202 6161 (Toll-Free)
Email: educationloan@hdfcbank.com',
    'Student must have secured admission to recognized Indian institutions.
Co-applicant (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.25,
    9.75,
    1.0,
    0,
    6000000.00, -- 60 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.hdfcbank.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institution' -- Government achievement requirement
),

-- Axis Bank Education Loan
(
    'Axis Bank Education Loan',
    'Comprehensive education loan for studies in India and abroad',
    'Axis Bank Education Loan provides financial assistance to students pursuing higher education in India and abroad. The loan covers tuition fees, hostel fees, examination fees, and other educational expenses.',
    'Students admitted to recognized institutions for undergraduate, postgraduate, or professional courses.',
    'Customer Service: 1800 209 5577 (Toll-Free)
Email: educationloan@axisbank.com',
    'Student must have secured admission to recognized institutions.
Co-applicant (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans in India above Rs. 4 lakhs.
15% margin for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.40,
    10.00,
    1.0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.axisbank.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institution' -- Government achievement requirement
),

-- IDFC FIRST Bank Education Loan
(
    'IDFC FIRST Bank Education Loan',
    'Education loan with competitive interest rates',
    'IDFC FIRST Bank Education Loan offers competitive interest rates and flexible repayment options for students pursuing higher education in India and abroad. The loan covers tuition fees, living expenses, and other educational costs.',
    'Students pursuing higher education in recognized institutions in India and abroad.',
    'Customer Service: 1800 266 9970 (Toll-Free)
Email: education.loan@idfcfirstbank.com',
    'Student must have secured admission to recognized institutions.
Co-applicant (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs for studies in India.
15% margin for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.30,
    9.90,
    1.0,
    0,
    7000000.00, -- 70 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.idfcfirstbank.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institution' -- Government achievement requirement
),

-- Bank of Maharashtra Education Loan
(
    'Bank of Maharashtra Education Loan',
    'Education loan for studies in India and abroad',
    'Bank of Maharashtra Education Loan provides financial support to students pursuing higher education in recognized institutions in India and abroad. The loan covers tuition fees, hostel fees, and other educational expenses.',
    'Students admitted to recognized institutions for higher studies in India or abroad.',
    'Customer Service: 1800 233 4526 (Toll-Free)
Email: edu.loan@mahabank.co.in',
    'Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs for studies in India.
15% margin for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.20,
    9.65,
    0.5,
    0,
    6000000.00, -- 60 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.bankofmaharashtra.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institution' -- Government achievement requirement
),

-- NSFDC Educational Loan Scheme
(
    'NSFDC Educational Loan Scheme',
    'Loan for Scheduled Caste students for professional and technical courses',
    'National Scheduled Castes Finance and Development Corporation (NSFDC) provides educational loans to students from Scheduled Castes for pursuing full-time professional or technical courses at concessional interest rates.',
    'Students belonging to Scheduled Castes with family income below the specified limit, pursuing professional or technical courses.',
    'Customer Service: 011-26174241
Email: nsfdc@nic.in',
    'Applicant must belong to Scheduled Caste category.
Family income should not exceed Rs. 3 lakhs per annum.
Student must have secured admission to recognized institution for professional/technical course.
No margin requirement.',
    '10 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    4.00,
    6.00,
    0,
    0,
    1500000.00, -- 15 Lakhs INR
    'INDIA',
    'For professional and technical courses',
    'www.nsfdc.nic.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'ALL', -- Available in all states
    'SC', -- Available for Scheduled Castes only
    'ALL', -- Available for all genders
    'Income below Rs. 3 lakhs per annum', -- Parent1 income requirement
    'Income below Rs. 3 lakhs per annum', -- Parent2 income requirement
    'Admission to recognized institution for professional/technical course' -- Government achievement requirement
),

-- Reserve Bank of India Model Education Loan Scheme
(
    'Reserve Bank of India Model Education Loan Scheme',
    'Model scheme for education loans by Indian banks',
    'The Model Education Loan Scheme by RBI provides guidelines for banks to offer education loans to students pursuing higher education in India and abroad. It sets standard norms for eligibility, loan amount, security, interest rates, and repayment terms.',
    'Students pursuing higher education in recognized institutions in India and abroad.',
    'Contact your bank for specific details.
Email: educationloan@rbi.org.in',
    'Student must have secured admission to recognized institutions.
Co-borrower (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs for studies in India.
15% margin for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.00,
    10.00,
    0,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.rbi.org.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institution' -- Government achievement requirement
),

-- Punjab National Bank PNB Pravasi Shiksha Loan
(
    'PNB Pravasi Shiksha Loan',
    'Loan for studies abroad with NRI guarantee',
    'PNB Pravasi Shiksha Loan is designed for students pursuing higher education abroad with the guarantee of a Non-Resident Indian. The scheme offers higher loan amounts and extended repayment periods.',
    'Students pursuing higher education abroad with NRI guarantee.',
    'Customer Service: 1800 180 2222 (Toll-Free)
Email: pravasishiksha@pnb.co.in',
    'Student must have secured admission to recognized foreign institution.
Co-borrower/guarantor must be an NRI.
15% margin requirement.
Collateral security required.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.60,
    10.10,
    0.5,
    0,
    12000000.00, -- 1.2 Crore INR
    'INDIA',
    'For studies abroad with NRI guarantee',
    'www.pnbindia.in',
    65.00, -- Minimum 65% in 10th
    65.00, -- Minimum 65% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'NRI status required for guarantor', -- Parent2/Guarantor requirement
    'Admission to recognized foreign institution' -- Government achievement requirement
),

-- Bank of Baroda Baroda Education Loan for EDPs Abroad
(
    'Baroda Education Loan for EDPs Abroad',
    'Loan for executive development programs abroad',
    'Bank of Baroda offers this specialized loan for professionals pursuing Executive Development Programs (EDPs) in reputed institutions abroad. The loan covers tuition fees, accommodation, and other related expenses.',
    'Working professionals with at least 2 years of experience, pursuing EDPs in reputed institutions abroad.',
    'Customer Service: 1800 258 4455 (Toll-Free)
Email: edp.loan@bankofbaroda.com',
    'Applicant must have minimum 2 years of work experience.
Admission to reputed institution abroad for EDP.
15% margin requirement.
Collateral security required.',
    '7 YEARS',
    'Course Period + 3 months',
    'Course Period + 3 months',
    9.00,
    10.50,
    1.0,
    0,
    4000000.00, -- 40 Lakhs INR
    'INDIA',
    'For Executive Development Programs abroad',
    'www.bankofbaroda.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Minimum 2 years of work experience and admission to reputed institution for EDP' -- Achievement requirement
),

-- Federal Bank Education Loan
(
    'Federal Bank Education Loan',
    'Comprehensive loan for higher education in India and abroad',
    'Federal Bank Education Loan offers financial support to students pursuing higher education in India and abroad, covering tuition fees, books, and living expenses. The scheme provides competitive interest rates and flexible repayment options.',
    'Students admitted to recognized institutions for higher studies in India or abroad.',
    'Customer Service: 1800 420 1199 (Toll-Free)
Email: education@federalbank.co.in',
    'Student must have secured admission to recognized institutions.
Co-applicant (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs for studies in India.
15% margin for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.45,
    9.95,
    0.5,
    0,
    7500000.00, -- 75 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.federalbank.co.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institution' -- Government achievement requirement
),

-- Kotak Mahindra Bank Education Loan
(
    'Kotak Mahindra Bank Education Loan',
    'Education loan with quick approval process',
    'Kotak Mahindra Bank Education Loan provides financial assistance to students pursuing higher education in India and abroad. The loan features a quick approval process, competitive interest rates, and flexible repayment options.',
    'Students pursuing higher education in recognized institutions in India and abroad.',
    'Customer Service: 1860 266 2666
Email: education.loan@kotak.com',
    'Student must have secured admission to recognized institutions.
Co-applicant (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs for studies in India.
15% margin for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.50,
    10.25,
    1.0,
    0,
    7000000.00, -- 70 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.kotak.com',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institution' -- Government achievement requirement
),

-- Yes Bank Education Loan
(
    'Yes Bank Education Loan',
    'Education loan with digital application process',
    'Yes Bank Education Loan offers a streamlined digital application process for students pursuing higher education in India and abroad. The loan provides competitive interest rates and flexible repayment options.',
    'Students admitted to recognized institutions for higher studies in India or abroad.',
    'Customer Service: 1800 103 6000 (Toll-Free)
Email: educationloans@yesbank.in',
    'Student must have secured admission to recognized institutions.
Co-applicant (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs for studies in India.
15% margin for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.55,
    10.30,
    1.0,
    0,
    6500000.00, -- 65 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.yesbank.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institution' -- Government achievement requirement
),

-- Tamilnad Mercantile Bank TMB Education Loan
(
    'TMB Education Loan',
    'Education loan for studies in India and abroad',
    'Tamilnad Mercantile Bank (TMB) Education Loan provides financial support to students pursuing higher education in recognized institutions in India and abroad. The loan covers tuition fees, hostel fees, and other educational expenses.',
    'Students admitted to recognized institutions for higher studies in India or abroad.',
    'Customer Service: 1800 425 0426 (Toll-Free)
Email: educationloan@tmbank.in',
    'Student must have secured admission to recognized institutions.
Co-applicant (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs for studies in India.
15% margin for studies abroad.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    8.25,
    9.75,
    0.5,
    0,
    6000000.00, -- 60 Lakhs INR
    'INDIA',
    'For recognized institutions in India and abroad',
    'www.tmb.in',
    60.00, -- Minimum 60% in 10th
    60.00, -- Minimum 60% in 12th
    'ALL', -- Available in all states
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'No specific requirement', -- No specific requirement for parent1
    'No specific requirement', -- No specific requirement for parent2
    'Admission to recognized institution' -- Government achievement requirement
),

-- Assam Gramin Vikash Bank Education Loan
(
    'Assam Gramin Vikash Bank Education Loan',
    'Education loan for rural students in Assam',
    'Assam Gramin Vikash Bank offers education loans to students from rural areas of Assam pursuing higher education in recognized institutions. The loan features concessional interest rates and flexible repayment options.',
    'Students from rural areas of Assam pursuing higher education in recognized institutions.',
    'Customer Service: 1800 180 1234
Email: education@agvbank.co.in',
    'Student must be from rural areas of Assam.
Student must have secured admission to recognized institutions.
Co-applicant (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.95,
    9.50,
    0,
    0,
    5000000.00, -- 50 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.agvbank.co.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'ASSAM', -- Available in Assam only
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'Rural residence in Assam', -- Parent1 residence requirement
    'Rural residence in Assam', -- Parent2 residence requirement
    'Admission to recognized institution' -- Government achievement requirement
),

-- Kerala Gramin Bank Education Loan
(
    'Kerala Gramin Bank Education Loan',
    'Education loan for rural students in Kerala',
    'Kerala Gramin Bank offers education loans to students from rural areas of Kerala pursuing higher education in recognized institutions. The loan features concessional interest rates and flexible repayment options.',
    'Students from rural areas of Kerala pursuing higher education in recognized institutions.',
    'Customer Service: 1800 425 1199
Email: education@keralagraminbank.in',
    'Student must be from rural areas of Kerala.
Student must have secured admission to recognized institutions.
Co-applicant (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.90,
    9.45,
    0,
    0,
    5000000.00, -- 50 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.keralagraminbank.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'KERALA', -- Available in Kerala only
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'Rural residence in Kerala', -- Parent1 residence requirement
    'Rural residence in Kerala', -- Parent2 residence requirement
    'Admission to recognized institution' -- Government achievement requirement
),

-- Jammu & Kashmir Grameen Bank Education Loan
(
    'Jammu & Kashmir Grameen Bank Education Loan',
    'Education loan for rural students in Jammu & Kashmir',
    'Jammu & Kashmir Grameen Bank offers education loans to students from rural areas of J&K pursuing higher education in recognized institutions. The loan features concessional interest rates and flexible repayment options.',
    'Students from rural areas of Jammu & Kashmir pursuing higher education in recognized institutions.',
    'Customer Service: 1800 180 2345
Email: education@jkgb.in',
    'Student must be from rural areas of Jammu & Kashmir.
Student must have secured admission to recognized institutions.
Co-applicant (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.85,
    9.40,
    0,
    0,
    5000000.00, -- 50 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.jkgb.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'JAMMU & KASHMIR', -- Available in J&K only
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'Rural residence in J&K', -- Parent1 residence requirement
    'Rural residence in J&K', -- Parent2 residence requirement
    'Admission to recognized institution' -- Government achievement requirement
),

-- Madhya Pradesh Gramin Bank Education Loan
(
    'Madhya Pradesh Gramin Bank Education Loan',
    'Education loan for rural students in Madhya Pradesh',
    'Madhya Pradesh Gramin Bank offers education loans to students from rural areas of MP pursuing higher education in recognized institutions. The loan features concessional interest rates and flexible repayment options.',
    'Students from rural areas of Madhya Pradesh pursuing higher education in recognized institutions.',
    'Customer Service: 1800 180 5678
Email: education@mpgb.in',
    'Student must be from rural areas of Madhya Pradesh.
Student must have secured admission to recognized institutions.
Co-applicant (parent/guardian) is mandatory.
No margin for loans up to Rs. 4 lakhs.
5% margin for loans above Rs. 4 lakhs.',
    '15 YEARS',
    'Course Period + 1 year',
    'Course Period + 1 year',
    7.95,
    9.50,
    0,
    0,
    5000000.00, -- 50 Lakhs INR
    'INDIA',
    'For recognized institutions in India',
    'www.mpgb.in',
    55.00, -- Minimum 55% in 10th
    55.00, -- Minimum 55% in 12th
    'MADHYA PRADESH', -- Available in MP only
    'ALL', -- Available for all castes
    'ALL', -- Available for all genders
    'Rural residence in MP', -- Parent1 residence requirement
    'Rural residence in MP', -- Parent2 residence requirement
    'Admission to recognized institution' -- Government achievement requirement
);
