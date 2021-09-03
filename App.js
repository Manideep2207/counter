import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    }
    this.decrement = this.decrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.increment = this.increment.bind(this);
  }

    decrement(){
      if(this.state.count > 1){
        this.setState(prevState => ({
          count: this.state.count-1
        }))
      }
  }
  onFormSubmit(event) {
    event.preventDefault();
  }
    handleChange(event) {
      const value = event.target.value;
      if(!Number(value))
      {
        this.setState(prevState => ({
          count: 0
        }))
      }
      else
      {
        this.setState(prevState => ({
          count: Number(value > 1000 ? 1000 : value)
        }))
      }
  }
    increment(){
      if(this.state.count < 1000){
        this.setState(prevState => ({
        count: this.state.count+1
        }))
      }
  }

  render() {
  return (
  <div id="body">
      <div>
        <button className='dec' onClick={this.decrement}>-</button>
      </div>
          <div>
            <form onSubmit = {this.onFormSubmit}>
            <input className='content' input="text" value={this.state.count} onChange = {this.handleChange} />
          </form>
          </div>
                    <div>
                      <button className='inc' onClick={this.increment}>+</button>
                    </div>
  </div>
  );
}
}

export default App;