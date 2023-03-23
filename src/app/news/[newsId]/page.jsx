"use client";

import { useState, useEffect } from "react";

const newsId = ({ params }) => {
  const [category, setCategory] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (name) => {
    setLoading(true);
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&category=${name}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        setCategory(data.articles);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(params.newsId);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {category.map((c, i) => (
        <div key={i}>
          <h1>{c.title}</h1>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
};

export default newsId;
