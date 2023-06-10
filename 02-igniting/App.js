import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {},
  "Hello world from React.createElement"
);

// JSX {transpiled before it reaches JS Engine} - PARCEL - Babel
const jsxHeading = <h1 id="heading">Hello world from jsx</h1>;
const jsxHeading1 = (
  <h1>in multiple line you have to wrap in ( ) these brackets</h1>
);

// React Functional Component
const HeadingComponnet = () => {
  return <h1>Namste React Functional Component</h1>;
};
// both HeadingComponent and HeadingComponent1 are same
const HeadingComponne1 = () => <h1 id="parent">Hello Guys</h1>;

const ComponentComposition = () => (
  <>
    {heading}
    {HeadingComponne1()}
    <HeadingComponne1 />
    <HeadingComponnet></HeadingComponnet>
  </>
);

console.log(heading);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComponentComposition />);
