import axios from "axios";
import Cookies from 'js-cookie';



const token = Cookies.get('refreshToken')


export const Registration = async (
  username,
  password,
  name,
  email,
  address,
  phone_number,
  image
) => {
  return await axios.post("http://localhost:8200/registration", {
    username: username,
    password: password,
    name: name,
    email: email,
    address: address,
    phone_number: phone_number,
    image: image

  });
};


export const LoginAPI = async (
    username, 
    password
) => {
    return await axios.post("http://localhost:8200/login", {
        username: username,
        password: password
    });
}

export const getAllProducts =  () => {

  return axios.get('http://localhost:8200/products', {
      

  })

}

export const getAllProductById =  (id) => {

  return axios.get('http://localhost:8200/products/id', {
      

  })

}



export const deleteProduct = (id) => {
  const token = Cookies.get('refreshToken')

  const headerConfig = {
      headers: {
          'Authorization': "Bearer " + token,
      },
  };
  return axios.delete(`http://localhost:8200/deleteProduct/:id`, headerConfig);
}
export const addProduct = async (tipe_property, city, address, building_area, bedrooms, bathrooms, price, image) => {
  return await axios.post('http://localhost:8200/myProducts', {
    tipe_property: tipe_property,
    address : address,
    city: city,
    building_area: building_area,
    bedrooms: bedrooms,
    bathrooms : bathrooms,
    price : price,
    image : image


  }, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  })

}


export const updateProduct = (tipe_property, city, address, building_area, bedrooms, bathrooms, price, image) => {
  const bodyJSON = {
      tipe_property, 
      city, 
      address, 
      building_area, 
      bedrooms, 
      bathrooms, 
      price, 
      image
  };


  const headerConfig = {
      headers: {
        Authorization: `Bearer ${token}`
      },
  };


  return axios.post(`http://localhost:8200/myProducts`,bodyJSON, headerConfig);
};