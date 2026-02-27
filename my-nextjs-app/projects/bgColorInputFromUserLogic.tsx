"use client"

import React, { useEffect, useState } from 'react'

function BgcolorChanger() {
    const[bgColor,setBgColor] = useState("#ffffff");

    let displayColor = bgColor;
    const handleColor =(value:string)=>{
        setBgColor(value)
    }
    useEffect(()=>{
        document.body.style.backgroundColor = displayColor;
    },[displayColor])

  return (
    <button color='black'>
        {"Choose Color: "}
        <input type="color" onChange={(e)=>handleColor(e.target.value)} />
    </button>
  )
}

export default BgcolorChanger;