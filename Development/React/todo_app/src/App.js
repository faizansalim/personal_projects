import React from "react";
import "./App.css";

class App extends React.Component {

  state = {
    tasks:[],
    currInput:""
  }

  render = () => {
    return (
      <div>
        <input
           className = "input-box"
        type="text" onChange = { (e) =>{
            this.setState({ currInput: e.currentTarget.value});
        } } 
        
        onKeyDown = {
          (e) => {
            if(e.key === "Enter"){
              this.setState({
                tasks:[...this.state.tasks, this.state.currInput],
                currInput: "",
              });
            }
          }
        }
        
        value={this.state.currInput}>   
          </input>

        <ul>
          {this.state.tasks.map((el) => {
            return <li>{el}</li>
          } 

          )}
        </ul>

      </div>
    );
  }
}

export default App;