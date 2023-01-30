import React from "react"
import "./category.css"


const category = () => {
  
  return (
    <>
      <div className="header">
        <h1 className="TitleHeader">SELECIONE UMA CATEGORIA</h1>
      </div>
      <div className="Container">
        
        <a href='/Album' className="man" >
          <p className="p">Mascolino</p>
        </a>
        <a href='/Album' className="woman">
          <p className="p">Feminino</p>
        </a>
        
      </div> 
    </>
  )
}

export default category
