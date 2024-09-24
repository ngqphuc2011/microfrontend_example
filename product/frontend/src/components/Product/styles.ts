import styled from "@emotion/styled";

const SelectedProductImage = styled.img`
  grid-area: image;
  width: 360px;
  height: 360px;
`;

const SelectedProductInfoContainer = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
`;

const SelectedProductInfoType = styled.div`
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
`;

const SelectedProductInfoName = styled.div`
  font-weight: 200;
  font-size: 2em;
  padding: 0.5rem 1rem;
`;

export const SelectedProduct = {
  Image: SelectedProductImage,
  Info: {
    Container: SelectedProductInfoContainer,
    Type: SelectedProductInfoType,
    Name: SelectedProductInfoName,
  },
};

const ProductListContainer = styled.div`
  grid-area: productlist;
  display: flex;
  align-items: flex-end;
  column-gap: 10px;
`;

const ProductListItem = styled.div<{ src: string; selected: boolean }>`
  position: relative;
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    ` &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            background-color: #9b59b6;
            bottom: 0;
            left: 0;
        }`}
`;

export const ProductList = {
  Container: ProductListContainer,
  Item: ProductListItem,
};

export const ProductInfoLayout = styled.div`
  display: grid;
  grid-template-columns: 360px auto;
  grid-template-rows: 180px 180px;
  grid-template-areas: 
    "image info"
    "image productlist"
`