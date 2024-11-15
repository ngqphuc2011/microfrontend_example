import Datastore from "nedb";

const db = new Datastore();

db.insert(
  [
    {
      name: "Charizard",
      image: "http://localhost:3000/images/charizard.avif",
      thumb: "http://localhost:3000/images/charizard.avif",
      price: "66.00",
      currency: "USD",
      type: 'fire'
    },
    {
      name: "Dragonite",
      image: "http://localhost:3000/images/dragonite.avif",
      thumb: "http://localhost:3000/images/dragonite.avif",
      price: "54.00",
      currency: "USD",
      type: 'dragon'
    },
    {
      name: "Eevee",
      image: "http://localhost:3000/images/eevee.avif",
      thumb: "http://localhost:3000/images/eevee.avif",
      price: "58.00",
      currency: "USD",
      type: 'normal'
    },
    {
      name: "Gengar",
      image: "http://localhost:3000/images/gengar.avif",
      thumb: "http://localhost:3000/images/gengar.avif",
      price: "24.00",
      currency: "USD",
      type: 'ghost'
    },
    {
      name: "Gyarados",
      image: "http://localhost:3000/images/gyarados.avif",
      thumb: "http://localhost:3000/images/gyarados.avif",
      price: "99.00",
      currency: "USD",
      type: 'water'
    },
    {
      name: "Pikachu",
      image: "http://localhost:3000/images/pikachu.avif",
      thumb: "http://localhost:3000/images/pikachu.avif",
      price: "88.00",
      currency: "USD",
      type: 'electric'
    },
  ],
  (err) => {
    console.log(err);
  }
);

export default db;
