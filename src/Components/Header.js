import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { selectCars } from "../features/car/CarSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerState, setBurgerState] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a key={index} href="#">
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <CustomMenu
          onClick={() => {
            setBurgerState(true);
          }}
        />
      </RightMenu>
      <BurgerNav show={burgerState}>
        <CloseWrapper>
          <CustomCloseBtn
            onClick={() => {
              setBurgerState(false);
            }}
          />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => {
            return (
              <li key={index}>
                <a href="#">
                  {car}
                </a>
              </li>
            );
          })}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Use Inventory</a>
        </li>
        <li>
          <a href="#">Trade in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 5;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 600;
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomCloseBtn = styled(CancelPresentationIcon)`
  cursor: pointer;
`;
export default Header;
