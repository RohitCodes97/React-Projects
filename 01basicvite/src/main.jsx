import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://netflix.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Netflix",
// };

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom React App</h1>
//     </div>
//   );
// }
const AnotherElement = (
  <a href="https://www.netflix.com" target="_blank">
    visit netflix
  </a>
);

const AreactElement = React.createElement(
  "a",
  { href: "https://netflix.com", target: "_blank" },
  "click to visit netflix"
);

ReactDOM.createRoot(document.getElementById("root")).render(AreactElement);
