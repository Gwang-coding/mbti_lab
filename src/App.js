import Main from "./routes/Mainpage.js";
import Question from "./routes/Questionpage.js";
import Results from "./routes/Resultlpage.js";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function App() {
  return <Router>
    <Routes>
      <Route path="/"  element={<Main/>}/>
      <Route path="/Question"  element={<Question/>}/>
      <Route path="/Result"  element={<Results/>}/>
    </Routes>
  </Router>
} 

export default App;
