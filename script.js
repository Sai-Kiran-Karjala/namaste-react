// USING JAVASCRIPT

// const root = document.getElementById("root");

// const heading = document.createElement("h1");
// heading.textContent = "Hello, World!";
// root.appendChild(heading);

// USING REACT & REACT-DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

root.render(parent);
