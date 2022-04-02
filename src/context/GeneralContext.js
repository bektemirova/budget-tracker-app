import {createContext, useState} from "react";
import * as Yup from 'yup';


export const TrackerContext = createContext()



const GeneralContext = ({children}) => {
  const [list, setList] = useState([])

  const onSubmit = (variables) => {

    console.log("this is submit")
    setList([...list, variables])

  }

  const options = [
    {
      label: "Income",
      value: "income"
    },
    {
      label: "Extense",
      value: "extense"
    }
  ]

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    amount: Yup.number().required('Required'),
    type: Yup.string().required('Required'),
  });



  let data = {
    list: list,
    setList: setList,
    onSubmit: onSubmit,
    options: options,
    SignupSchema: SignupSchema,

  }
  return (
    <TrackerContext.Provider value={data}>
      {children}
    </TrackerContext.Provider>
  )
}

export default GeneralContext