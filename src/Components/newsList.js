import axios from "axios";

export const newsList = (url) => {
  var data ;
  axios
    .get(url)
    .then((res) => {return [] (res.data)})
    .catch((err) => []);
    console.log('data', data);
    return data;
};
