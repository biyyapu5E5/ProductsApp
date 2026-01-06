import { useState, useEffect, useMemo } from "react";
import Card from "./Card";
import SearchInput from "./SearchInput";
import FilterDropdown from "./FilterDropdown";
import Sort from "./Sort";
import Loader from "./Loader";
import ErrorIcon from "../Images/img.png";
import Model from "./Model";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [ratingRange, setRatingRange] = useState({ min: "", max: "" });
  const [sortOrder, setSortOrder] = useState("desc");
  const [showModel, setShowModel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products?limit=50");
      if (res.status === 200) {
        const data = await res.json();
        setProducts(data.products);
      } else {
        console.log("unkown error");
        setError(true);
      }
    } catch (e) {
      console.log("Error fetching products", e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = useMemo(() => {
    const query = search?.toLowerCase() || "";
    let data = products.filter((item) => {
      const matchesSearch =
        item.title?.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query);

      const matchesPrice =
        (!priceRange.min || item.price >= Number(priceRange.min)) &&
        (!priceRange.max || item.price <= Number(priceRange.max));

      const matchesRating =
        (!ratingRange.min || item.rating >= Number(ratingRange.min)) &&
        (!ratingRange.max || item.rating <= Number(ratingRange.max));

      return matchesSearch && matchesPrice && matchesRating;
    });

    if (sortOrder === "asc") data.sort((a, b) => a.price - b.price);
    if (sortOrder === "desc") data.sort((a, b) => b.price - a.price);

    return data;
  }, [products, search, priceRange, ratingRange, sortOrder]);

  const ResetFilters = () => {
    setSearch("");
    setPriceRange({ min: "", max: "" });
    setRatingRange({ min: "", max: "" });
    setSortOrder("desc");
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col bg-gradient-to-br from-[#faf7f2] via-[#f3efe7] to-[#e6efe9]">
        <div className="flex flex-col gap-4 shadow-lg">
          <h1 className="text-3xl font-extrabold text-center pt-5 text-[#3f3f46] tracking-wide " >
            Products
          </h1>
          <div className="flex items-center justify-between px-6 pb-4">
            <div className="flex gap-4">
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FilterDropdown
                onApply={({ priceRange: pr, ratingRange: rr }) => {
                  setPriceRange(pr);
                  setRatingRange(rr);
                }}
              />
            </div>
            <div className="flex gap-4">
              <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
              <button onClick={ResetFilters} className="px-3 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-200" >
                Reset
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center flex-1">
            <Loader />
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center flex-1 gap-4">
            <img src={ErrorIcon} className="w-72 opacity-80" />
            <p className="text-lg font-semibold text-[#991b1b]">
              Something went wrong!
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="flex flex-wrap justify-center gap-6">
              {filteredData.length ? (
                filteredData.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    setSelectedProduct={setSelectedProduct}
                    setShowModal={setShowModel}
                  />
                ))
              ) : (
                <div className="text-center mt-12 bg-white/60 px-8 py-6 rounded-xl shadow-sm">
                  <p className="text-xl font-semibold text-[#374151]">
                    No products match your filters
                  </p>
                  <p className="text-sm text-[#6b7280]">
                    Try adjusting search or filters
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {
        showModel &&
        <Model setSelectedProduct={setSelectedProduct} setShowModal={setShowModel} selectedProduct={selectedProduct} />
      }
    </>
  );
}

export default Products;
