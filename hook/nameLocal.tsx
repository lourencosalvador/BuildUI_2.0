import { useState } from "react";

export const useGetLocalDados = () => {
    const [name, setName] = useState('')
    const keyLocal = 'valuesUsers'
    const storedValues = localStorage.getItem(keyLocal);
    const parsedValues: { name: string; imgUrl: string; }[] = storedValues ? JSON.parse(storedValues) : [];
    parsedValues.map((item) => {
      setName(item.name)
    })

    return {
        name
    } 
  }