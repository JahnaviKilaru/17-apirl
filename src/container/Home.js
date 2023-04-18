import {useState,useEffect} from 'react'
import {db} from './firebaseConfig'
function Home(){
// eslint-disable-next-line
  const [list,setList]=useState([])
  useEffect(()=>{
    retrieve()
  },[])
  async function retrieve(){
    console.log("from home using useeffect")
    const dataRef=db.collection("time").orderBy("date","asc")
    const snapShot=await dataRef.get()
    console.log("snap data",snapShot)
    setList(snapShot.docs.map((doc)=>(
      {
        date:doc.data().date.toDate().toDateString(),
        message:doc.data().todoMsg
      }
    )))

  }
  

  return(
    <div>
       {console.log(list)} 
       list
      {
        list.map((e)=>(
        <div key={e.Message}>
          <p>{e.message}</p>
          <p>{e.date}</p>
        </div>
        ))
      }
            
    </div>
  )
}

export default Home
// import React, { Component } from 'react'


// export default class Home extends Component {
//   state={
//     details:[]
//   }
 
//   render() {
//     return (
//       <div>
//         You are logged in Successfully
//       </div>
//     )
//   }
// }
