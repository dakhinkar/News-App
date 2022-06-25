import React, { useState, useEffect } from "react";
import axios from "axios";

import DynamicCard from "../DynamicCard/DynamicCard";
import Spinner from "../DynamicCard/SpinnerDiv";
function NewsList({ category }) {
  const [headLines, setNewsData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b0e90a8e8ae84f938024b373b63b29e2`
      )
      .then((res) => setNewsData(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{minHeight: '74vh'}}>
      {headLines.length ? (
        <div>
          {headLines.map((data, index) => (
            <DynamicCard newsData={data} key={index.toString()} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default NewsList;
