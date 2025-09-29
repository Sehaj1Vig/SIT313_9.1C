  import React from "react";
  import ArticlesCard from "./ArticlesCard";
  //import "./Featured.css"; // shared CSS for cards

  const articles = [
    {
      title: "React Basics",
      description: "Learn React from scratch",
      username: "Alice",
      rating: 4.5,
      image: "https://picsum.photos/seed/react1/300/200"
    },
    {
      title: "Advanced JS",
      description: "Deep dive into JavaScript",
      username: "Bob",
      rating: 4.8,
      image: "https://picsum.photos/seed/js2/300/200"
    },
    {
      title: "HTML & CSS",
      description: "Learn front-end basics",
      username: "Charlie",
      rating: 4.6,
      image: "https://picsum.photos/seed/html3/300/200"
    }
  ];

  function FeaturedArticles() {
    return (
      <section>
        <h2>Featured Articles</h2>
        <div className="card-container">
          {articles.map((article, index) => (
            <ArticlesCard key={index} {...article} />
          ))}
        </div>
        <button className="see-all-btn">See All Articles</button>
      </section>
    );
  }

  export default FeaturedArticles;
