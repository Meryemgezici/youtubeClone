import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "./pages/Feed"
import Header from "./components/Header.jsx";
import VideoDetail from "./pages/VideoDetail";

function App() {


  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/watch/:videoId" element={<VideoDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  );

}


export default App;
