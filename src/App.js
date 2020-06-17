import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from './reducers/'   
// do I need to indicate index on line 3?

import { store } from './store'



class App extends Component {
  
 
  render() {
    return <HelloWorld tech={ store.getState().tech } />;
  }
}

export default App;
