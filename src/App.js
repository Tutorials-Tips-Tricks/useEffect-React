import React, { useState, useEffect } from "react";

function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  // const [resorceType, setResorceType] = useState("posts");
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resorceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resorceType]);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  }

});

  return (
    <>

      {/* <div className="btn">
        <button onClick={() => setResorceType("posts")}>Posts</button>
        <button onClick={() => setResorceType("users")}>Users</button>
        <button onClick={() => setResorceType("comments")}>Comments</button>
      </div>
      <h1>{resorceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })} */}

      <div>{windowWidth}</div>
    </>
  );
}

export default App;
