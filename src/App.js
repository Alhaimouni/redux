import { connect } from 'react-redux';
import { inc, dec } from './store/sliceReducers/counterSlice';
import { } from '@reduxjs/toolkit';

function App(props) {

  return (
    <div className="App">
      <h2>App Component</h2>
      <button onClick={() => { props.inc() }}>+</button>
      <p>{props.counter}</p>
      <button onClick={() => { props.dec() }}>-</button>
      <hr />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    counter: state.x.counter
  }
};

const mapDispatchToProps = { inc, dec };

export default connect(mapStateToProps, mapDispatchToProps)(App);
