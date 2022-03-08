import './App.css';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Login from "./libs/Login";
import Consult from './components/consult';
import Update from './components/update';
import View from './components/view'
import './components/bootstrap.min.css';
// import MedContextProvider from './context/app.context';



function App() {
  return (
    <Router>
    <div className="App">
    
    <Routes>
    <Route exact path="/"  element={<Login/>} />
    <Route exact path="/consult"  element={<Consult/>} />
     <Route exact path="/update" element={<Update/>} />
    <Route exact path="/view" element={<View/>} /> 
  </Routes>
  
    </div>
    </Router>
  );
}

export default App;
