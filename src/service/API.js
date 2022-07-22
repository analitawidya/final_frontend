import axios from "axios";







export const Registration = async (
  username,
  password,
  name,
  email,
  address,
  phone_number,
  image
) => {
  return await axios.post("http://localhost:8000/registration", {
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
    return await axios.post("http://localhost:8000/login", {
        username: username,
        password: password
    });
}

export const getAllProducts =  () => {

  return axios.get('http://localhost:8000/products', {
      

  })

}

export const getAllProductById =  (id) => {

  return axios.get('http://localhost:8000/products/id', {
      

  })

}


export const deleteProduct = async (id, token) => {
  return await axios.delete(`http://localhost:8000/deleteProduct/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
// export const addProduct = async (tipe_property, city, address, building_area, bedrooms, bathrooms, price, image, token) => {
//   return await axios.post('http://localhost:8000/myProducts', {
//     tipe_property: tipe_property,
//     address : address,
//     city: city,
//     building_area: building_area,
//     bedrooms: bedrooms,
//     bathrooms : bathrooms,
//     price : price,
//     image : image


//   }, {
//       headers: {
//           Authorization: `Bearer ${token}`
//       }
//   })

// }
export const AddProduct = async (
  tipe_property,
  city,
  address,
  building_area,
  bedrooms,
  bathrooms,
  price,
  image,
  description,
  token
) => {
  return await axios.post(
    "http://localhost:8000/myProducts",
    {
      tipe_property: tipe_property,
      address: address,
      city: city,
      building_area: building_area,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      price: price,
      image: image,
      description: description
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};




 



export const getProductById = (id) => {
    return axios.get(`http://localhost:8000/products/${id}`);
};


export const deleteAllProduct = async (token) => {
  return await axios.delete("http://localhost:8000/deleteAll", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};



export const GetMyProducts = async (token) => {
  return await axios.get("http://localhost:8000/myProducts" , {
   
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export const GetMyProfile = async (token) => {
  return await axios.get("http://localhost:8000/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}


export const updateProduct = async (
  id,
  tipe_property,
  city,
  address,
  building_area,
  bedrooms,
  bathrooms,
  price,
  image,
  description,
  token
) => {
  return await axios.put(
    `http://localhost:8000/myProducts`,
    {
      id: id,
      tipe_property: tipe_property,
      address: address,
      city: city,
      building_area: building_area,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      price: price,
      image: image,
      description: description
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};