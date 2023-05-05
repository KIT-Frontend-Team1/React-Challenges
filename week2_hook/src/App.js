import "./App.css";
import Lesserafim from "./hooks/Memo";
import UseCallback from "./hooks/useCallback";
import UseEffect from "./hooks/useEffect";
import Example1 from "./hooks/useEffect/Example1";
import Example2 from "./hooks/useEffect/Example2";
import UseMemo from "./hooks/useMemo";
import UseRef from "./hooks/useRef";
import UseState from "./hooks/useState";

function App() {
  return (
    <>
      <UseState />
      <UseRef />
      <UseMemo />
      <UseCallback />
      <Lesserafim />
      <Example1 />
      <Example2 />
      <UseEffect />
    </>
  );
}

export default App;
