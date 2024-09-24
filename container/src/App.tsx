import Product from "product/Product";
import BuyingButton from "./components/BuyingButton";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Record<string, number >>()
  return (
    <>
      <Cart />
      <Product onChange={(p: { price: number }) => setSelectedProduct(p)} />
      <BuyingButton price={selectedProduct?.price ?? 0} />
    </>
  )
}

export default App
