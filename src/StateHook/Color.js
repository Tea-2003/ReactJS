import React, { userState } from 'react';

function Color() {

    const [color, setColor] = userState("red");
    return (
        <>
        <h1> My favorite is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor('blue')}
        >Blue</button>
        <button
          type="button"
          onClick={() => setColor( <img src="https://haycafe.vn/wp-content/uploads/2021/12/Hinh-do-dep-tron.jpg" alt="description of image" />)}
        >Red</button>
        <button
          type="button"
          onClick={() => setColor(<img src="https://i.pinimg.com/originals/c6/54/62/c654622919bc26d05726715da1bba6ee.jpg" />)}
        >Pink</button>
        <button
          type="button"
          onClick={() => setColor(<img src="https://freenice.net/wp-content/uploads/2021/09/Nhung-hinh-anh-anime-cute-dep-lam-tan-chay-trai-tim-fan.jpg"/>)}
        >Green</button>
      </>
    );
  }


export default Color;