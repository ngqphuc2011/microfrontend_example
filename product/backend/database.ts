import Datastore from "nedb";

const db = new Datastore();

db.insert(
  [
    {
      name: "Porsche-Diesel Master 419",
      image: "http://localhost:3000/images/tractor-red.jpg",
      thumb: "http://localhost:3000/images/tractor-red-thumb.jpg",
      price: "66.00",
      currency: "USD",
      type: 'tractor'
    },
    {
      name: "Fendt F20 Dieselroß",
      image: "http://localhost:3000/images/tractor-green.jpg",
      thumb: "http://localhost:3000/images/tractor-green-thumb.jpg",
      price: "54.00",
      currency: "USD",
      type: 'tractor'
    },
    {
      name: "Eicher Diesel 215/16",
      image: "http://localhost:3000/images/tractor-blue.jpg",
      thumb: "http://localhost:3000/images/tractor-blue-thumb.jpg",
      price: "58.00",
      currency: "USD",
      type: 'tractor'
    },
  ],
  (err) => {
    console.log(err);
  }
);

export default db;
