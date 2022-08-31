import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import { useCartContext } from "../context/cart_context";
const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <main>
        <PageHero title="cart" />
        <Wrapper className="page-100">
          <div className="empty">
            <h2>Oops you have not select a product</h2>
            <Link to="/products" className="btn" id="link">
              go products
            </Link>
          </div>
        </Wrapper>
      </main>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper>
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  #link {
    margin-top: 2rem;
  }
`;

export default CartPage;
