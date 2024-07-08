import React from "react";
import { CiCirclePlus, CiHome } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import style from "./Footer.module.css";
import FooterLink from "./FooterLink/FooterLink";
import Logo from "./img/LogoMain.svg";

const Footer = () => {
  const local = useLocation();

  return (
    <>
      <footer className={style.footer}>
        <img src={Logo} alt="" />
        <div className={style.footerBtns}>
          {local.pathname === '/' ? (
            <FooterLink rota={"/"}>
              <CiHome size={30} /> home
            </FooterLink>
          ) : (
            <Link to={"/"}>
              <CiHome size={30} style={{color: 'white'}}/>
            </Link>
          )}
          {local.pathname === '/novoVideo' ? (
            <FooterLink rota={"/"}>
              <CiCirclePlus  size={30}/> NOVO VIDEO
            </FooterLink>
          ) : (
            <Link to={"/novoVideo"}>
              <CiCirclePlus size={30} style={{color: 'white'}}/>
            </Link>
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
