import Link from "next/link";

const category = [
  { id: 1, title: "sports" },
  { id: 2, title: "Entertainment" },
  { id: 3, title: "Business" },
  { id: 4, title: "Technology" },
  { id: 5, title: "Health" },
];

const Category = () => {
  return (
    <div>
      <ul>
        {category.map((c) => (
          <div key={c.id}>
            <Link href={`/news/${c.title}`}>
              <li>{c.title}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Category;
