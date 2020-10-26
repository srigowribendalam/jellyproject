import React from 'react';
import './App.css';
import Table1 from './components/Table';

class App extends React.Component {
 constructor(props){
   super(props);
 }
render(){
   return (
    <div>
      <Table1/>
    </div>
  );
}
}

export default App;