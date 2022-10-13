// bnasic1
import { createContext, useState } from "react";

const FormContext = createContext();

export default FormContext;

export const FormProvider = ({children}) => {

  const [loginDate, setLoginDate] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <FormContext.Provider value={{
      loginDate,
      setLoginDate,
      email,
      setEmail,
      password,
      setPassword
    }}>
      {children}
    </FormContext.Provider>
  )
}
