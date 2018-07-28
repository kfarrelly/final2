import React, { Component } from 'react'
import '../../../node_modules/bulma/css/bulma.css'
import Web3HOC from '../Creator/web3HOC.js'




		



class Mint extends Component {
  constructor(props) {
    super(props)

   
} 


		handleSubmit = (e) => {
			e.preventDefault();
			const input1 = e.target.input1.value;
			const url = e.target.url.value;
			const input2 = e.target.input2.value;
			const input3 = e.target.input3.value;
			const input4 = e.target.input4.value;
			const input5 = e.target.input5.value;
			const sym = e.target.sym.value;
			this.props.onClickSubmit(input1,url, input2, input3, input4, input5, sym);
		}



	
render(){
 
console.log(this.props.confirmationMint)

	return (
<div className="modal is-active">
      <div className="modal-background" onClick={this.props.onClick} />
      <div className="modal-card">
       <section className="modal-card-body">
          <div className="content">
     		<h1 className="title h1-center"> Mint Tokens </h1>
     		  <p className="has-text-danger h1-center"> Requires that you are the owner of the smart contract, it will fail if you  are not </p>
     				<div>
	
		 <form onSubmit={this.handleSubmit}>
        <label htmlFor="Name">Enter Name of Your ERC721 (example: 'My Painting')</label>
        <input className="input is-primary" id="input1" name="input1" type="text" required="true" />

        <label htmlFor="Name">Enter a Symbol for your ERC721 (Example: OMG)</label>
        <input className="input is-primary" id="sym" name="sym" type="text" required="true" />

         <label htmlFor="URL">Enter a IPFS URL if you have one (can be url to imgur.com image)</label>
        <input className="input is-primary" id="url" name="url" type="url" required="true" />


        <label htmlFor="string">Enter a String (any addition string you'd like to add example: 'Color: Blue') </label>
        <input className="input is-primary" id="input2" name="input2" type="text" required="true" />

        <label htmlFor="input3">Enter a String (can be empty)</label>
        <input className="input is-primary" id="input3" name="input3" type="text" />
         
        <label htmlFor="input4">Enter a Number (can be empty)</label>
        <input className="input is-primary" id="input4" name="input4" type="number" />

		 <label htmlFor="input5">Enter a String (can be empty)</label>
        <input className="input is-primary" id="input5" name="input5" type="text" />

<div className="h1-center">
        <button className="button is-info">Save and continue</button>
        </div>
      </form>
      </div>
      
          </div>
        </section>
        <footer className="modal-card-foot is-clearfix">
          <a className="button" onClick={this.props.onClick}>Cancel</a>
        </footer>
      </div>
    </div>
		) 
		
 

		
    
			
	
	
}
}


export default Web3HOC(Mint)