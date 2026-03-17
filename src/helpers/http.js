import axios from "axios";



  const token = localStorage.getItem("token");


export default function GetRequest  ( url ) {
  return axios.get(`http://localhost:5000/${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export  function PostRequest  ( url,body ) {
  return axios.post(`http://localhost:5000/${url}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

