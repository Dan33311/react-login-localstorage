// import reactLogo from './assets/react.svg'
// import './App.css'
import { FormProvider } from './context/FormContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LoginComponent';
import UserInfo from './components/UserInfo';


function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <FormProvider>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/user' element={<UserInfo />} />
            </Routes>
          </FormProvider>
        </BrowserRouter>
      </div>
  )
}

export default App;
