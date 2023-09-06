import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'

function App() {

    //useSelector accepts a function that tells it what part of the store you want.
    //here we return the whole store
    const reduxStore = useSelector(store =>store)
    
    //dispatch is how we talk to redux from react
    const dispatch = useDispatch()

    //we want one thing
    //here we return one part of the store, count
    const count = useSelector(store =>    store.count     )
  return (
    <div className="App">

      <br></br>
      <h2>{JSON.stringify(reduxStore)}</h2>

      
      <button onClick={() => dispatch({type: 'INCREASE'})}>Increase</button>

      <button onClick={() => dispatch({type: 'DECREASE'})}>Decrease</button>

      {/* rendering the count */}
      <p>Count is: {count}</p>


    </div>
  );
}

export default App;
