import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-xl mb-10">
      <h1 className="text-xl font-bold px-3 py-2">{news.title}</h1>
      <figure>
        <img className="w-full" src={news.image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        {news.details.length > 200 ? (
          <p>
            {news.details.slice(0, 200)}{" "}
            <Link to={`/news/${news._id}`} className="text-blue-400 font-bold">
              Read More...
            </Link>
          </p>
        ) : (
          <p>{news.details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
