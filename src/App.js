import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Base from './components/layouts/Base';
import Home from './pages/Home';
import Account from './pages/Account';
import Swap from './pages/Swap';
import Calculator from './pages/Calculator';
import Analytics from './pages/Analytics';
import Docs from './pages/Docs';


function App() {
  return (
    <>
     <Router>
    <Base>
    <Routes>
      <Route index path='/' element={ <Home/>} ></Route>
      <Route path='/account'element={ <Account/>} ></Route>
      <Route path='/swap'element={ <Swap/>} ></Route>
      <Route path='/calculator'element={ <Calculator/>} ></Route>
      <Route path='/analytics'element={ <Analytics/>} ></Route>
      <Route path='/docs'element={ <Docs/>} ></Route>
    </Routes>
    </Base>
    </Router>
    
    </>
  );
}

export default App;
