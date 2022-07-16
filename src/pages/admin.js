import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../service/API.js'
import AddProductModal from '../components/modal/add_product_modal.js'
import EditProductModal from '../components/modal/edit_product_modal.js'






function Admin() {
    const [dataProducts, setDataProducts] = useState([])
    const [showAddProductModal, setShowAddProductModal] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);


    const fetchAllProducts = async () => {
        await getAllProducts()
            .then(response => setDataProducts(response.data))
            .catch((eror) => console.log(eror))
    };

    useEffect(() => {
        fetchAllProducts()

    }, [refresh]);

    const onClose = () => setShow(false);
    const onShow = () => setShow(true);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true)


    return (

        <>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">

            <div class="flex items-center space-x-4">
                <div class="space-y-1 font-medium dark:text-white">
                    <div>Rahmat Yonda</div>
                    <div class="text-sm text-gray-500 dark:text-black-400">VIP Members</div>
                </div>
            </div>



            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            City
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Building Area
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Bedrooms
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Bathrooms
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3">

                            <div class="inline-flex rounded-md shadow-sm" role="group">
                                <ul class="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                                    <li>
                                    
                                        <AddProductModal show={show} 
                                        onClose={onClose} 
                                        setRefresh={setRefresh} 
                                        refresh={refresh}/>
                                            
                                        </li>
                                    <li>
                                        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Delete All</button>
                                    </li>
                                </ul>

                            </div>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataProducts.map((product) => (
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td>{product.tipe_property}</td>
                            <td>{product.city}</td>
                            <td>{product.address}</td>
                            <td>{product.bulding_area}</td>
                            <td>{product.bedrooms}</td>
                            <td>{product.bathrooms}</td>
                            <td>{product.price}</td>
                            <td>{product.image}</td>

                            <td></td>



                            <td class="px-6 py-4 text-right">
                                <ul claliss="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                                    <>
                                    <EditProductModal show={show} onClose={onClose}/>
                                    </>
                                    <li>
                                        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Delete</button>
                                    </li>
                                </ul>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>



        </div>
        </>



    )
}

export default Admin


