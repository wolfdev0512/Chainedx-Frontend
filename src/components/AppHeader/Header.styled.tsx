import styled from "styled-components";

//-----------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 90%;
  max-width: 1440px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 50px;
`;
export const LogoContainer = styled.div``;
export const Logo = styled.img`
  width: 100px;
  height: 60px;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const MenuItem = styled.a`
  position: relative;

  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;

  text-align: center;
  color: White;

  padding: 5px 10px;
  margin: 0px 10px;

  transition: all 0.2s;

  &::after {
    content: "";
    transition: all 0.2s ease-in-out;
    position: absolute;
    height: 3px;
    background-color: #c28a24;
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }

  &:hover {
    color: #c28a24;
    &::after {
      transform: scaleX(1.05);
    }
  }

  @media screen and (max-width: 1440px) {
    font-size: 13px;
    padding: 5px 6px;
    margin: 0px 6px;
  }
`;

export const AppButton = styled.div`
  width: 100px;
  height: 40px;

  color: white;

  background: #c28a24;

  position: relative;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-weight: 600;
  font-family: Arial;

  cursor: pointer;

  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  border: none;

  &:hover {
    color: #c28a24;
    background: white;
    transition: all 0.3s !important;
  }

  &:before {
    position: absolute;
    content: "";
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: shiny-btn1 3s ease-in-out infinite;
  }
  &:hover:before {
    position: absolute;
    content: "";
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #c28a24;
    animation: shiny-btn1 3s ease-in-out infinite;
  }

  @keyframes shiny-btn1 {
    0% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0;
    }
    80% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0.5;
    }
    81% {
      -webkit-transform: scale(4) rotate(45deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(50) rotate(45deg);
      opacity: 0;
    }
  }
`;

export const MenuButton = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    width: 45px;
    height: 45px;

    background: #c28a24;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;

    color: white;
    font-weight: 600;
    font-size: 18px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    :focus {
      background: white;
      color: #c28a24;
    }
  }
`;

export const MobileMenu = styled.div<{ show: number }>`
  display: none;
  position: absolute;

  @media screen and (max-width: 1024px) {
    display: block;

    top: 90px;
    width: 100%;

    border-radius: 20px;

    z-index: 5;

    visibility: ${({ show }) => (show > 0 ? "visible" : "collapse")};

    & > a {
      ${({ show }) =>
        show > 0
          ? `opacity: 1;
            visibility: visible;
            &:nth-child(2) {
              transition-delay: 0.1s;
            }
            &:nth-child(3) {
              transition-delay: 0.2s;
            }
            &:nth-child(4) {
              transition-delay: 0.3s;
            }
            &:nth-child(5) {
              transition-delay: 0.4s;
            }
            &:nth-child(6) {
              transition-delay: 0.5s;
            }
            &:nth-child(7) {
              transition-delay: 0.6s;
            }
            &:nth-child(8) {
              transition-delay: 0.7s;
            }
            &:nth-child(9) {
              transition-delay: 0.8s;
            }
            &:nth-child(10) {
              transition-delay: 0.9s;
            }`
          : `opacity: 0;
            visibility: hidden;
            &:nth-child(1) {
              transition-delay: 0.9s;
            }
            &:nth-child(2) {
              transition-delay: 0.8s;
            }
            &:nth-child(3) {
              transition-delay: 0.7s;
            }
            &:nth-child(4) {
              transition-delay: 0.6s;
            }
            &:nth-child(5) {
              transition-delay: 0.5s;
            }
            &:nth-child(6) {
              transition-delay: 0.4s;
            }
            &:nth-child(7) {
              transition-delay: 0.3s;
            }
            &:nth-child(8) {
              transition-delay: 0.2s;
            }
            &:nth-child(9) {
              transition-delay: 0.1s;
            }`};
    }
  }
`;
export const MobileMenuItem = styled.a`
  z-index: 5;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  color: white;

  cursor: pointer;

  font-size: 16px;
  border: 1px solid #c28a24;
  transition: all 0.2s;
  font-size: 20px;
  margin-bottom: 3px;

  padding: 10px 0px;

  :hover,
  :focus {
    background: white;
    color: #c28a24;
  }

  &:first-child {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    background: #c28a24;
  }
`;
