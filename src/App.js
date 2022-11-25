import { inc, dec } from './store/sliceReducers/counterSlice';
import { hello, meow } from './store/sliceReducers/textSlice';
import { useSelector, useDispatch } from 'react-redux';

function App(props) {


  const counter = useSelector(state => state.counterSlice.counter);
  const text = useSelector(state => state.textSlice);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>App Component</h2>
      <button onClick={() => {
        dispatch(inc());
        dispatch(hello());
      }}>+</button>
      <p>{counter}</p>
      <p>{text.text}</p>
      <button onClick={() => {
        dispatch(dec());
        dispatch(meow());
      }}>-</button>
      <hr />
    </div>
  );
};

export default App;
