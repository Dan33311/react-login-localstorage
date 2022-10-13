// bnasic1
import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FormContext = createContext();

export default FormContext;

export const FormProvider = ({children}) => {

  const [loginDate, setLoginDate] = useLocalStorage('loginDate', )
  const [isLogin, setIsLogin] = useState(false)
  const [email, setEmail] = useLocalStorage('email', '')
  const [password, setPassword] = useLocalStorage('password', '')

  return (
    <FormContext.Provider value={{
      loginDate,
      setLoginDate,
      isLogin,
      setIsLogin,
      email,
      setEmail,
      password,
      setPassword
    }}>
      {children}
    </FormContext.Provider>
  )
}
