import { useReducer, useState } from "react";
import "./styles.css";

export default function App() {
  const [Img, setImg] = useState("");
  const [Err, setErr] = useState(false);
  const [Loading, setLoading] = useState(false);

  const initialState = { Img: "", Err: false, Loading: false };
  function postReducer(state, action) {
    switch (action.type) {
      case "FETCH_START":
        return {
          Img: "",
          Err: false,
          Loading: true
        };
      case "FETCH_SUCCESS":
        return {
          Loading: false,
          Err: false,
          Img: action.payload
        };
      case "FETCH_ERROR":
        return {
          Loading: false,
          Err: true,
          Img: ""
        };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(postReducer, initialState);
 

  const Fetch = async () => {
    // setLoading(true);
    dispatch({ type: "FETCH_START" });
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await res.json();
      // setImg(json.message);
      // setLoading(false);
      // setErr(false);
      dispatch({ type: "FETCH_SUCCESS", payload: json.message });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      // setErr(true);
      // setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>{state.Err && "ERROR"}</h1>

      <button onClick={() => Fetch()}>
        {state.Loading ? "wait..." : "fetch image"}
      </button>
      {!state.Err && <img src={state.Img} />}
    </div>
  );
}
