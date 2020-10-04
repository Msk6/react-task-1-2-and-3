import React from 'react';
import {items} from './components/items.js';
import {GlobalStyle, Title, Description, BakeryImage, ListWrapper} from './components/styles.js';
import ItemsList from './components/ItemList.js';
import {ThemeProvider} from 'styled-components';

const theme = {
  mainColor: "#5B9EA6", 
  secondryColor: "#BF6B63",
  backgroundColor: "#E4F0F6",
  fontFamily: "Open Sans",
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <header>
        <Title>Aroma's Bakery</Title>
          <Description>
            Cakes, fresh baked cookies and bread .. <br></br>
            Can you imagine aromas?!
          </Description>
          <BakeryImage src="https://cdn.concreteplayground.com/content/uploads/2020/01/MIlkwoodbakeryberry-insta.jpg" 
          alt="shop pic" ></BakeryImage>
        </header>
        <ListWrapper>
        <ItemsList items={items}/>
        </ListWrapper>

    </ThemeProvider>
  );
}

export default App;
