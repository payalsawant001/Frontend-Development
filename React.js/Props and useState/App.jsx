import React from 'react';
import Header from './Header.jsx';
import Counter from './Counter.jsx'

function App() {
  
  return (
    <>
      <h1>Hello World!</h1>
      <Header name="Payal"
              age={22}
              role="Engineer"
       />
      <Counter />
    </>
  )
}

export default App;
