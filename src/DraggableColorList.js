import React from 'react'
import {SortableContainer } from "react-sortable-hoc"
import DraggableColorBox from "./DraggableColorBox"

const DraggableColorList = SortableContainer(({colors, removeColor}) => {
    return (
        <div style={{height:"100%"}}>
                        {colors.map((color, i) => (
                <DraggableColorBox color={color.color} name={color.name} key={color.name} index={i} handleDelete={() => removeColor(color.name)}/>
            ))}
        </div>
    )
})

export default DraggableColorList;
