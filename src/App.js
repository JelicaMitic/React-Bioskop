import './App.css';
import BioskopPocetna from './strane/BioskopPocetna';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BioskopNovosti from './strane/BioskopNovosti';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BioskopPocetna />} />
          <Route path="/novosti" element={<BioskopNovosti />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
