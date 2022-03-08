import React, { useEffect, useState } from 'react';
import './App.css';
import Btn from './Btn';
import Content from './Content';

const App = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  // useEffect(() => {
  //   const inputElem = document.getElementById('inputElem');
  //   let value = '';
  //   inputElem.addEventListener('change', function (event) {
  //     value = event.value;
  //     console.log(event.value);
  //   });
  // }, []);
  // let mas=[1,2,3,4,5]
  // mas = mas.map((elem,index)=>{
  //   text=elem*5;
  // })

  console.log(list);
  const addElem = () => {
    // let a= [1,23,4,5]
    // let b =[3,4,5,6]
    // let c=[...a,...b]
    // [1,2,3,2,3,4]

    const newList = [...list];
    newList.push(text);
    setList(newList);
  };

  return (
    <div className="App">
      <div className="add">
        <input
          id="inputElem"
          onChange={(event) =>
            setText(event.target.value)
          }></input>
        <button onClick={() => addElem()}>Add</button>
      </div>
      <div className="filter">
        <button>Filter</button>
        <input className=""></input>
      </div>
      {/*
      {list.length ? ( */}
      <div className="list">
        {list.map((elem) => (
          <div key={elem}>{elem}</div>
        ))}
      </div>
      {/* ) : (
        ''
      )} */}
    </div>
  );
};

export default App;
