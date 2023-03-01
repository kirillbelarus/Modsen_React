
import Book from "./pages/Book";
import Books from "./pages/Books";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/header/Header";
function App() {
  return (
  <div className="App">
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Books/>} />
          <Route path="/book/:id" element={<Book/>} />
        </Routes>
    </Router>
  </div>
  );
}

export default App;
