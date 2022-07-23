import React, { useEffect, useState } from 'react';

// import houseData
import { housesData } from '../data';
//  useParams
import { useParams } from 'react-router-dom';
// import icons
import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
// import link
import { Link } from 'react-router-dom';

import { getProductById } from '../service/API';
import axios from 'axios';
import { GetMyProfile } from '../service/API';
const PropertyDetails = () => {
  

      const [dataProduct, setDataProduct] = useState({});
      const [isLoading, setIsLoading] = useState(false);
      const { id } = useParams();
      const [dataUser, setDataUser] = useState([]);

            const [refresh, setRefresh] = useState(false);
            const [show, setShow] = useState(false);
            const [showEdit, setShowEdit] = useState(false);

            const [token, setToken] = useState("");

            const refreshToken = async () => {
              try {
                const response = await axios.get("http://localhost:8000/token");
                setToken(response.data.accessToken);
              } catch (error) {
                console.log(error);
              }
            };

            const fetchProducts = async () => {
              await GetMyProfile(token)
                .then((response) => setDataUser(response.data))
                .catch((error) => console.log(error));
            };

            useEffect(() => {
              refreshToken();
              if (token) {
                fetchProducts(token);
              }
            }, [token, refresh]);

      

      useEffect(() => {
        const fetchProductById = async () => {
          await setIsLoading(true);
          await getProductById(id)
            .then((response) => setDataProduct(response.data))
            .catch((error) => console.log(error));
          await setIsLoading(false);
        };
        fetchProductById();
      }, [id]);

  return (
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            {dataProduct.tipe_property}
          </h2>
          <h3 className="text-lg mb-4">{dataProduct.address}</h3>
        </div>
        <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
          <div className="bg-green-500 rounded-full text-white px-3 inline-block">
            {dataProduct.type}
          </div>
          <div className="bg-violet-500 rounded-full text-white px-3 inline-block">
            {dataProduct.city}
          </div>
        </div>
        <div className="text-3xl font-semibold text-violet-600">
          Rp. {dataProduct.price}
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="max-w-[768px]">
          <div className="mb-8">
            <img src={dataProduct.image} alt="" />
          </div>
          <div className="flex gap-x-6 text-violet-700 mb-6">
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div className="text-lg font-medium">{dataProduct.bedrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div className="text-lg font-medium">{dataProduct.bathrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl" />
              <div className="text-lg font-medium">{dataProduct.surface}</div>
            </div>
          </div>
          <p>{dataProduct.description}</p>
        </div>
        <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
              <img className='rounded-full' src={dataUser.image}></img>
            </div>
            <div>
              <div className="font-bold text-lg">{dataProduct.name}</div>
              <div className="text-violet-700 text-sm">
                Call or email the owner if you are interested
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-y-4">
            <label className="block text-black text-sm font-bold mb-1">
              Owner Name :
            </label>
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              id="name"
              value={dataUser.name}
              disabled="disabled"
            />
            <label className="block text-black text-sm font-bold mb-1">
              Email :
            </label>
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              id="email"
              value={dataUser.email}
              disabled="disabled"
            />
            <label className="block text-black text-sm font-bold mb-1">
              Phone Number :
            </label>
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="number"
              id="phone_number"
              value={dataUser.phone_number}
              disabled="disabled"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
