import React, { useEffect, useRef, useState } from "react";
import NewsAppCard from "./NewsAppCard";
import "./Newsapp.css";

function NewsApp() {
  const [newslist, setnewslist] = useState([]);
  const [query, setquery] = useState("tesla");

  // Query api
  const apiurl = `https://newsapi.org/v2/everything?q=${query}&from=2024-04-04&sortBy=publishedAt&apiKey=05ab8bb10c464f29a1ac2dc295d7dbee
  `;

  const queryrefvar = useRef(null);
  useEffect(() => {
    fetchdata();
  }, [query]);

  async function fetchdata() {
    try {
      const fetchdata = await fetch(apiurl);
      const jsondata = await fetchdata.json();
      const jsondata2 = jsondata.articles;
      const jsonData3 = jsondata2.filter((items) => items.urlToImage !== null);
      setnewslist(jsonData3);
    } catch (e) {
      console.log(e, "Error occured");
    }
  }

  // handle submit Function

  function handlesubmit(e) {
    e.preventDefault();
    const value = queryrefvar.current.value;
    if (value === "") {
      setquery("cricket");
    } else {
      setquery(value);
    }
  }

  return (
    <div
      style={{
        marginTop: "20px",
        marginInline: "auto",
        width: "80%",
        marginBlock: "40px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>News App</h1>
      <form onSubmit={handlesubmit}>
        <div className="querys">
          <label htmlFor="querys">Search Your Favourite News:</label>

          <input className="query" type="text" ref={queryrefvar} id="querys" />
          <button className="btn-submit" onClick={handlesubmit}>
            Submit
          </button>
        </div>
      </form>

      <div className="app-body">
        {newslist.map((news) => {
          return <NewsAppCard key={news.url} news={news} />;
        })}
      </div>
    </div>
  );
}
//
// function NewsApp() {
//   //   const apikey = "05ab8bb10c464f29a1ac2dc295d7dbee";

//   const [newsList, setnewsList] = useState([]);

//   const [query, setquery] = useState("tesla");

//   const queryrefdata = useRef(null);
//   const apiurl = `https://newsapi.org/v2/everything?q=${query}&from=2023-07-28&sortBy=publishedAt&apiKey=05ab8bb10c464f29a1ac2dc295d7dbee`;

//   useEffect(() => {
//     fetchdata();
//   }, [query]);

//   async function fetchdata() {
//     try {
//       const response = await fetch(apiurl);

//       const jsonData = await response.json();

//       setnewsList(jsonData.articles);
//     } catch (e) {
//       console.log(e, "Error occured");
//     }
//   }

//   function handlesubmit(event) {
//     event.preventDefault();
//     const refvalue = queryrefdata.current.value;
//     setquery(refvalue);
//   }

//   return (
//     <div
//       style={{
//         marginTop: "20px",
//         marginInline: "auto",
//         width: "80%",
//         marginBlock: "40px",
//       }}
//     >
//       <h1>News App</h1>
//       <form onSubmit={handlesubmit}>
//         <input className="query-input" type="text" ref={queryrefdata} />
//         <input
//           className="btn-submit"
//           onClick={handlesubmit}
//           type="submit"
//           value="SUBMIT"
//         />
//       </form>

//       <div className="Categories">
//         <button
//           style={{ padding: "20px", marginBottom: "10px", cursor: "pointer" }}
//           onClick={() => setquery("fifa")}
//         >
//           Fifa
//         </button>
//       </div>
//       <div className="app-body">
//         {newsList.map((news) => {
//           return <NewsAppCard key={news.url} news={news} />;
//         })}
//       </div>
//     </div>
//   );
// }

export default NewsApp;
