// import React from "react";
import "./App.css";

function App() {
  const myArray = [
    { id: 1, name: "sandeep", role: "software developer" },
    { id: 2, name: "sunny", role: " developer" },
    { id: 3, name: "sandy", role: "software " },
    { id: 4, name: "sandeep beesu", role: "software developer" },
    { id: 5, name: "beesu", role: "software tester" },
    { id: 6, name: "sanp", role: "tester" },
    { id: 7, name: "san", role: "software engineer" },
    { id: 8, name: "sap", role: "engineer" },
  ];

  return (
    <div className="App">
      <ul>
        {myArray.map((eactItem) => {
          return (
            <li>
              key={eactItem.id}
              {eactItem.name} {}
            </li>
          );
        })}
      </ul>
      <ul>
        {myArray
          .filter(
            (item) =>
              item.name.includes("san") &&
              item.role.includes("software developer")
          )
          .map((item) => (
            <li>
              key={item.id} {item.name} {item.role}
            </li>
          ))}
        {myArray
          .filter((item) => item.role.includes("software developer"))
          .map((item) => (
            <li>
              key={item.id} {item.role}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
