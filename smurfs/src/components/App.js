import React, { Component,Fragment } from 'react';
import './App.css';
import { createSmurf,getSmurfs } from '../actions';
import { connect } from 'react-redux';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

state = {
  name: '',
  age: Number(''),
  height: ''
}

handleInputChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};


addSmurf = () => {
    const { name, age, height } = this.state;
    this.props.createSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' });
  };


    componentDidMount(){
      console.log(this.props);
      this.props.getSmurfs()

    }


  render() {
    return (
        <Fragment>
      <div className="">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
         <div>

      </div>
      <ul>
        {this.props.smurfs.map(smurf => {
                  return (
                    <div className='smurfContainer'>
                      <li key={smurf.id}>{smurf.name}</li>
                      <li> {smurf.age}</li>
                      <li> {smurf.height}</li>
                    </div>

                  );
                })}

      </ul>

        <form className=''>
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.height}
          name="height"
          type="text"
          placeholder="Height"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.addSmurf()} type="button">
          Add New Smurf
        </button>
        </form>
      </div>
        </Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
   smurfs: state.smurfs
 };
}

export default connect(
  mapStateToProps,
  {createSmurf,getSmurfs  }
)(App);
