import React from "react";

export default function SearchInput({ value, onChange, placeholder = "Search..." }) {
  return (
    <div className="flex items-center border rounded overflow-hidden w-full max-w-md">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 px-3 py-2 focus:outline-none"
      />
      <button type="button" className="px-3 py-2 font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-200" >
        Search
      </button>
    </div>
  );
}
