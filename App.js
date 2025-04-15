// const heading = React.createElement("h1", {id: "heading"}, "Webloom Innovations");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // ReactDOM.render(heading, document.getElementById("root"));
// root.render(heading); 0

const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "Welcome to Webloom Innovations!"),React.createElement("h2", {}, "We are a software development company.")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
  