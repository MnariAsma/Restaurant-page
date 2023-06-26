import React from "react";
import NavBar from "./navBar";
import Plat, { Item } from "./plat";

export default function Menu() {
  const menucontenent = [
    {
      id: 1,
      image: "c1",
      text: "salade Spécial",
      prix: "20DT",
    },
    {
      id: 2,
      image: "c2",
      text: "Sushi",
      prix: "48DT",
    },
    {
      id: 3,
      image: "c3",
      text: "Pizza Spécial",
      prix: "25DT",
    },
    {
      id: 4,
      image: "c4",
      text: "Steak",
      prix: "35DT",
    },
    {
      id: 5,
      image: "c5",
      text: "Salade Cesar",
      prix: "20DT",
    },
    {
      id: 6,
      image: "c6",
      text: "salade ",
      prix: "25DT",
    },
    {
      id: 7,
      image: "c7",
      text: "Grillade Mixte",
      prix: "35DT",
    },
    {
      id: 7,
      image: "c9",
      text: "Creuvette Royale",
      prix: "40DT",
    },
  ];
  return (
    <>
    <NavBar/>
    <section id="menu">
      <div className="leftCol titre">
        <h2>
          <span>m</span>enu
        </h2>
      </div>

      <div className="contenu">
        {menucontenent.map((item: Item, index: number) => (
          <div className="box" key={index}>
            <Plat item={item}  />
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
