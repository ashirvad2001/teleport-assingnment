"use client";

import { useState, useEffect } from "react";
import Articles from "./components/Articles/Articles";
import styles from "./styles/Page.module.css";
import ReactPaginate from "react-paginate";
import Category from "./components/Category";
import Search from "./components/Search";

export default function Home() {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const newsApi = async () => {
    setLoading(true);
    // API_CALL
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      });
  };

  useEffect(() => {
    newsApi();
  }, []);

  const articlesPerPage = 6;
  const pageVisited = pageNumber * articlesPerPage;

  const displayArticles = news
    .slice(pageVisited, pageVisited + articlesPerPage)
    .map((article, i) => (
      <Articles
        key={i}
        id={article.id}
        title={article.title}
        description={article.description}
      />
    ));

  const pageCount = Math.ceil(news.length / articlesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <main className={styles.page_container}>
      <Search />
      <Category />
      {displayArticles}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        // previousLinkClassName={"previousBttn"}
        // nextLinkClassName={"nextBttn"}
        // disabledClassName={"paginationDisabled"}
        // activeClassName={"paginationActive"}
      />
    </main>
  );
}
