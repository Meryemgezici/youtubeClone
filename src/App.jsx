import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "./pages/Feed"
import Header from "./components/Header.jsx";
import VideoDetail from "./pages/VideoDetail";
import SearchResults from "./pages/SearchResults";

function App() {


  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/watch/:videoId" element={<VideoDetail/>}></Route>
        <Route path="/results" element={<SearchResults/>}></Route>
      </Routes>
    </BrowserRouter>
  );

}


export default App;
