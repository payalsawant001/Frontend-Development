import React from 'react';

function Header(props){
    return (
    <>
      <h1>I'm {props.name}</h1>
      <p>My age is {props.age}</p>
      <p>Role : {props.role}</p>
    </>
    )
}

export default Header;
