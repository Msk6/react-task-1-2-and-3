import React from 'react';
import {items} from './components/items.js';
import {styles} from './components/styles.js';
import ItemsList from './components/ItemList.js'


function App() {

  return (
    <div>
      <header>
      <h1 style={styles.text} >Aroma's Bakery</h1>
        <p style={styles.text} >
          Cakes, fresh baked cookies and bread .. <br></br>
          Can you imagine aromas?!
        </p>
        <img style={styles.bakeryImage} src="https://cdn.concreteplayground.com/content/uploads/2020/01/MIlkwoodbakeryberry-insta.jpg" 
        alt="shop pic" ></img>
      </header>
      <ItemsList items={items}/>

    </div>
  );
}

export default App;
