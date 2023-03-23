import { useState } from "react";
import styles from "../styles/Search.module.css";
import { useRouter } from "next/navigation";

const Search = () => {
  const [input, setInput] = useState("");

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/searched/` + input);
  };
  return (
    <>
      <form onSubmit={submitHandler} className={styles.search_container}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.search_input}
          placeholder="what are you looking for?"
        />
      </form>
    </>
  );
};

export default Search;
