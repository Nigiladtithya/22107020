import React from "react";

function CompanyModal({ company, onClose }) {
  if (!company) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-2">{company.companyName}</h2>
        <p><strong>CEO:</strong> {company.ceo}</p>
        <p><strong>Tags:</strong> {company.tags?.join(", ")}</p>
        <p><strong>Score:</strong> {company.score}</p>
        <p><strong>Market Cap:</strong> {company.marketCap}</p>
        <p><strong>Website:</strong> {company.website}</p>
      </div>
    </div>
  );
}

export default CompanyModal;