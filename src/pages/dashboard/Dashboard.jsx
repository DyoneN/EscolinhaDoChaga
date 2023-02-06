import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import PainelGeneral from "./PainelGeneral";
import Logo from "../../assets/image/soccerkids.jpg";
import "./PainelGeneral.css";

const album = () => {
  const img1 = Logo;
  const alt1 = "Perfil";
  return (
    <div className="containerDashBoard">
      <div className="navigator">
        <img className="logo_navigate" src={img1} alt={alt1} />
        <h2 className="title_navigate_left">CHAGUINHA</h2>
        <div className="links">
          <a href="/Add_Photos" className="link">
            ADICIONAR FOTO
          </a>
          <a href="/" className="link">
            SAIR
          </a>
        </div>
      </div>
      <div>
        <div className="header">
          <SearchBar />
        </div>
        <div>
          <PainelGeneral />
        </div>
      </div>
    </div>
  );
};

export default album;
