import "./App.css";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./reducers/counterReducer";

import ShowCounter from "./components/ShowCounter";

/**
 * Store - Sparar vårt state
 * Reducer - Som uppdaterar vårt state
 * Action - Som säger åt vad vi ska uppdatera
 * Dispatch - Som triggar en action
 */

function App() {
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Räknare</h1>
      <ShowCounter />
      <section>
        <button onClick={() => dispatch(increment(1))}>Öka med 1</button>
        <button onClick={() => dispatch(decrement(1))}>Minska med 1</button>
      </section>
    </main>
  );
}

export default App;
