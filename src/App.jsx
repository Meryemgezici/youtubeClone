import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "./pages/Feed"
import Header from "./components/Header.jsx";

function App() {


  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />}></Route>
      </Routes>
    </BrowserRouter>
  );

}


export default App;
