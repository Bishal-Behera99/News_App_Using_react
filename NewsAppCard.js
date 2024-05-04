import React from "react";

import "./Newsapp.css";

function NewsAppCard({ news }) {
  return (
    <div className="news-card">
      <img className="img" src={news.urlToImage} alt={news.title} />
      <p>{news.title}</p>
      <h2>{news.description}</h2>
      <a href={news.url}>Click To Know More</a>
    </div>
  );
}

// function NewsAppCard({ news }) {
//   return (
//     <div className="news-card">
//       <img src={news.urlToImage} alt={news.title} />
//       <h2>{news.title}</h2>
//       <p>{news.description}</p>
//       <a href={news.url}>Click To Know More </a>
//     </div>
//   );
// }

export default NewsAppCard;
