
import { useState } from "react";
import { Palletecolor, colorSelect } from "../data";
import { zinc } from "tailwindcss/colors";

export function useColor() {
    const [colorDefinida, setColorDefinida] = useState(`${zinc[800]}`);

    const setColor = (color: colorSelect) => {
        if (color === 'VIOLET') {
            setColorDefinida(Palletecolor.violet);
            console.log('violet')
        } else if (color === 'ROSE') {
            setColorDefinida(Palletecolor.rose);
            console.log('rose')
        } else {
            setColorDefinida(Palletecolor.default); 
        }
    };

    return {
        colorDefinida,
        setColor
    };
}