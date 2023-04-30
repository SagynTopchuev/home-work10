import React from "react";

import styled from "styled-components";
import { useContextStore } from "./context";

export const Product = () =>
  // { store, addProductHandler }
  {
    const { store, addProduct } = useContextStore();
    return (
      <Container>
        <Ul>
          {store.product.map((el) => {
            return (
              <Li key={el.id}>
                <ImgContainer>
                  <img src={el.url} alt="product photos" />
                  <DataProductContainer>
                    <ProductDiv>
                      {el.productName} <h4>{el.copyPrice} $</h4>
                    </ProductDiv>

                    <Button
                      onClick={() => addProduct(el.id)}
                      disabled={el.quantity > 0}
                    >
                      add
                    </Button>
                  </DataProductContainer>
                </ImgContainer>
              </Li>
            );
          })}
        </Ul>
      </Container>
    );
  };

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Li = styled.li`
  list-style: none;
  width: 200px;
  height: 310px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.259);
  border-radius: 20px;
`;
const ImgContainer = styled.div`
  width: 199px;
  height: 170px;
  /* border-bottom: 1px solid #dcdcdc; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  img {
    width: 80%;
    height: 80%;
    margin-top: 20px;
    border-radius: 20px;
  }
`;
const DataProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const ProductDiv = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 20px;
`;
const Button = styled.button`
  border-radius: 4px;
  border: none;
  font-size: 1.5rem;
  padding: 5px 30px;
  background-color: #2a8365;
  color: red;
  border-radius: 20px;
  &:hover {
    font-size: 30px;
    transition: 0.3s;
  }
  :disabled {
    background-color: silver;
    transition: 0.5s;
    color: black;
    border: 3px solid yellowgreen;
  }
`;
