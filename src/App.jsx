// import reactLogo from './assets/react.svg'
// import './App.css'
import Login from './components/LoginComponent';
import { FormProvider } from './context/FormContext';


function App() {

  return (
      <div className="App">
        <FormProvider>
          <Login />
        </FormProvider>
      </div>
  )
}

export default App;
