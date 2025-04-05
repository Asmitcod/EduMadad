import React, { useState, useEffect } from 'react';
import { ArrowLeft, ClipboardCheck, Sliders, MapPin, GraduationCap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoanEligibility = () => {
  const [loading, setLoading] = useState(false);
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [formData, setFormData] = useState({
    interest_rate_max: '',
    repayment_period: '',
    maximum_amount_min: '',
    marks_10th: '',
    marks_12th: '',
    eligible_states: '',
    eligible_castes: '',
    eligible_genders: '',
    parent1_profession: '',
    parent2_profession: '',
    govt_achievements: ''
  });

  // Helper function to format URLs with proper protocol
  const formatUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://${url}`; // Default to https if no protocol is specified
  };

  // Fetch all schemes on component mount
  useEffect(() => {
    const fetchAllSchemes = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/schemes');
        const data = await response.json();
        setSchemes(data);
        setFilteredSchemes(data);
      } catch (error) {
        console.error('Error fetching schemes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllSchemes();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      // Build query parameters
      const params = new URLSearchParams();
      
      for (const [key, value] of Object.entries(formData)) {
        if (value) {
          params.append(key, value);
        }
      }
      
      // Make API call
      const response = await fetch(`http://localhost:8000/search?${params}`);
      const data = await response.json();
      
      setFilteredSchemes(data);
    } catch (error) {
      console.error('Error searching schemes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      interest_rate_max: '',
      repayment_period: '',
      maximum_amount_min: '',
      marks_10th: '',
      marks_12th: '',
      eligible_states: '',
      eligible_castes: '',
      eligible_genders: '',
      parent1_profession: '',
      parent2_profession: '',
      govt_achievements: ''
    });
    setFilteredSchemes(schemes);
  };

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-center bg-gradient-to-r from-eduBlue-600 to-eduTeal-600 bg-clip-text text-transparent">
          Loan Eligibility Checker
        </h1>

        <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          Enter your academic and demographic details to find government-backed student loan schemes you're eligible for.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <ClipboardCheck className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Eligibility Criteria</h3>
            </div>
            <p className="text-muted-foreground">
              Filter loan options based on your marks, caste, gender, and other eligibility factors.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <Sliders className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Customizable Filters</h3>
            </div>
            <p className="text-muted-foreground">
              Adjust filters such as interest rate, repayment duration, and parental income.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <MapPin className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">State-Based Schemes</h3>
            </div>
            <p className="text-muted-foreground">
              Discover schemes specific to your state of residence or institution.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Student-Centric</h3>
            </div>
            <p className="text-muted-foreground">
              Built for students to reduce time and confusion while exploring financial aid options.
            </p>
          </div>
        </div>

        <div className="bg-card shadow-lg p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Find Your Eligible Loan Schemes</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Academic Information */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-medium mb-4">Academic Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="marks_10th" className="block text-sm font-medium mb-2">10th Marks (%)</label>
                  <input
                    type="number"
                    id="marks_10th"
                    name="marks_10th"
                    value={formData.marks_10th}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-input bg-background"
                    placeholder="e.g. 85"
                    min="0"
                    max="100"
                  />
                </div>
                <div>
                  <label htmlFor="marks_12th" className="block text-sm font-medium mb-2">12th Marks (%)</label>
                  <input
                    type="number"
                    id="marks_12th"
                    name="marks_12th"
                    value={formData.marks_12th}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-input bg-background"
                    placeholder="e.g. 80"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </div>

            {/* Demographic Information */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-medium mb-4">Demographic Information</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="eligible_states" className="block text-sm font-medium mb-2">State of Residence</label>
                  <input
                    type="text"
                    id="eligible_states"
                    name="eligible_states"
                    value={formData.eligible_states}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-input bg-background"
                    placeholder="e.g. Maharashtra"
                  />
                </div>
                <div>
                  <label htmlFor="eligible_castes" className="block text-sm font-medium mb-2">Caste Category</label>
                  <input
                    type="text"
                    id="eligible_castes"
                    name="eligible_castes"
                    value={formData.eligible_castes}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-input bg-background"
                    placeholder="e.g. OBC, SC, ST, General"
                  />
                </div>
                <div>
                  <label htmlFor="eligible_genders" className="block text-sm font-medium mb-2">Gender</label>
                  <select
                    id="eligible_genders"
                    name="eligible_genders"
                    value={formData.eligible_genders}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-input bg-background"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent Information */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-medium mb-4">Parent Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parent1_profession" className="block text-sm font-medium mb-2">Parent 1 Profession</label>
                  <input
                    type="text"
                    id="parent1_profession"
                    name="parent1_profession"
                    value={formData.parent1_profession}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-input bg-background"
                    placeholder="e.g. Government Employee"
                  />
                </div>
                <div>
                  <label htmlFor="parent2_profession" className="block text-sm font-medium mb-2">Parent 2 Profession</label>
                  <input
                    type="text"
                    id="parent2_profession"
                    name="parent2_profession"
                    value={formData.parent2_profession}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-input bg-background"
                    placeholder="e.g. Teacher"
                  />
                </div>
              </div>
            </div>

            {/* Loan Preferences */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-medium mb-4">Loan Preferences</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="interest_rate_max" className="block text-sm font-medium mb-2">Maximum Interest Rate (%)</label>
                  <input
                    type="number"
                    id="interest_rate_max"
                    name="interest_rate_max"
                    value={formData.interest_rate_max}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-input bg-background"
                    placeholder="e.g. 7.5"
                    step="0.1"
                    min="0"
                  />
                </div>
                <div>
                  <label htmlFor="repayment_period" className="block text-sm font-medium mb-2">Repayment Period (years)</label>
                  <input
                    type="text"
                    id="repayment_period"
                    name="repayment_period"
                    value={formData.repayment_period}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-input bg-background"
                    placeholder="e.g. 10"
                  />
                </div>
                <div>
                  <label htmlFor="maximum_amount_min" className="block text-sm font-medium mb-2">Minimum Loan Amount Required</label>
                  <input
                    type="number"
                    id="maximum_amount_min"
                    name="maximum_amount_min"
                    value={formData.maximum_amount_min}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-input bg-background"
                    placeholder="e.g. 500000"
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Additional Criteria */}
            <div>
              <h3 className="text-lg font-medium mb-4">Additional Criteria</h3>
              <div>
                <label htmlFor="govt_achievements" className="block text-sm font-medium mb-2">Government Achievements/Qualifications</label>
                <select
                  id="govt_achievements"
                  name="govt_achievements"
                  value={formData.govt_achievements}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-input bg-background"
                >
                  <option value="">Select Achievement/Qualification</option>
                  <option value="No specific achievement required">No specific achievement required</option>
                  <option value="Admission to QHEIs under the PMVL scheme">Admission to QHEIs under the PMVL scheme</option>
                  <option value="Selection through JEE/CAT/GATE/NEET or equivalent entrance examinations">Selection through JEE/CAT/GATE/NEET or equivalent entrance examinations</option>
                  <option value="IELTS/TOEFL/GRE/GMAT as per university requirements">IELTS/TOEFL/GRE/GMAT as per university requirements</option>
                  <option value="Selection through entrance examinations for premier institutions">Selection through entrance examinations for premier institutions</option>
                  <option value="Merit-based (minimum 80% marks in qualifying examination)">Merit-based (minimum 80% marks in qualifying examination)</option>
                  <option value="Admission to recognized institutions">Admission to recognized institutions</option>
                  <option value="Admission to recognized institutions abroad">Admission to recognized institutions abroad</option>
                  <option value="Disability certificate from competent authority">Disability certificate from competent authority</option>
                  <option value="Admission to recognized vocational training institutions">Admission to recognized vocational training institutions</option>
                  <option value="Minimum 80% marks in qualifying examination">Minimum 80% marks in qualifying examination</option>
                  <option value="Parents should be engaged in agricultural activities">Parents should be engaged in agricultural activities</option>
                  <option value="Eligibility for fee reimbursement from government">Eligibility for fee reimbursement from government</option>
                  <option value="West Bengal domicile certificate">West Bengal domicile certificate</option>
                  <option value="NRI documentation">NRI documentation</option>
                  <option value="Admission to ISB for PGPM/PG-PRO/PG-MAX">Admission to ISB for PGPM/PG-PRO/PG-MAX</option>
                  <option value="Admission to top 100 globally ranked universities">Admission to top 100 globally ranked universities</option>
                  <option value="Enrollment in recognized skill development course">Enrollment in recognized skill development course</option>
                  <option value="Admission to recognized foreign institution">Admission to recognized foreign institution</option>
                  <option value="Admission to recognized institution for professional/technical course">Admission to recognized institution for professional/technical course</option>
                  <option value="Minimum 2 years of work experience and admission to reputed institution for EDP">Minimum 2 years of work experience and admission to reputed institution for EDP</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 py-3 px-6 rounded-lg transition-colors"
                disabled={loading}
              >
                {loading ? 'Searching...' : (
                  <>
                    <Search size={16} />
                    Find Eligible Schemes
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="btn-secondary flex items-center justify-center gap-2 py-3 px-6 rounded-lg transition-colors"
                disabled={loading}
              >
                Reset Filters
              </button>
            </div>
          </form>
        </div>

        {/* Results Section */}
        <div className="bg-card shadow-lg p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">Eligible Loan Schemes</h2>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-muted-foreground">Searching for eligible schemes...</p>
            </div>
          ) : (
            <>
              {filteredSchemes.length > 0 ? (
                <div className="space-y-6">
                  {filteredSchemes.map((scheme) => (
                    <div key={scheme.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">{scheme.scheme_name}</h3>
                      <p className="text-muted-foreground mb-4">{scheme.short_description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex flex-col">
                          <span className="text-sm text-muted-foreground">Interest Rate</span>
                          <span className="font-medium">
                            {scheme.interest_rate_min && scheme.interest_rate_max
                              ? `${scheme.interest_rate_min}% - ${scheme.interest_rate_max}%`
                              : scheme.interest_rate_max
                                ? `Up to ${scheme.interest_rate_max}%`
                                : 'Not specified'}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-muted-foreground">Repayment Period</span>
                          <span className="font-medium">{scheme.repayment_period || 'Not specified'}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-muted-foreground">Maximum Amount</span>
                          <span className="font-medium">
                            {scheme.maximum_amount
                              ? `₹${scheme.maximum_amount.toLocaleString()}`
                              : 'Not specified'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {scheme.eligible_states && (
                          <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                            {scheme.eligible_states === 'ALL' ? 'All States' : scheme.eligible_states}
                          </span>
                        )}
                        {scheme.eligible_castes && (
                          <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                            {scheme.eligible_castes === 'ALL' ? 'All Categories' : scheme.eligible_castes}
                          </span>
                        )}
                        {scheme.eligible_genders && (
                          <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                            {scheme.eligible_genders === 'ALL' ? 'All Genders' : scheme.eligible_genders}
                          </span>
                        )}
                      </div>
                      
                      {scheme.website_url && (
                        <a
                          href={formatUrl(scheme.website_url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-4 text-primary hover:text-primary/80 transition-colors"
                        >
                          Visit Website
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No matching schemes found. Try adjusting your filters.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanEligibility;