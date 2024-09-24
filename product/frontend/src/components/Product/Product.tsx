import { useEffect, useState } from "react";
import { SelectedProduct, ProductList, ProductInfoLayout } from "./styles";

interface ProductInfo {
  name: string;
  thumb: string;
  image: string;
  _id: string;
  type: string;
}

export default function Product(props: {
  onChange?: (product?: ProductInfo) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Array<ProductInfo>>([]);
  const [seletedId, setSeletedId] = useState<string>("");

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/products");
        const products = await response.json();
        setProducts(products);
        setSeletedId(products[0]?._id);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  const selectedProduct = products.find((product) => product._id === seletedId);

  const clickHandler = (product: ProductInfo) => {
    setSeletedId(product._id);
  };

  useEffect(() => {
    props?.onChange?.(selectedProduct);
  }, [selectedProduct]);

  if (loading) return <div>Loading ...</div>;

  return (
    <ProductInfoLayout>
      <SelectedProduct.Image src={selectedProduct?.image} />
      <SelectedProduct.Info.Container>
        <SelectedProduct.Info.Type>
          {selectedProduct?.type}
        </SelectedProduct.Info.Type>
        <SelectedProduct.Info.Name>
          {selectedProduct?.name}
        </SelectedProduct.Info.Name>
      </SelectedProduct.Info.Container>
      <ProductList.Container>
        {products.map((product) => (
          <ProductList.Item
            key={product._id}
            src={product.thumb}
            selected={product._id === seletedId}
            onClick={() => clickHandler(product)}
          />
        ))}
      </ProductList.Container>
    </ProductInfoLayout>
  );
}
