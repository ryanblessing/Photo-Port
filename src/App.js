import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  //inside of this return statement is JSX--Javascript S M L, makes react easier to write
  return (
   <div>
     <Nav></Nav>
     <main>
       <About></About>
     </main>
   </div>
  );
}

export default App;
