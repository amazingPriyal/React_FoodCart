import './App.css';
// import Posts from './components/posts';
// import Postforms from './components/postforms';
import {Provider} from 'react-redux';
//import store from './store';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import CardDetails from './components/CardDetails';
import Cards from './components/Cards';
import CardsData from './components/CardsData';

function App() {

  

  return (
    
    <div className="App">
      <Header/>
      
      <Routes>
      <Route path='/' element={<CardsData />} />
      <Route path='/cart/:id' element={<CardDetails />} />
    </Routes>
    </div>
    
  );
}

export default App;
