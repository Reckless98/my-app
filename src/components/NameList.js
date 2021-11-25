import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>);
  const persons = [
    {
      id: 1,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
    {
      id: 2,
      name: "John",
      age: "25",
      skill: "React",
    },
    {
      id: 3,
      name: "George",
      age: 33,
      skill: "Angular",
    },
  ];
  const personList = persons.map((person) => <Person key={person.id} person={person} />);
  return (
    <div>
      <div>{personList}</div>
      <div>{nameList}</div>
    </div>
  );
}

export default NameList;
