import React from "react"
import { Header } from "../component/Header"
import Lolly from '../component/Lolly'
import { navigate } from "gatsby"


const Index = () => {


  
  return (
    <div>
      <Header></Header>
      <div className="listLollies">
    
      <Lolly fillLollyTop="#d52358" fillLollyMiddle="#e95946" fillLollyBottom="#deaa43" />
         

         
      <Lolly fillLollyTop="red" fillLollyMiddle="blue" fillLollyBottom="green" />
         


    </div>

    
    <input type="button" value="Create new Lolly"
    onClick={
      ()=>{
        navigate('/createNew');
      }
    }
    ></input>

    </div>
  )
}

export default Index
