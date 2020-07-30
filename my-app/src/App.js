import React from 'react';
import Profile  from './components/profile'

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

class App extends React.Component{
  state={
    'count' : 1,
  }

  Increment=()=>{
    this.setState({'count': this.state.count + 1})    //changes the state and re-renders the 
  }

  handleDecrement=()=>{
    this.setState({'count': this.state.count -1})
  }

  handleReset=()=>{
    this.setState({'count':0})
  }

  render(){
    return(
      <div>
        <h1>The counter value is : {this.state.count}</h1>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}


class SemanticList extends React.Component{
  state=[
    {
      id: 1,
      name :"Lindsay",
      img : "https://semantic-ui.com/images/avatar2/small/lindsay.png",
      description : "Last seen watching Arrested Development just now"
    },
    {
      id: 2,
      name :"Matthew",
      img : "https://semantic-ui.com/images/avatar2/small/matthew.png",
      description : "Last seen watching Old Guard just now"
    },
    {
      id: 3,
      name :"Veronika",
      img : "https://semantic-ui.com/images/avatar2/small/rachel.png",
      description : "Last seen watching Twin Peaks 3 days ago"
    },
    {
      id: 4,
      name :"Jenny",
      img : "https://semantic-ui.com/images/avatar2/small/lindsay.png",
      description : "Last seen watching Extraction 4 days ago"
    },
  ];
  render(){
    return(
      <div>
        {
          this.state.map((user) =>{
            return <Profile profileToPass={user} key={user.id}></Profile>;
          })
        }
        
      </div>
    )
  }
}
export default  SemanticList;
// export default SemanticList ;
