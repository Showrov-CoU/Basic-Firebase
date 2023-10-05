import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((result) => setCategory(result));
  }, []);
  return (
    <div>
      <h1 className="text-2xl mb-2 font-bold">
        All Category{category.length}{" "}
      </h1>

      {category.map((item) => (
        <Link
          to={`/category/${item.id}`}
          className="block pl-14 font-light py-2 hover:bg-[#F3F3F3]"
          key={item.id}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideBar;
