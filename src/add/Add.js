import React from 'react'

export default function Add() {
    return (
        
        
<div>
{this.state.liste.map(i=>(
    <button type="button">Complete</button >
    <button type="button">Delete</button >
     <h4 >{i}</h4>

))}
</div>
    )
}
