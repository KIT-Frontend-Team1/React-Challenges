// router 라이브러리 react-router-dom의 사용
import { RouterProvider } from 'react-router-dom';
// 스타일 초기화를 위한 reset 불러오기
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import './App.css';
import router from './routes/routing';

// 글로벌 스타일 만들기, reset 사용해서 스타일 초기화하기
const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  ol, ul, li {
    list-style: none;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyles/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
