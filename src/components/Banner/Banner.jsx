import React from "react";
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <>
      <div className={style.banner}>
        <div className={style.bannerContainer}>
          <div className={style.bannerContainerInfo}>
            <h1>FRONT END</h1>
            <h2>SEO com React</h2>
            <p>
              Eu to aqui pra nesse vídeo dizer que a gente vai aprender a
              começar uma app inspirada no desenho Pokémon com Nextjs e React,
              ver algumas dicas sobre performance e de quebra conhecer uma
              plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22
              minutos nesse vídeo feito com todo o carinho do mundo construindo
              uma "Pokedex"!{" "}
            </p>
          </div>
            <iframe
             className={style.iframe}
              width="50%"
              height="415"
              src="https://www.youtube.com/embed/c8mVlakBESE?si=Bs4vOgLDRV-jdDOU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
    </>
  );
};

export default Banner;
