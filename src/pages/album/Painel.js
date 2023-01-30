import ListItem from './ListItem';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
 
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  padding: 10px;
`;
 
function Painel() {
  return (
    <Container>
      <h1>Albuns</h1>
      <ListContainer>
        
        <ListItem />
        <ListItem />
        <ListItem />
      </ListContainer>
    </Container>
  );
}
 
export default Painel;