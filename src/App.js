import React, { useEffect, useState } from "react";
import { authenticate, getTopCompanies } from "./services/api";
import CompanyList from "./components/CompanyList";
import CompanyModal from "./components/CompanyModal";

function App() {
  const [token, setToken] = useState("");
  const [sector, setSector] = useState("technology");
  const [sortBy, setSortBy] = useState("marketCap");
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null); 

  useEffect(() => {
    async function fetchTokenAndData() {
      try {
        const clientID = "your-client-id";
        const clientSecret = "your-client-secret";

        const accessToken = await authenticate(clientID, clientSecret);
        setToken(accessToken);

        const result = await getTopCompanies(sector, accessToken, 10, sortBy);
        setCompanies(result);
      } catch (err) {
        console.error(" Error:", err.message);
      }
    }

    fetchTokenAndData();
  }, [sector, sortBy]);

  const handleSectorChange = (e) => setSector(e.target.value);
  const handleSortChange = (e) => setSortBy(e.target.value);
  const handleCompanySelect = (company) => setSelectedCompany(company);
  const handleCloseModal = () => setSelectedCompany(null);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4"> Top Companies by Sector</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <select
          value={sector}
          onChange={handleSectorChange}
          className="p-2 border rounded"
        >
          <option value="technology">Technology</option>
          <option value="automobile">Automobile</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="retail">Retail</option>
        </select>

        <select
          value={sortBy}
          onChange={handleSortChange}
          className="p-2 border rounded"
        >
          <option value="marketCap">Sort by Market Cap</option>
          <option value="score">Sort by Score</option>
        </select>
      </div>

      <CompanyList companies={companies} onSelect={handleCompanySelect} />

      <CompanyModal company={selectedCompany} onClose={handleCloseModal} />
    </div>
  );
}

export default App;