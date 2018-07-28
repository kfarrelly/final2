import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './inputPage.css'
import '../../../node_modules/bulma/css/bulma.css'
import Web3HOC from '../Creator/web3HOC.js'



class Input extends Component {
  constructor(props){
      super(props);
      console.log(this.props)

  }





handleSubmit = (e) => {
  e.preventDefault();
  console.log("button pushed")

  let address = e.target.address.value

  this.props.history.push(`/manager/${address}`)
  console.log(address)
  
}

render(){


  return ( 
    <div className="hero  is-large is-bold">

    <div className="box">
    
      <h1 className="title has-text-centered has-text-black">
        Enter the address of your smart contract. Must be an ERC721 Smart contract generated on our site.
      </h1>
    <div className="field">
    <form onSubmit={this.handleSubmit.bind(this)}>
    <div className="control container title">
    <input className="input is-large" type="text" name="address" placeholder="Enter the Address of your ERC721 Smart contract" ></input>
  </div>
  <div className="container h1-center">
   
  <button  className="button has-text-centered is-success is-large is-vcentered"> Look up ERC721... </button>
  </div>
  </form>

</div>
</div>
</div>

)}


}
export default Web3HOC(Input)
