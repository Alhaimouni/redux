import { connect } from 'react-redux';
import { inc, dec } from './store/sliceReducers/counterSlice';
import { hello, meow } from './store/sliceReducers/textSlice';

function App(props) {

  return (
    <div className="App">
      <h2>App Component</h2>
      <button onClick={() => {
        props.inc();
        props.meow();
      }}>+</button>
      <p>{props.counter}</p>
      <p>{props.text}</p>
      <button onClick={() => {
        props.dec();
        props.hello();
      }}>-</button>
      <hr />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    counter: state.counterSlice.counter,
    text: state.textSlice.text
  }
};

const mapDispatchToProps = { inc, dec, hello, meow };


// function mapDispatchToProps(dispatch) {
//   return {
//     inc: (payload) => { dispatch(inc(payload)) }
//   }
// }


export default connect(mapStateToProps, mapDispatchToProps)(App);
