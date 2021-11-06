import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,login,incrementByFive} from "./actions";


function App() {

  const counter  = useSelector(state => state.counter);
  const loggedIn = useSelector(state=>state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
    <h1>Hello</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button><br/>

      <button onClick={()=>dispatch(incrementByFive(5))}>+5</button><br/>

      <button onClick={()=>dispatch(login())}>Login</button>

      {loggedIn ? <h2>User logged in</h2>:<h2>User not logged in</h2>}

    </div>
  );
}

export default App;
