import figlet from "figlet";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./database";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/products", (req, res) => {
  const products = db.find({}, (err: unknown, docs: Array<{ name: string, image: string, thumb: string, price: number, currency: string}>) => {
    if (err) {
      console.log(err);
      return res.send([])
    }

    return res.status(200).json(docs)
  });
});

app.listen(PORT, () => {
  const text = figlet.textSync("Product Team");
  console.log(text);
  console.log(`Listening on http://localhost:${PORT} ...`);
});
