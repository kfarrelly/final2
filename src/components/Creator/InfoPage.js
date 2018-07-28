import React, { Component } from 'react'
import Collapsible from 'react-collapsible';
import '../../../node_modules/bulma/css/bulma.css'

class InfoPage extends React.Component {
constructor(props) {
    super(props);
    }

render(){  

return (

 <div className="modal is-active">
      <div className="modal-background" onClick={this.props.onClick} />
      <div className="modal-card border1">
        <header className="modal-card-head">
          <p className="modal-card-title"></p>
          <button className="delete" onClick={this.props.onClick} />
        </header>
        <section className="modal-card-body">
          <div className="content">
     
         

            <h2 className=" h1-center">What is an ERC-721?</h2>
            <p className="h1-center">ERC-721 is a free, open standard that describes how to build
             non-fungible or unique tokens on the Ethereum blockchain. While most tokens are fungible
              (every token is the same as every other token), ERC-721 tokens are all unique.&nbsp;<br />
              <br />Think of them like rare, one-of-a-kind collectables. </p>
            
         <table>
                  <thead>
                    <tr>
                    <td>
                    <p className="title is-4"> How do I use this dApp?"</p>
            
            <li>First make sure you have MetaMask installed and on the Rinkeby testnetwork.</li>
            <li>Then make sure you have test ether in your account. You can get some from the 
            <a href="https://faucet.rinkeby.io/"> Rinkeby Faucet</a>. </li>
            <li>Then once the dApp shows you input fields, input the data you want on your ERC721 token, like 
            the name you want to use, the symbol for your token, a picture URL or IPFS url.</li>
            <li> After you confirm the details are correct a loading page will open and MetaMask will ask you to send a transaction that creates your new token</li>
            <li> Do not close the loading page until you have copied the details down, because it will not be displayed again!</li>
            <li> Copy the address of the ERC721 contract and the contract ABI, this will allow you to edit, update, or transfer your ERC721 as the owner. <br/>
             <strong className="has-text-danger"> without the contract ABI and address, you will not be able to use/edit/move your token!</strong></li>
          
          </td>
                     </tr>
                  </thead>
                  <tbody> 
                  <tr>
                      <td>
                      <Collapsible trigger="How can I make multiple tokens?">
                        <p> If you want to make multiple assets for one contract such as: One contract for a set of trading cards and you want to make 1000 trading cards that
            are each different, yet on the same contract that can be sold or used...Then to do this, set your information below as the name of the Trading cards, such as 
            "Pokemon" (not "pikachu" you will set "pikachu" afterwards individually). Once the contract is created, you will need the address and ABI code. You can 
            interact with the contract once its mined and on the network by using the ABI code and the address. To mint() a new card/asset you'd call it with the information 
            for the card, just as this app does.</p>
         
                         </Collapsible></td>
                     
                    </tr>
                    <tr>
                      <td><Collapsible trigger="What is MetaMask?">
           
            <p> <a href="https://metamask.io/"> MetaMask </a>is a bridge that allows you to visit the distributed web of tomorrow in your browser today. It allows you to run Ethereum dApps right in your browser without running a full Ethereum node.

MetaMask includes a secure identity vault, providing a user interface to manage your identities on different sites and sign blockchain transactions.

You can install the <a href="https://metamask.io/"> MetaMask </a> add-on in Chrome, Firefox, Opera, and the new Brave browser.</p>
          </Collapsible></td>
                     
                    </tr>
                    <tr>
                      <td ><Collapsible trigger="What ‘MetaData’ can I store on my token? ">
           
            <p>You can store any string, or number, or url as metadata in your token.
             If you want  your token to verify the authcenticty of a painting, you can 
             upload proof as a picture url to the token. You can even use a URL to a QR code. 
             </p>
             <p> Or if you are making a trading card, you can put the stats/data of the card as the data. Its completely up to you! </p>
          </Collapsible></td>
                  
                    </tr>
                    <tr>
                      <td><Collapsible trigger="I'm getting an error/something isn't working?">
          
            <p>Sorry! Try reloading the page and restarting. If that doesn't help, open up the 
            dev console by pressing F12 and look at the error message.<strong className="has-text-danger"> Make sure your metamask is unlocked and on the rinekby test network.</strong>
            </p>
          </Collapsible>
        </td>
                  
                    </tr>

                   
  
                  </tbody>
                </table>
         
          
              
           
           
            
      
          </div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={this.props.onClick}>Cancel</a>
        </footer>
      </div>
    </div>

)
}

}
export default InfoPage
