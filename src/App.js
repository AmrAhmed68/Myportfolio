import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainContent } from "./components/MainContent";    
import { AngularProject } from './components/pages/AngularProject'
import { ReactNative } from './components/pages/ReactNative'
import { ReactProject } from './components/pages/ReactProject'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<MainContent />} /> 
          <Route path="/Angular_Project" element={<AngularProject />} />
          <Route path="/React_Native" element={<ReactNative />} />
          <Route path="/React_Project" element={<ReactProject/>} />
        </Routes>
    </div>
  );
}

export default App;
