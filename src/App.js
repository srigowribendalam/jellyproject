import React from 'react';
import './App.css';
import Table1 from './components/Table';
import InputField from './components/InputField';

class App extends React.Component {
 constructor(props){
   super(props);
 }
render(){
   return (
    <div>
      {/* <Table1/> */}
      <InputField />
    </div>
  );
}
}

export default App;