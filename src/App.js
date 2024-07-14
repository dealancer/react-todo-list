import { useState } from "react";

function Item({ item, onToggle }) {
    return (
        <div>
            <input type="checkbox" checked={item.completed} onChange={onToggle}></input>
            <span>{item.name}</span>
        </div>
    )
}

function ItemList({items, heading, onToggleItem}) {
    return (
        <div>
            <h1>{heading}</h1>
            {items.map(item =>
                <Item key={item.id} item={item} onToggle={() => onToggleItem(item.id)}/>
            )}
        </div>
    )
}
  
export default function MyApp() {

    const [items, setItems] = useState(() => {
        return [
            { id: 0, name:"item 1", completed: true },
            { id: 1, name:"item 2", completed: false },
            { id: 2, name:"item 3", completed: false }
        ];
    });

    let toggleItem = (id) => {
        const itemsUpdated = [ ...items ];
        itemsUpdated[id].completed = !itemsUpdated[id].completed;
        setItems(itemsUpdated)
    }

    return (
      <div>
        <ItemList items={items} heading={"Todos:"} onToggleItem={(id) => toggleItem(id)}></ItemList>
      </div>
    );
  }
  