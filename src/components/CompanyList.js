import React from "react";

function CompanyList({ companies, onSelect }) {
  if (!companies || companies.length === 0) return <p>No companies to display.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {companies.map((company, index) => (
        <div
          key={index}
          onClick={() => onSelect(company)}
          className="p-4 border rounded shadow-md bg-white cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="text-lg font-bold mb-2">{company.companyName}</h2>
          <p>CEO: {company.ceo}</p>
          <p>Score: {company.score}</p>
          <p>Market Cap: {company.marketCap}</p>
        </div>
      ))}
    </div>
  );
}

export default CompanyList;