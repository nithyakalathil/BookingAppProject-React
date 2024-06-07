import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBooking from './components/AddBooking';
import Search from './components/Search';
import Delete from './components/Delete';
import Viewall from './components/Viewall';

function App() {
  return (
     
<BrowserRouter>
<Routes>

  <Route path='/' element={<AddBooking/>}/>
  <Route path='/s' element={<Search/>}/>
  <Route path='/d' element={<Delete/>}/>
  <Route path='/v' element={<Viewall/>}/>
  
</Routes>
</BrowserRouter>


  );
}

export default App;
