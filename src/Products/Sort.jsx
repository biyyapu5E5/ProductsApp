import React from "react";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

export default function Sort({ sortOrder, setSortOrder }) {

    const toggleSort = () => setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));

  return (
    <button
      onClick={toggleSort}
      className="px-3 py-2 border rounded flex items-center gap-1 bg-white hover:bg-blue-100"
      title={`Sort Price ${sortOrder === "asc" ? "Low → High" : "High → Low"}`}
    >
      <span className="text-sm">Price</span>
      {sortOrder === "asc" ?  <FaSortAmountUp /> : <FaSortAmountDown />}
      <span className="text-sm">{sortOrder === "asc" ? "Asc" : "Desc"}</span>
    </button>
  );
}
