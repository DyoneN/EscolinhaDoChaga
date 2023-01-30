import React from "react"
import SearchBar from "../../components/searchbar/SearchBar"
import Painel from "./Painel.js"
import styled from 'styled-components';
import "./Painel.css"

const ContainerAlbum = styled.div`
  height:55vh;
`;

const album = () => {
 
  return (
    <>
      <ContainerAlbum className="containerAlbum">
        <div className="header">
          <SearchBar/>
        </div>
        <div>
          <Painel/>
        </div>
      </ContainerAlbum>
    </>
  )
}

export default album
