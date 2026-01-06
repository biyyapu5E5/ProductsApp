import React, { useState, useRef, useEffect } from "react";

export default function FilterDropdown({ onApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("price");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [ratingRange, setRatingRange] = useState({ min: "", max: "" });
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setPriceRange({ min: "", max: "" });
        setRatingRange({ min: "", max: "" });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleApply = () => {
    onApply({ priceRange, ratingRange });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 rounded-lg font-semibold text-white
                         bg-gradient-to-r from-indigo-500 to-blue-500
                         hover:from-indigo-600 hover:to-blue-600
                         shadow-md hover:shadow-lg
                         transition-all duration-200"
      >
        Filter
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-[450px] bg-white border-gray-200 border rounded shadow-lg z-50 flex">
          <div className="w-1/3 border-r p-2 flex flex-col gap-2">
            <button
              className={`text-left px-2 py-1 rounded ${selectedOption === "price" ? "bg-blue-100 font-medium" : ""}`}
              onClick={() => setSelectedOption("price")}
            >
              Price
            </button>
            <button
              className={`text-left px-2 py-1 rounded ${selectedOption === "rating" ? "bg-blue-100 font-medium" : ""}`}
              onClick={() => setSelectedOption("rating")}
            >
              Rating
            </button>
          </div>

          <div className="flex-1 p-2 flex flex-col gap-2">
            {selectedOption === "price" && (
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  placeholder="Min Price"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                  className="w-1/2 px-2 py-1 border rounded"
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                  className="w-1/2 px-2 py-1 border rounded"
                />
              </div>
            )}

            {selectedOption === "rating" && (
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  placeholder="Min Rating"
                  value={ratingRange.min}
                  onChange={(e) => setRatingRange({ ...ratingRange, min: e.target.value })}
                  className="w-1/2 px-2 py-1 border rounded"
                />
                <input
                  type="number"
                  placeholder="Max Rating"
                  value={ratingRange.max}
                  onChange={(e) => setRatingRange({ ...ratingRange, max: e.target.value })}
                  className="w-1/2 px-2 py-1 border rounded"
                />
              </div>
            )}

            <button
              className="px-3 py-1 rounded-lg font-semibold text-white
                         bg-gradient-to-r from-indigo-500 to-blue-500
                         hover:from-indigo-600 hover:to-blue-600
                         shadow-md hover:shadow-lg
                         transition-all duration-200 w-fit flex items-center justify-center"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
