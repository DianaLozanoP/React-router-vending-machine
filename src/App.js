import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardine from './Sardine';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}></Route>
          <Route path="/soda" element={<Soda />}></Route>
          <Route path="/chips" element={<Chips />}></Route>
          <Route path="/sardines" element={<Sardine />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
