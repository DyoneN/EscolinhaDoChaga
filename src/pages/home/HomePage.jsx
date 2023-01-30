import React from "react"
import Logo from "../../assets/image/logo.svg"
import background from "../../assets/image/bg.jpg";
import "./HomePage.css"

const HomePage = () => {
  const img1 = Logo;
  const alt1 = "Image Two";
  
 
  return (
    <>
      <div className="container_home" style={{ backgroundImage: `url(${background})` }}>
        <div className="main_home">
          <img className="logo" src={img1} alt={alt1} />
          <div className="subtitle_description_home">
            <h4 className="subtitle_home">Seja bem-vindo e vamos juntos relembrar nossos momentos</h4>
            <p className="description_home">Essa e uma plataforma idealizada pelo professor de futebol Chaguinha onde seus alunos possam ver suas fotos e relembrar seus momentos</p>
          </div>
        </div>
        <div className="body_button">
          <a className="button" href="/Category">Seleção de categoria</a>
        </div>
      </div>
    </>
  )
}

export default HomePage
