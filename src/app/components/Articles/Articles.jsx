import styles from "../../styles/Articles.module.css";

const Articles = ({ id, title, description }) => {
  return (
    <div key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Articles;
