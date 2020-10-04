import React from 'react';

import {ItemWrapper} from './styles'

const OneListItem = (props) => {
    const { item } = props
    return (
        
        <ItemWrapper>
            <img src={item.image} alt={item.name}></img>
            <p>{item.name}</p>
            <p className='price'>{item.price} SR</p>
        </ItemWrapper>
    )
}

export default OneListItem