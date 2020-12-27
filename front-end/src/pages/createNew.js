import { gql, useQuery, useMutation } from '@apollo/client';
import React, { useState,useRef } from 'react'
import { Header } from '../component/Header'
import Lolly from '../component/Lolly';
import { navigate } from "gatsby"
import shortid from "shortid"

const GET_NOTES = gql`
  query {
    listNotes {
      id
      recepientName
      message
      senderName
      flavourTop
      flavourMiddle
      flavourBottom
      lollyPath
        

  }
  }
`


const CREATE_EVENTS = gql`
  mutation createEvent($id: String!, $recepientName: String!, $message: String!, $senderName: String!, $flavourTop: String!, $flavourMiddle: String!, $flavourBottom: String!, $lollyPath: String!) {
    createEvent(id: $id, recepientName: $recepientName, message: $message, senderName: $senderName, flavourTop: $flavourTop, flavourMiddle: $flavourMiddle, flavourBottom: $flavourBottom, lollyPath: $lollyPath) {
      result
    }
  }
`


const Createnew = () => {
    const [color1,setColor1] = useState("#d54358");
    const [color2,setColor2] = useState("#d56356");
    const [color3,setColor3] = useState("#d58352");
    const recepientName= useRef()
    const messageRef= useRef()
    const senderRef= useRef()
    const {data} = useQuery(GET_NOTES)
    console.log('query result from server', data)
    const [createEvent] = useMutation(CREATE_EVENTS)
    async function handleSubmit (){
        const note = {
      id: shortid.generate(),
      recepientName: recepientName.current.value,
       message: messageRef.current.value ,
       senderName: senderRef.current.value,
       flavourTop: color1,
       flavourMiddle: color2,
       flavourBottom: color3,
       lollyPath: shortid.generate(),
        }
        console.log("Creating Lolly:", note)
        
        await createEvent({
          variables: {
            id: note.id,
            recepientName : note.recepientName,
            message: note.message,
            senderName: note.senderName,
            flavourTop: note.flavourTop,
            flavourMiddle: note.flavourMiddle,
            flavourBottom: note.flavourBottom,
            lollyPath: note.lollyPath
          },
          refetchQueries:[{query:GET_NOTES}]
        }
        
        )
        navigate('/waitingarea');

      }

        
    return (
        <div className="container">
            <Header />
            <div className="lollyFormDiv">
            <div>
            
            <Lolly fillLollyTop={color1} fillLollyMiddle={color2} fillLollyBottom={color3} />  
            </div>
            <div className="lollyFlavourDiv">
            <label htmlFor="flavourTop" className="colorPickerLabel">
                   <input type="color" value={color1} className="colorPicker" name="flavorTop" id="flavourTop" 
                   onChange={(e)=>{
                       setColor1(e.target.value)
                   }}
                   />    
                   </label>
                   <label htmlFor="flavourTop" className="colorPickerLabel">
                   <input type="color" value={color2} className="colorPicker" name="flavorMiddle" id="flavourMiddle" 
                   onChange={(e)=>{
                    setColor2(e.target.value)
                }}/>
                   </label>
                   <label htmlFor="flavourTop" className="colorPickerLabel">
                   <input type="color" value={color3} className="colorPicker" name="flavorBottom" id="flavourBottom" 
                   onChange={(e)=>{
                    setColor3(e.target.value)
                }}

                   /> 
                   </label>

            </div>
            <div>
                   <div className="LollyFrom">
                        <label htmlFor="recipentName">To</label>
                        <input type="text" name="recipentName" id="recipentName" ref={recepientName}></input>
                        <label htmlFor="recipentName">Message</label>
                        <textarea rows="15" column="30" ref={messageRef}></textarea>
                        
                        <label htmlFor="recipentName">From</label>
                        <input type="text" name="recipentName" id="recipentName" ref={senderRef}></input>
                   </div>
                   <input type="button" value="Create" onClick={handleSubmit}/>
               </div>

            </div>
        </div>
    )
}


export default Createnew;
