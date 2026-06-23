import { useState } from "react";


export default function useLocalStorage(
  key,
  initialValue
) {

  const [value, setValue] = useState(() => {

    try {

      const saved =
        localStorage.getItem(key);


      if (saved) {
        return JSON.parse(saved);
      }


      return initialValue;

    } catch {

      return initialValue;

    }

  });


  const updateValue = (newValue) => {

    setValue(newValue);

    localStorage.setItem(
      key,
      JSON.stringify(newValue)
    );

  };


  return [
    value,
    updateValue
  ];

}

