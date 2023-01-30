import React from 'react';
import "./Style.css";
import logo from '../../assets/image/lupa.png';


function SearchBar(props) {
    return (
        <div className='HeaderSearch'>
            <input
                placeholder="  Pesquisa uma foto, album ou categoria"
                aria-label="  Pesquisa uma foto, album ou categoria"
                className='inputSearch'
            />

            <button className='buttonSearch'><img src={logo} alt="Logo" className='SearchLupa' /></button>

            
        </div>
    );
}

export default SearchBar;
