import React from "react";

function ArticlesCard({ title, description, username, rating, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>⭐ {rating} | {username}</p>
    </div>
  );
}

export default ArticlesCard;
