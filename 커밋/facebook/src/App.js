import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import router from "./routes/routing";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
