import './App.css';
import './Homepage.css';
import './TodaysOrders.css';
import './History.css';
import './NewEntry.css';
import './STN.css';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import { Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom'
import Error from './components/Error';
import Homepage from './components/Homepage';
// import 'bootstrap/dist/css/bootstrap.min.css'
import TodaysOrders from './components/TodaysOrders';
import History from './components/History';
import NewEntry from './components/NewEntry';
import CardDetails from './components/CardDetails';
import RestCards from './components/RestCards';
import axios from 'axios';


function App() {
  return (
    <div className="App">
      {/* <OrderStatus /> */}

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/resetpassword' element={<ResetPassword />} />

          <Route path='/homepage' element={<Homepage />} />
          <Route path='/todaysorders' element={<TodaysOrders />} />
          <Route path='/history' element={<History />} />
          <Route path='/newentry' element={<NewEntry />} />
          <Route path='/carddetails' element={<CardDetails />} />
          <Route path='/restCards' element={<RestCards />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
