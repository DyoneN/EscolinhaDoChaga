import React from 'react';
import styled from 'styled-components';
import SoccerKids from '../../assets/image/soccerkids.jpg'
 
const ItemContainer = styled.div`
    border-radius: 10px;
    background-color: #302f2f;
    height: 220px;
    width: 262px;
    color: #29303b;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;   
`;

 
const Thumbnail = styled.img`
    width: auto;
    height: 70%;
    border: 0;
    vertical-align: middle;
    float: left;
    margin-right: 10px;
`;
 
const TitlePane = styled.div`
    font-weight: 700;
    margin-bottom: 5px;
    color: #fff;
`;
 
const PricePane = styled.div`
    margin-bottom: 5px;
    color: #fff;
`;
 
const ItemLink = styled.a`
    text-decoration: none;
`;
 
function ListItem(props) {
    return (
        <ItemLink href="/Galery" title="Clique para ver todo acervo">
            <ItemContainer>
                <Thumbnail src={SoccerKids} />
                <TitlePane>jogos de 2015</TitlePane>
                <PricePane>Registro dos jogos de 2015</PricePane>
            </ItemContainer>
        </ItemLink>
    );
}
 
export default ListItem;