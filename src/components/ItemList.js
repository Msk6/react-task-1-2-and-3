import React from 'react';

import OneListItem from './OnelListItem'

const ItemsList = (props) => {
    const { items } = props
    return items.map( item => <OneListItem item={item} key={item.id}/>)
    }

export default ItemsList
    