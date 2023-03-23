"use client";

import { useState, useEffect } from "react";

const Page = ({ params }) => {
  const [search, setSearch] = useState([]);
  //   const [isLoading, setLoading] = useState(false);

  const fetchData = async (search) => {
    //     setLoading(true);
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&q=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearch(data.articles);
        //   setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(params.search);
  }, []);

  //   if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {search.map((item, i) => (
        <div key={i}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
