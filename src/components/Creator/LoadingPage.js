import React, { Component } from 'react'
import MDSpinner from "react-md-spinner";
import InfoPage from './InfoPage.js'
import Collapsible from 'react-collapsible';
import {CopyToClipboard} from 'react-copy-to-clipboard';


import '../../../node_modules/bulma/css/bulma.css'
import myFile from './abi.json'
var prettifyJson = JSON.stringify(myFile, null, 4);

class LoadingPage extends React.Component {
constructor(props) {
    super(props);
    }

render(){
console.log(this.props)


return (
<div className="modal is-active">
      <div className="modal-background" onClick={this.props.onClick} />
      <div className="modal-card ">
        <header className="modal-card-head">
          <p className="modal-card-title">Mining your transaction....</p>
          
        </header>
        <section className="modal-card-body">
          <div className="content">
          
          
          { !this.props.mined
            ? (
             <section className="modal-card-body">
              <div className="content">
          
            <div className="h1-center padding">
            <h2>please do not close the loading page until your transaction is mined!</h2>
            <p> if you rejected the metamask transaction, click restart </p>
            <MDSpinner  size={78} /> 
            </div> 
             </div>
            </section>
            )
            :(
            <section className="modal-card-body">
              <div className="content">
             <div>
              <h2>Transaction Mined!!</h2>
   
              </div>
                <table>
                  <thead>
                    <tr>
                      <th>Details</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><p > View your Transaction here: {this.props.txHash}</p></td>
                     
                    </tr>
                    <tr>
                      <td>Your ERC721 contract's address: {this.props.newAddress}</td>
                  
                    </tr>
                    <tr>
                      <td>Owner: {this.props.account}</td>
                  
                    </tr>
                   
  
                  </tbody>
                </table>
                <div>
              <div className="panel-block is-active">
    <span className="icon has-text-success">
 <i className="far fa-hand-pointer"></i>

</span>
<Collapsible trigger="Contract ABI code:">
 <CopyToClipboard text={prettifyJson}
          onCopy={() => this.setState({copied: true})}>
         <a className="button is-primary h1-center">Copy to Clipboard </a>
        </CopyToClipboard>


        <pre>{ prettifyJson }</pre>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>
</div>

    </div>
              </div>
              </section>
            )
          }
          

          
               

          </div>
        </section>
        
        <footer className="modal-card-foot">
         
          <div className="dropdown is-hoverable is-up">
  <div className="dropdown-trigger">
    <button className="button is-danger" onClick={this.props.onClick} aria-haspopup="true" aria-controls="dropdown-menu4">
      <span>Restart</span>
      
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu4" role="menu">
    <div className="dropdown-content">
      <div className="dropdown-item">
        <p>If you rejected the transaction, click here to restart. If you close this you won't see your results again!</p>
      </div>
    </div>
  </div>
</div>
        </footer>
      </div>
    </div>
)
}

}
export default LoadingPage
