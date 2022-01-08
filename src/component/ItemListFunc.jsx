/** @format */

import React from "react";
import ItemFunc from "./ItemFunc";

let itemListArray = [
  {
    id: 1,
    name: "burger",
    cost: `${2000}$`,
    rating: `${4.5} /5`,
    imgUrl: "baked tilapia.jpg",
  },
  {
    id: 2,
    name: "pizza",
    cost: `${1300}$`,
    rating: `${2.5} /5`,
    imgUrl: "bbq burger.jpeg",
  },
  {
    id: 3,
    name: "sandwish",
    cost: `${1450}$`,
    rating: `${4.2} /5`,
    imgUrl: "Braised Oxtail Burger .jpeg",
  },
  {
    id: 4,
    name: "sandwish",
    cost: `${500}$`,
    rating: `${3.2} /5`,
    imgUrl: "Black Bean Burgers .jpeg",
  },
  {
    id: 5,
    name: "sandwish",
    cost: `${800}$`,
    rating: `${3.7} /5`,
    imgUrl: "Braised Oxtail Burger .jpeg",
  },
  {
    id: 6,
    name: "sandwish",
    cost: `${700}$`,
    rating: `${3.5} /5`,
    imgUrl: "Black Bean Burgers .jpeg",
  },
  {
    id: 7,
    name: "burger",
    cost: `${1000}$`,
    rating: `${4.5} /5`,
    imgUrl: "baked tilapia.jpg",
  },
  {
    id: 8,
    name: "burger",
    cost: `${1000}$`,
    rating: `${4.5} /5`,
    imgUrl: "baked tilapia.jpg",
  },
];
itemListArray.push({
  id: 9,
  name: "faris",
  imgUrl: "bbq burger.jpeg",
  rating: `${4.0} / 5`,
  cost: `${2050}$`,
});
const ItemListFunc = () => {
  return itemListArray.map(({ id, name, imgUrl, cost, rating }) => {
    return (
      <ItemFunc
        key={id}
        name={name}
        cost={cost}
        rating={rating}
        imgUrl={imgUrl}
      />
    );
  });
};

export default ItemListFunc;
