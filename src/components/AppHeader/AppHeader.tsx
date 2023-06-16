import React, { useState, useEffect, useRef } from "react";

// style
import {
  Layout,
  LogoContainer,
  Logo,
  Menu,
  MenuItem,
  AppButton,
  MenuButton,
  MobileMenu,
  MobileMenuItem,
} from "./Header.styled";

// Image
import ImageLogo from "assets/png/Main-Logo.png";
import { BiMenu } from "react-icons/bi";

// Data
import { HomeMenu } from "data/Menu/HomeMenu";
import { useNavigate } from "react-router-dom";

// API
import { getDocs } from "api/docs";

//---------------------------------------------------

interface HeaderProps {
  showTeam: boolean;
  showDocs: boolean;
}

const Header: React.FC<HeaderProps> = ({ showTeam, showDocs }) => {
  const [show, setShow] = useState(-1);
  const [docs, setDocs] = useState("/");

  const navigate = useNavigate();

  const dropMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showDocs) {
      (async () => {
        const data = await getDocs();
        setDocs(data.docs.docs);
      })();
    }
  }, [showDocs]);

  const handleClickOutside = (e: MouseEvent) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target as Node)) {
      return;
    } else {
      if (
        menuButtonRef.current &&
        menuButtonRef.current.contains(e.target as Node)
      ) {
        return;
      } else {
        setShow(-1);
      }
    }
  };
  useEffect(() => {
    if (show > 0) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <Layout>
      <LogoContainer data-aos="fade-up">
        <Logo src={ImageLogo} alt="No Logo" />
      </LogoContainer>
      <Menu data-aos="fade-up">
        <Menu>
          {HomeMenu.map((item, key) => {
            return item.name === "team" ? (
              showTeam ? (
                <MenuItem key={key} href={item.link}>
                  {item.name}
                </MenuItem>
              ) : (
                <></>
              )
            ) : (
              <MenuItem key={key} href={item.link}>
                {item.name}
              </MenuItem>
            );
          })}
          {showDocs && (
            <MenuItem href={docs} target="_blank">
              DOCS
            </MenuItem>
          )}
        </Menu>
      </Menu>
      <AppButton
        onClick={() => {
          navigate("/app");
        }}
        data-aos="fade-up"
      >
        Launch App
      </AppButton>
      <MenuButton
        ref={menuButtonRef}
        onClick={() => {
          setShow(show * -1);
        }}
      >
        <BiMenu size={24} />
      </MenuButton>

      <MobileMenu ref={dropMenuRef} show={show}>
        {HomeMenu.map((item, key) => {
          return item.name === "team" ? (
            showTeam ? (
              <MobileMenuItem
                onClick={() => {
                  setShow(show * -1);
                }}
                key={key}
                href={item.link}
              >
                {item.name}
              </MobileMenuItem>
            ) : (
              <></>
            )
          ) : (
            <MobileMenuItem
              onClick={() => {
                setShow(show * -1);
              }}
              key={key}
              href={item.link}
            >
              {item.name}
            </MobileMenuItem>
          );
        })}
        {showDocs && (
          <MobileMenuItem
            onClick={() => {
              setShow(show * -1);
            }}
            href={docs}
            target="_blank"
          >
            DOCS
          </MobileMenuItem>
        )}
        <MobileMenuItem
          onClick={() => {
            setShow(show * -1);
          }}
        >
          Launch App
        </MobileMenuItem>
      </MobileMenu>
    </Layout>
  );
};

export default Header;
