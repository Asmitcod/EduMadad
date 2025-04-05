document.getElementById("filterForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const params = new URLSearchParams();
  
    for (const [key, value] of formData.entries()) {
      if (value.trim() !== "") {
        params.append(key, value);
      }
    }
  
    try {
      const response = await fetch(`http://localhost:8000/search?${params.toString()}`);
      const data = await response.json();
      displayResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      document.getElementById("results").innerHTML = "<p>Something went wrong. Try again.</p>";
    }
  });
  
  function displayResults(schemes) {
    const container = document.getElementById("results");
    container.innerHTML = "";
  
    if (schemes.length === 0) {
      container.innerHTML = "<p>No matching schemes found.</p>";
      return;
    }
  
    schemes.forEach((scheme) => {
      const div = document.createElement("div");
      div.className = "scheme";
      div.innerHTML = `
        <h3>${scheme.scheme_name}</h3>
        <p><strong>Description:</strong> ${scheme.detailed_description || scheme.short_description || "No description"}</p>
        <p><strong>Interest Rate:</strong> ${scheme.interest_rate_min || "?"}% - ${scheme.interest_rate_max || "?"}%</p>
        <p><strong>Max Amount:</strong> ₹${scheme.maximum_amount || "?"}</p>
        <p><strong>Repayment Period:</strong> ${scheme.repayment_period || "Not specified"}</p>
        <p><strong>Eligibility:</strong> 10th ≥ ${scheme.min_10th_marks || "-"}%, 12th ≥ ${scheme.min_12th_marks || "-"}%</p>
        <p><strong>States:</strong> ${scheme.eligible_states || "All"}</p>
        <p><strong>Castes:</strong> ${scheme.eligible_castes || "All"}</p>
        <p><strong>Gender:</strong> ${scheme.eligible_genders || "All"}</p>
        <p><strong>Website:</strong> <a href="${scheme.website_url}" target="_blank">${scheme.website_url}</a></p>
      `;
      container.appendChild(div);
    });
  }
  