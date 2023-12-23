import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "./main";

function Card() {
  const context = useContext(AppContext);

  const customRef = useRef();

  useEffect(() => {
    console.log(customRef.current);
  }, []);

  return (
    <div ref={customRef}>
      <h1>Card</h1>

      <h2>Value : {context}</h2>
    </div>
  );
}

export default Card;
