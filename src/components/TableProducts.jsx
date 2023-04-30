import React from "react";
import styled from "styled-components";
// import { product } from "../utils/Constants";
import { useContextStore } from "./context";

export const TableProducts = () =>
  //   {
  //   store,
  //   incrementProductHandler,
  //   decrementProductHandler,
  //   remove,
  // }
  {
    const {
      store = [],
      incrementProduct,
      decrementProduc,
      removeProduct,
    } = useContextStore();
    const totalPrice = store?.product.map((item) => {
      if (item.quantity === 0) {
        const result = { ...item, price: (item.price = 0) };
        return result.price;
      } else {
        return item.price;
      }
    });
    const resultTotal = totalPrice.reduce((a, b) => a + b, 0);

    return (
      <Container>
        <div>
          <Table>
            <Thead>
              <p>Car</p>
              <p>Car Name</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Remove</p>
            </Thead>
            <ol>
              {store.product.map((item) => {
                return (
                  item.quantity !== 0 && (
                    <li key={item.id}>
                      <Tbody>
                        <TImg>
                          <img src={item.url} />
                        </TImg>
                        <div>{item.productName}</div>
                        <div>${item.price}</div>
                        <ContainerCount>
                          <ButtonCount onClick={() => decrementProduc(item.id)}>
                            -
                          </ButtonCount>
                          <span>{item.quantity}</span>
                          <ButtonCount
                            onClick={() => incrementProduct(item.id)}
                          >
                            +
                          </ButtonCount>
                        </ContainerCount>
                        <div>
                          <ButtonRemove onClick={() => removeProduct(item.id)}>
                            Remove
                          </ButtonRemove>
                        </div>
                      </Tbody>
                    </li>
                  )
                );
              })}
            </ol>
          </Table>
          <TotalDiv>
            <p style={{ fontSize: "3rem" }}>Total: {resultTotal}</p>
          </TotalDiv>
        </div>
      </Container>
    );
  };
const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
`;
const Thead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  gap: 30px;
  font-size: 1.6rem;
  font-weight: 600;
  border-top: 3px solid #dcdcdc;
  .id {
    width: 100px;
    display: flex;
    justify-content: center;
    margin-top: -10;
  }
  p {
    width: 200px;
    height: 20px;
    display: flex;
    justify-content: center;
  }
`;
const TImg = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 95px;
    height: 76px;
    object-fit: contain;
  }
`;
const Tbody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 1.6rem;
  font-weight: 600;

  border-top: 3px solid #dcdcdc;
  .id {
    width: 100px;
    font-weight: 600;
  }
  div {
    width: 240px;
  }
`;

const ContainerCount = styled.div`
  display: flex;
  gap: 10px;

  justify-content: center;
`;
const ButtonCount = styled.button`
  padding: 10px;
  background-color: #19a1b7;
  color: #fff;
  border-radius: 4px;
  border: none;
`;
const ButtonRemove = styled.button`
  padding: 10px;
  background-color: #de3445;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 1.4rem;
`;
const TotalDiv = styled.div`
  margin-bottom: 40px;
`;
