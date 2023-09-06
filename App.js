const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" },[React.createElement("h1",{id:"h1"},"Hello world"),React.createElement("h2",{id:"h1"},"Hello Next")]),
  ]),
]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
