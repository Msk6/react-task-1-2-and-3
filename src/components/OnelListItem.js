import React from 'react';

import {styles} from './styles'

const OneListItem = (props) => {
    const { item } = props
    return (
        <div >
            <img style={styles.itemImage} src={item.image} alt={item.name}></img>
            <div style={styles.text}>
            <h3>{item.name}</h3>
            <p>{item.price} SR</p>
            </div>
        </div>
    )
}

export default OneListItem