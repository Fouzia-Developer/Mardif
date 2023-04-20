import './App.css';
import Splash from './Components/Splash';
import Signup from './Components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Forget from './Components/Forget';
import ResetLink from './Components/ResetLink';
import SetnewPassword from './Components/SetnewPassword';
import PasswordReset from './Components/PasswordReset';

function App() {
  return (
   <>


 <BrowserRouter>
        <Routes>
          <Route path={"/signup"} element={ <Signup/>} />
          <Route path={"/"} element={<Splash/>} />
          <Route path={"/Login"} element={<Login/>} />
          <Route path={"/forget"} element={<Forget/>} />
          <Route path={"/reset"} element={<ResetLink/>} />
          <Route path={"/SetnewPassword"} element={<SetnewPassword/>} />
          <Route path={"/PasswordReset"} element={<PasswordReset/>} />
          
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
