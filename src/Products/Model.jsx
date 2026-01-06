import React from "react";
import ModelCard from "./ModelCard";

export default function Model({ setSelectedProduct, setShowModal, selectedProduct }) {
    console.log(selectedProduct)
    return (
        <>
            {selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => { setSelectedProduct(null); setShowModal(false) }}/>

                    <div className="relative z-50 bg-white rounded-2xl shadow-2xl max-w-lg w-full p-7 mx-4 animate-scaleIn" > 
                        <button onClick={() => { setSelectedProduct(null); setShowModal(false) }} className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl" > 
                            ✕ 
                        </button>
                        <p className="flex flex-col gap-2">
                            {
                                selectedProduct?.reviews.map((item, index) => {
                                    return <ModelCard item={item} key={index} />
                                })
                            }
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
