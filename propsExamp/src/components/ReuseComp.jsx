import { react } from 'react'
import PropsExap from './PropsExap';


function ReuseComp(props) {
  

  return (
    <>
    <h1 style={{color: "blue"}}>Props Example in React this is from Resume compoenet</h1>
    <PropsExap message="Hello from Reuse component" count={50000} />
      
    </>
  )
}

export default ReuseComp;