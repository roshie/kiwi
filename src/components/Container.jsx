import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { createRef, useState } from 'react';
import Item from './item';

export default function Container(props) {
    var [state, setState] = useState({ items: [] });

    const HandleHit = (e) => {
        let items = state.items.slice(); 
        if (items.length < 10)  {    
            items.push(e.dragData.PoNum);
            setState({ items: items });
            e.containerElem.style.display = "none"
        }
    }

    return (
        <DropTarget 
            targetKey="container"
            onHit={HandleHit} >
                <div style={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '5px',
                    textAlign: 'center',
                    margin: '10px',
                    height: '30%'
                }}>
                    {state.items.map((item, index) => {
                        return (
                        <Item key={index} num={item}>
                            {item}
                        </Item>
                        )
                  })}
                </div>
        </DropTarget>
    );
}