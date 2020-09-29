import React from 'react';
import {items} from './items.js';
import {styles} from './styles.js';


function App() {

  const itemsList = items.map( item => 
    <div key={item.id}>
      <img style={styles.itemImage} src={item.image} alt={item.name}></img>
      <div style={styles.text}>
        <h3>{item.name}</h3>
        <p>{item.price} SR</p>
      </div>
    </div>
    )
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
      {itemsList}

    </div>
  );
}

export default App;
