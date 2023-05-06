import React from "react";
import Callback1 from "./component/App_useCallback1";
import Callback2 from "./component/App_useCallback2";
import Context1 from "./component/App_usecontext";
import Effect1 from "./component/App_useEffect1";
import Effect2 from "./component/App_useEffect2";
import Memo1 from "./component/App_useMemo";
import Memo2 from "./component/App_useMemo2";
import Ref1 from "./component/App_useRef";
import State from "./component/App_useState";

function App() {
  return (
    <div>
      <State />
      <hr />
      <Ref1 />
      <hr />
      <Callback1 />
      <hr />
      <Callback2 />
      <hr />
      <Memo1 />
      <hr />
      <Memo2 />
      <hr />
      <Effect1 />
      <hr />
      <Effect2 />
      <hr />
      <Context1 />
    </div>
  );
}

export default App;
