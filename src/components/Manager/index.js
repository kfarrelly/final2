import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import getWeb3 from "../../utils/getWeb3";
import ERC721Token from "../../../build/contracts/ERC721Token.json";
import EditPage from "./editPage.js";
import Input from "./input.js";
import PreMint from "./Mint.js";
import Mint from "../Creator/ConfirmationPage.js";
import Burn from "./Burn.js";
import Transfer from "./Transfer.js";
import ConfirmationPage from "./ConfirmationPage.js";
import LoadingPage from "./loadingPage.js";

class Manager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasAddress: false,
      isRealAddress: false,
      currentToken: {},
      confirmation: false,
      defaultSrc:
        "https://pbs.twimg.com/profile_images/941686687805132800/sHttVPav_400x400.png"
    };
  }
  async componentDidMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    const contract = require("truffle-contract");
    const ERC721 = contract(ERC721Token);
    this.setState({
      erc721: ERC721
    });

    //checks network and sets the active network
    //checks network and sets the active network
  }
  componentDidCatch() {
    console.log("ERROR ERROR ERROR MAY DAY");
    return <div>ERROR - Reload please</div>;
  }

  checkNetwork() {
    var timer = setTimeout(() => {
      this.setState({
        web3Flag: false
      });
    }, 2000);
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.web3.defaultAccount = accounts[0];
      this.setState({
        account: accounts[0],
        locked: false
      });

      console.log(error);

      console.log(this.state.web3.eth.accounts);
      console.log(accounts[0]);
    });
    console.log("checkNetwork");
    //var web3 = window.web3

    this.state.web3.version.getNetwork((err, netId) => {
      console.log(netId);
      switch (netId) {
        case "1":
          this.setState({
            network: netId
          });
          console.log("This is mainnet");
          break;
        case "2":
          this.setState({
            network: netId
          });
          console.log("This is the deprecated Morden test network.");
          break;
        case "3":
          this.setState({
            network: netId
          });
          console.log("This is the ropsten test network.");
          break;
        case "5777":
          this.setState({
            network: netId,
            timer: setInterval(() => this.timer(), 800)
          });

          break;
        case "4":
          this.setState({
            network: netId,
            timer: setInterval(() => this.timer(), 800)
          });
          console.log("This is the rinkeby test network.");
          this.setState({
            flag: true
          });
          break;
        default:
          this.setState({
            network: "unknown"
          });
          console.log("This is an unknown network.");
      }
    });
  }
  async componentWillMount() {
    console.log(this.props.match.params.address);
    if (this.props.match.params.address !== undefined) this.updateAddress();
    if (this.props.match.params.tokenID !== undefined) this.checktokenID();

    if (this.state.web3 === undefined) {
      this.setState({
        web3Flag: true
      });
      console.log(
        "Running web3 which should only run once...web3 is: " + this.state.web3
      );
      let results = await getWeb3;
      this.setState({
        web3: results.web3
      });
    }
    if (this.state.web3 !== undefined) this.checkNetwork();
    // Instantiate contract once web3 provided.
    if (this.state.hasAddress && this.state.hasID === undefined) {
      this.checkAddress(null);
    }
    if (this.state.hasAddress && this.state.hasID) {
      this.checkAddress(this.props.match.params.tokenID);
    }
  }
  checktokenID() {
    console.log(
      "Updating address on state because tokenID passed in url....token ID passed is: " +
        this.props.match.params.tokenID
    );
    if (this.props.match.params.tokenID)
      this.setState({
        hasID: true
      });
  }
  updateAddress() {
    console.log("Updating address on state because url passed in address");
    this.setState({
      addressOfToken: this.props.match.params.address,
      hasAddress: true,
      choice: 0
    });

    //Load while this is confirmed to be legit token address
    //then do the next thing
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
    clearTimeout(this.state.errTimer);
  }

  defaultSrc() {
    return this.state.defaultSrc;
  }

  timer() {
    console.log("Checking for web3 accounts");
    //timer to pull the activate account address and update it when switches
    this.state.web3.eth.getAccounts((err, accounts) => {
      if (!err) this.state.web3.eth.defaultAccount = accounts[0];
      else console.log(err);
      if (this.state.web3.eth.defaultAccount !== this.state.account)
        this.setState({
          account: this.state.web3.eth.defaultAccount
        });
    });
  }
  errTimer(err) {
    alert(err);
    return this.props.history.push(`/Manager`);
  }

  async checkAddress(id) {
    if (id === null) id = 1;

    this.setState({
      errTimer: setTimeout(() => this.errTimer(), 5000)
    });

    var tokenObj = {};
    const contract = require("truffle-contract");
    const ERC721 = contract(ERC721Token);
    ERC721.setProvider(this.state.web3.currentProvider);
    let address = this.props.match.params.address;
    console.log(address);

    try {
      let token = await ERC721.at(address);
      console.log(token);

      console.log("set address to: " + address);
      console.log("id for token is: " + id);
      clearTimeout(this.state.errTimer);
      let total = await token.totalMade
        .call({ from: this.state.account })
        .then(res => {
          if (id <= 0 || id > res) {
            return this.errTimer(
              "logic check failed, token id is not within bounds"
            );
          }
          tokenObj.totalSupply = res.c[0];
        });
      this.setState({
        currentToken: [(address: address)]
      });
      token.name.call({ from: this.state.account }).then(res => {
        tokenObj.name = res;
      });
      token.symbol.call({ from: this.state.account }).then(res => {
        tokenObj.symbol = res;
      });
      let url = await token.tokenURI.call(id, { from: this.state.account });

      let data = await token.fetchData.call(id, { from: this.state.account });

      tokenObj.input1 = data[0];
      tokenObj.input2 = data[1];
      tokenObj.input3 = data[2];
      tokenObj.int = data[3].c[0];
      tokenObj.url = url;
    } catch (error) {
      console.log(error);
      alert("Error in fetching Data from contract... error: " + error);
      this.props.history.push(`/Manager`);
      clearTimeout(this.state.errTimer);
    }
    console.log(
      "Pulled data, setting to state... data: " +
        tokenObj.name +
        tokenObj.symbol
    );
    console.log(tokenObj.url);
    this.setState({
      currentToken: tokenObj,
      isRealAddress: true
    });
  }

  toggleMint() {
    this.setState({
      confirmationMint: false
    });
    console.log("toggle mint");
    if (this.state.choice === 0) {
      this.setState({
        choice: 1
      });
    }
    if (this.state.choice === 1) {
      this.setState({
        choice: 0
      });
    }
  }
  toggleConfirmationMint() {
    this.toggleMint();
    this.setState({
      confirmationMint: !this.state.confirmationMint
    });
  }
  toggleTransfer() {
    console.log("toggle Transfer");
    if (this.state.choice === 0) {
      this.setState({
        choice: 3
      });
    }
    if (this.state.choice === 3) {
      this.setState({
        choice: 0
      });
    }
  }
  tabOnClick(e, a) {
    //E is the id of the token for the button clicked
    //a is the address of the token they were on
    console.log("User pressed a tab on the side, the tab id was: " + e);
    this.props.history.push(`/manager/${a}/${e}`);
  }

  mint(input1, url, input2, input3, input4, input5, sym) {
    console.log("RUNNING MINT from button submit");

    this.setState({
      userInput: {
        ...this.state.userInput,
        input1: input1,
        url: url,
        input2: input2,
        input3: input3,
        input4: input4,
        input5: input5,
        sym: sym
      }
    });
    this.setState({
      confirmationMint: true
    });
  }

  sendMint() {
    console.log("send mint function");
  }
  burn() {}
  async update() {
    var tokenObj = {};
    const contract = require("truffle-contract");
    const ERC721 = contract(ERC721Token);
    ERC721.setProvider(this.state.web3.currentProvider);
    let address = this.props.match.params.address;

    try {
      let token = await ERC721.at(address);
      console.log(token);
      this.setState({
        currentToken: [(address: address)]
      });
      console.log("set address to: " + address);
      token.name.call({ from: this.state.account }).then(res => {
        tokenObj.name = res;
      });
      token.symbol.call({ from: this.state.account }).then(res => {
        tokenObj.symbol = res;
      });
      let url = await token.tokenURI.call(1, { from: this.state.account });
      let data = await token.fetchData.call(1, { from: this.state.account });

      let total = await token.totalMade
        .call({ from: this.state.account })
        .then(res => {
          tokenObj.totalSupply = res.c[0];
        });
      tokenObj.input1 = data[0];
      tokenObj.input2 = data[1];
      tokenObj.input3 = data[2];
      tokenObj.int = data[3].c[0];
      tokenObj.url = url;
    } catch (error) {
      console.log(error);
      alert("Error in fetching Data from contract... error: " + error);
      this.props.history.push(`/Manager`);
    }
    console.log(
      "Pulled data, setting to state... data: " + tokenObj.name + tokenObj.sym
    );
    console.log(tokenObj.url);
    this.setState({
      currentToken: tokenObj
    });
  }
  transfer(address, id) {
    console.log("send transfer clicked");

    this.setState({
      confirmation: !this.state.confirmation,
      confirmTemp: [address, id]
    });
  }
  toggleWaiting() {
    this.setState({
      loading: !this.state.loading
    });
  }
  sendTransfer() {
    this.setState({
      confirmation: !this.state.confirmation,
      loading: true
    });
    const { confirmTemp } = this.state;
    const { erc721 } = this.state;
    console.log(" running transfer ");
    let address = confirmTemp[0];
    let id = confirmTemp[1];

    erc721.setProvider(this.state.web3.currentProvider);
    console.log(erc721);
    let tempAddress = this.state.addressOfToken;
    console.log(tempAddress);

    try {
      erc721.at(tempAddress).then((token, err) => {
        console.log(token);
        token
          .transferFrom(this.state.account, address, id, {
            from: this.state.account
          })
          .then((res, err) => {
            if (!err)
              this.setState({
                mined: true,
                txHash: res.tx
              });
            console.log(res.tx)(err);
            console.log(err);
            this.setState({
              mined: null
            });
          });
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { currentToken } = this.state;
    const url =
      "https://www.iconsdb.com/icons/preview/green/arrow-right-4-xxl.png";
    const accPic =
      "http://www.dbstech.com/blog/wp-content/themes/Caulk/timthumb/timthumb.php?src=http://www.dbstech.com/blog/wp-content/uploads/2010/06/Crystal_Clear_app_Login_Manager.png&h=160&w=160&zc=1%27);";

    return (
      <Router>
        <div className="is-fullscreen" style={{ paddingTop: "5rem" }}>
          {!this.state.hasAddress ? (
            <Input
              {...this.props}
              accounts={this.state.account}
              web3Flag={this.state.web3Flag}
              address={this.state.addressOfToken}
              network={this.state.network}
            />
          ) : null}
          {this.state.hasAddress ? (
            <EditPage
              isRealAddress={this.state.isRealAddress}
              token={this.state.currentToken}
              address={this.state.addressOfToken}
              accounts={this.state.account}
              owner={this.state.account}
              network={this.state.network}
              tabOnClick={this.tabOnClick.bind(this)}
              mint={this.toggleMint.bind(this)}
              transfer={this.toggleTransfer.bind(this)}
            />
          ) : null}
          {this.state.choice === 1 && this.state.confirmationMint === false ? (
            <PreMint
              token={this.state.currentToken}
              accounts={this.state.account}
              address={this.state.addressOfToken}
              owner={this.state.account}
              network={this.state.network}
              transfer={this.transfer.bind(this)}
              onClick={this.toggleMint.bind(this)}
              onClickSubmit={this.mint.bind(this)}
              confirmationMint={this.state.confirmationMint}
            />
          ) : null}
          {this.state.choice === 1 && this.state.confirmationMint === true ? (
            <Mint
              input={this.state.userInput}
              toggle={this.toggleConfirmationMint.bind(this)}
              accounts={this.state.account}
              network={this.state.network}
              create={this.sendMint.bind(this)}
            />
          ) : null}
          {this.state.choice === 2 ? (
            <Burn onClick={this.mintOff.bind(this)} />
          ) : null}
          {this.state.choice === 3 ? (
            <Transfer
              token={this.state.currentToken}
              accounts={this.state.account}
              address={this.state.addressOfToken}
              owner={this.state.account}
              network={this.state.network}
              onClick={this.toggleTransfer.bind(this)}
              onClickSubmit={this.transfer.bind(this)}
            />
          ) : null}
          {this.state.confirmation ? (
            <ConfirmationPage
              accounts={this.state.account}
              address={this.state.addressOfToken}
              owner={this.state.account}
              token={this.state.currentToken}
              network={this.state.network}
              onClick={this.transfer.bind(this)}
              txDetails={this.state.confirmTemp}
              url={url}
              pic={accPic}
              default={this.defaultSrc.bind(this)}
              onClickSubmit={this.sendTransfer.bind(this)}
            />
          ) : null}
          {this.state.loading ? (
            <LoadingPage
              accounts={this.state.account}
              txHash={this.state.txHash}
              network={this.state.network}
              address={this.state.addressOfToken}
              mined={this.state.mined}
              owner={this.state.account}
              token={this.state.currentToken}
              onClick={this.toggleWaiting.bind(this)}
            />
          ) : null}
        </div>
      </Router>
    );
  }
}

export default Manager;
