import './App.css';
import BioskopPocetna from './strane/BioskopPocetna';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BioskopPocetna />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
