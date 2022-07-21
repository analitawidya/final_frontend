import React, { useContext, useState, useEffect} from 'react';
import { getAllProducts } from '../service/API';
// import context
import { HouseContext } from './HouseContext';
// import components
import House from './House';
// import link
import { Link } from 'react-router-dom';
// import icons
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  console.log(houses,"ini apaan")

    const [dataProducts, setDataProducts] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const fetchAllProducts = async () => {
      await getAllProducts()
        .then((response) => setDataProducts(response.data))
        .catch((eror) => console.log(eror));
    };

    useEffect(() => {
      fetchAllProducts();
    }, [refresh]);


  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className='mb-20'>
      <div className='container-sm mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10'>
          {dataProducts.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />

              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
