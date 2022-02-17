import React, { useState } from "react";
import './stylesheet.css';
import ItemComponent from "./components/itemComponents";

const FILTER_MAP = {
    All: () => true,
    Chestplates: item => item.type === "chestplate",
    Boots: item => item.type === "boots",
    Helmets: item => item.type === "helmet",
    Leggings: item => item.type === "leggings",
    Swords: item => item.type === "sword",
    Gems: item => item.type === "gem",
    Meat: item => item.type === "meat",
    Rings: item => item.type === "ring"
};

const FILTER_NAMES = Object.keys(FILTER_MAP);


function Shop(props) {
    const [filter, setFilter] = useState('All');  //it's a hook!!
    const itemsList = props.items
        .filter(FILTER_MAP[filter]);

    return (
        <div className="grid-container">
            <div className="leftFilter">
                <h3>Filters: </h3>
                { FILTER_NAMES.map(btnName => (
                    <FilterButton key={btnName} name={btnName} isPressed={btnName === filter} setFilter={setFilter} />
                ))}
            </div>
            <div className="itemGrid">
                {itemsList.map(item => (
                    <ItemComponent key={item.id} {...item} onSelect={props.onSelect} /> // Spread Syntax
                ))}
            </div>
        </div>
    );
}

function FilterButton(props) {
    return (
        // callback function is passed as a prop
        <button className="filterButton" aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}> 
            {props.name}
        </button>
    );
}

export default Shop;