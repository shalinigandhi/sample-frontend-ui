import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { SignUp } from './components/SignUp/SignUp';
import { ResetPassword } from './components/ResetPassword/ResetPassword';
import { AccountType } from './components/AccountType/AccountType';
import './styles/App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/account-type" element={<AccountType />} />
    </Routes>
  );
}

export default App;
