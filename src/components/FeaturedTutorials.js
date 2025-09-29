import React from "react";
import TutorialCard from "./TutorialCard";
//import "./Featured.css"; // shared CSS for cards

const tutorials = [
  {
    title: "React Router",
    description: "Routing in React",
    username: "Charlie",
    rating: 4.7,
    image: "https://picsum.photos/seed/router1/300/200"
  },
  {
    title: "Hooks in Depth",
    description: "UseEffect, UseState, and more",
    username: "Dana",
    rating: 4.6,
    image: "https://picsum.photos/seed/hooks2/300/200"
  },
  {
    title: "State Management",
    description: "Redux and Context API",
    username: "Eve",
    rating: 4.9,
    image: "https://picsum.photos/seed/state3/300/200"
  }
];

function FeaturedTutorials() {
  return (
    <section>
      <h2>Featured Tutorials</h2>
      <div className="card-container">
        {tutorials.map((tutorial, index) => (
          <TutorialCard key={index} {...tutorial} />
        ))}
      </div>
      <button className="see-all-btn green">See All Tutorials</button>
    </section>
  );
}

export default FeaturedTutorials;
