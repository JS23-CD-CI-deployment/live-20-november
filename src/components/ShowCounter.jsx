import { useSelector } from "react-redux";

function ShowCounter() {
  const counter = useSelector((state) => {
    return state.counter.value;
  });

  return <p>Counter: {counter}</p>;
}

export default ShowCounter;
