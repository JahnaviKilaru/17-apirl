import React,{useState}  from "react";
// eslint-disable-next-line 
import {db} from './firebaseConfig'
// eslint-disable-next-line 
import firebase from 'firebase/compat/app'
// eslint-disable-next-line 
export default function Todo() {
	// eslint-disable-next-line 
	const [varient,setVarient]=useState("")
	async function send(){
		//console.log("backend")
		let newDate=firebase.firestore.Timestamp.now()
		//console.log("time",firebase.firestore.Timestamp.now())
		const response= await db.collection("time").add({
			date:newDate,
			todoMsg:varient
		})
		console.log(response)
		// eslint-disable-next-line
	    setVarient("")

	}

  return (
	<div>
		<input name="varient" onChange={(e)=>setVarient(e.target.value)} placeholder="please enter your details" />
		<button onClick={send}>Send</button>
	</div>
  )
}






// import React, { Component } from 'react'
// // eslint-disable-next-line
// import {db} from './firebaseConfig'
// import firebase from 'firebase/compat/app'
// export default class Todo extends Component {
// constructor(){
// 	super()
// 	this.state={
// 		varient:""
// 	}
// 	this.send=this.send.bind(this)
// }
	
// 	handleChange=(e)=>{
// 		this.setState({
// 		  	[e.target.name]:e.target.value,
			
// 		})
// 	}
//   async send(){
// 		// eslint-disable-next-line
// 		//console.log("backend")
// 		// eslint-disable-next-line 
// 		let newDate=firebase.firestore.Timestamp.now()
// 		console.log("time",firebase.firestore.Timestamp.now())
// 		const response= await db.collection("time").add({
// 			date:newDate,
// 			todoMsg:this.state.varient
// 		})
// 		console.log(response)
// 		// eslint-disable-next-line
// 		this .setState({
// 			varient:""
// 		})
		
// 	}
//   render() {
// 	return (
// 	  <div>
// 		<p><input  name="varient" onChange={this.handleChange} placeholder='Enter your details' /></p>
// 		<p><button onClick={this.send} >Send</button></p>
// 	  </div>
// 	)
//   }
// }
