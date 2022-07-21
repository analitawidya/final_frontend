import React, { useState, useEffect } from 'react'
import { AddProduct } from '../../service/API.js'
import axios from 'axios';




const AddProductModal = (props) => {
    const { show, onClose, setRefresh, refresh } = props;
    const [showModal, setShowModal] = useState(false);
    const [tipe_property, setTipeProperty] = useState(" ")
    const [city, setCity] = useState(" ")
    const [address, setAddress] = useState(" ")
    const [building_area, setBuildingArea] = useState(" ")
    const [bedrooms, setBedrooms] = useState(" ")
    const [bathrooms, setBathrooms] = useState(" ")
    const [price, setPrice] = useState(" ")
    const [image, setImage] = useState(" ")
    const [token, setToken] = useState("");



     
        const refreshToken = async () => {
          try {
            const response = await axios.get("http://localhost:8000/token");
            setToken(response.data.accessToken);
          } catch (error) {
            console.log(error);
          }
        };

            useEffect(() => {
              refreshToken();
            }, []);

            
    const addNewProduct = async (e) => {
        e.preventDefault()
        await AddProduct (
        tipe_property,
            city,
            address,
            building_area,
            bedrooms,
            bathrooms,
            price,
            image, token)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
        onClose();
        setRefresh(!refresh)

    }

        

   

     

    
    return (

        <>
            <button
                className="bg-blue-200 text-black active:bg-blue-500 
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(true)}
            >
                AddProduct
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Add Product</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                            x
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={addNewProduct}>
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Product Name
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={tipe_property}
                                            onChange={(e) => setTipeProperty(e.target.value)} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            City
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Address
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Building Area
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={building_area}
                                            onChange={(e) => setBuildingArea(e.target.value)} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Bedrooms
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={bedrooms}
                                            onChange={(e) => setBedrooms(e.target.value)} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Bathrooms
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={bathrooms}
                                            onChange={(e) => setBathrooms(e.target.value)} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Price
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            image
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)} />
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={addNewProduct}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};




export default AddProductModal;


