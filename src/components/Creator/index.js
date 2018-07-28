import React, { Component } from "react";
import ERC721Generator from "../../../build/contracts/ERC721Generator.json";
import ERC721token from "../../../build/contracts/ERC721Token.json";
import getWeb3 from "../../utils/getWeb3";
import Boxes from "./boxes.js";
import ConfirmationPage from "./ConfirmationPage.js";
import InfoPage from "./InfoPage.js";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import ListComponent from "./listComponent.js";
import LoadingPage from "./LoadingPage.js";
import PersonalInfo from "./PersonalInfo.js";
import "../../css/oswald.css";
import "../../css/open-sans.css";
import "../../css/pure-min.css";
import "./App.css";

class Creator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idsOwned: [],
      min: 0,
      modalState: false,
      web3: null,
      flag: false,
      network: null,
      trackingNonce: 0,
      isHidden: false,
      mined: false,

      ERC721instance: null,
      waitingFlag: false,
      createdTokens: [],
      txHash: null,
      timer: null,
      addressofTokens: [{}],
      connected: false,
      newAddress: null,
      userInput: {
        input1: null,
        sym: null,
        url: null,
        input2: null,
        input3: null,
        input4: null,
        input5: null
      },

      recentlyMade: [{}]
    };
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    this.setState({
      web3Flag: true
    });
    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        });

        // Instantiate contract once web3 provided.
        this.instantiateContract();
        this.checkNetwork();
      })
      .catch(() => {
        console.log("Error finding web3.");
      });

    //checks network and sets the active network

    //sets the state to empty to fix displaying an empty object on startup
    this.setState({
      addressofTokens: [],
      recentlyMade: []
    });
  }

  checkNetwork() {
    var timer = setTimeout(() => {
      this.setState({
        web3Flag: false
      });
    }, 2000);
    console.log("checkNetwork");
    var web3 = this.state.web3;

    web3.version.getNetwork((err, netId) => {
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
            network: netId
          });
          console.log("This is the rinkeby test network.");
          this.setState({
            timer: setInterval(() => this.timer(), 800)
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
  timer() {
    //timer to pull the activate account address and update it when switches
    this.state.web3.eth.getAccounts((err, accounts) => {
      if (!err) this.state.web3.eth.defaultAccount = accounts[0];
      else console.log(err);
      if (this.state.web3.eth.defaultAccount !== this.state.account)
        this.setState({
          account: this.state.web3.eth.defaultAccount,
          createdTokens: [],
          addressofTokens: []
        });
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  instantiateContract() {
    //set up web3 and get accounts and contract instances
    const contract = require("truffle-contract");

    const ERC721 = contract(ERC721Generator);
    ERC721.setProvider(this.state.web3.currentProvider);

    // Get account
    console.log(this.state.web3.eth.accounts);

    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.web3.eth.defaultAccount = accounts[0];
      ERC721.deployed().then(instance => {
        this.setState({ ERC721instance: instance, account: accounts[0] });

        console.log(this.state.web3.eth.accounts);
        console.log(accounts[0]);
        this.recentlyMade();
      });
    });
  }

  call(x) {
    //calling to recieve data for user's tokens from smart contract
    console.log("*********Users Owned ERC721 smart contracts**************");
    this.state.ERC721instance.viewAddressArray(x, {
      from: this.state.account
    }).then(usersTokens => {
      console.log(usersTokens);
      this.fetchData(usersTokens, x);
    });
  }
  //calling to recieve data for user's tokens from smart contract
  //setting state as well and passing this data into the objects array for components
  fetchData(address, x) {
    const contract = require("truffle-contract");
    const ERC721 = contract(ERC721token);

    var data = {};
    ERC721.setProvider(this.state.web3.currentProvider);

    //this call works fine
    //smart contract returns a string
    var erc = ERC721.at(address);
    erc.name().then((res, error) => {
      if (!error) {
        {
          (data.address = address), (data.name = res);
        }
      } else {
        console.log(error);
      }
    });

    erc.tokenURI(1).then((res, error) => {
      if (!error) {
        {
          data.url = res;
        }
      } else {
        console.log(error);
      }
    });
    erc.fetchData(1).then((res, error) => {
      if (!error) {
        {
          (data.input1 = res[0]),
            (data.input2 = res[1]),
            (data.input3 = res[2]),
            (data.number = res[3].c);
        }
      } else {
        console.log(error);
      }
    });
    erc.symbol().then((res, error) => {
      if (!error) {
        data.sym = res;

        this.setState({
          addressofTokens: [...this.state.addressofTokens, data]
        });
      } else {
        console.log(error);
      }
    });
  }

  fetchRecentData(address, x) {
    const contract = require("truffle-contract");
    const ERC721 = contract(ERC721token);

    //no longer a number, now a hex, why is bignumber being called?
    var data = {};
    ERC721.setProvider(this.state.web3.currentProvider);

    //this call works fine
    //smart contract returns a string
    if (address === "0x") {
      console.log("Error with address");
      console.log("address passed into recentData is: " + address);
      return false;
    }
    var erc = ERC721.at(address);
    erc.name().then((res, error) => {
      if (!error) {
        {
          (data.address = address), (data.name = res);
        }
      } else {
        console.log(error);
      }
    });

    erc.tokenURI(1).then((res, error) => {
      if (!error) {
        {
          data.url = res;
        }
      } else {
        console.log(error);
      }
    });
    erc.fetchData(1).then((res, error) => {
      if (!error) {
        {
          (data.input1 = res[0]),
            (data.input2 = res[1]),
            (data.input3 = res[2]),
            (data.number = res[3].c);
        }
      } else {
        console.log(error);
      }
    });
    erc.symbol().then((res, error) => {
      if (!error) {
        {
          data.sym = res;
        }
        this.setState({
          recentlyMade: [...this.state.recentlyMade, data]
        });
        console.log(this.state.recentlyMade);
      } else {
        console.log(error);
      }
    });
  }

  checkUserTokens() {
    console.log("...Checking Users tokens");
    const contract = require("truffle-contract");
    const ERC721 = contract(ERC721Generator);
    ERC721.setProvider(this.state.web3.currentProvider);

    const accounts = this.state.account;
    console.log("user account is: " + this.state.web3.eth.defaultAccount);
    console.log(this.state.createdTokens);

    if (this.state.createdTokens.length >= 1) {
      this.setState({
        addressofTokens: [],
        createdTokens: []
      });
      ERC721.deployed()
        .then(instance => {
          instance
            .viewYourTokens({ from: this.state.account })
            .then(usersTokens => {
              usersTokens.map(number => {
                var i = 0;

                this.state.createdTokens.push(number.c[i]);

                i++;
              });

              this.state.createdTokens.map(id => {
                this.call(id - 1);
              });
            });
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      ERC721.deployed()
        .then(instance => {
          instance
            .viewYourTokens({ from: this.state.account })
            .then(usersTokens => {
              usersTokens.map(number => {
                var i = 0;
                this.setState({
                  createdTokens: [...this.state.createdTokens, number.c[i]]
                });

                i++;
              });

              this.state.createdTokens.map(id => {
                this.call(id - 1);
              });
            });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
  toggleHidden() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  toggleModal() {
    this.setState({
      modalState: !this.state.modalState
    });
    console.log(this.state.modalState);
  }
  toggleWaiting() {
    this.setState({
      waitingFlag: !this.state.waitingFlag
    });
  }
  handleInput(input1, url, input2, input3, input4, input5, sym) {
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
    this.toggleHidden();
  }
  create721() {
    //set state variables to local
    const { userInput } = this.state;
    const accounts = this.state.account;
    userInput.input4 = ~~userInput.input4;
    var number = userInput.input4;

    console.log("account is " + accounts);
    this.setState({ waitingFlag: true });
    try {
      this.state.ERC721instance.createERC721(
        userInput.input1,
        userInput.sym,
        userInput.url,
        userInput.input2,
        userInput.input3,
        userInput.input5,
        number,
        { from: accounts, gas: 3000000 }
      ).then((res, error) => {
        if (!error) {
          this.setState({
            mined: true,
            txHash: "https://rinkeby.etherscan.io/tx/" + res.tx,
            trackingNonce: this.state.trackingNonce + 1
          });
          this.fetchTXDetails();
        } else {
          console.log(error);
        }
      });
    } catch (error) {
      this.setState({ waitingFlag: !this.state.waitingFlag });
    }
  }
  fetchTXDetails() {
    console.log("...getting creation details");
    const contract = require("truffle-contract");
    const ERC721 = contract(ERC721Generator);
    ERC721.setProvider(this.state.web3.currentProvider);

    const accounts = this.state.account;
    ERC721.deployed().then(instance => {
      instance
        .viewYourTokens({ from: accounts })
        .then(res => {
          console.log(res);
          var result = res[res.length - 1].c;
          console.log(result);
          return result;
        })
        .then(result => {
          instance.viewAddressArray(result - 1).then(res => {
            this.setState({
              newAddress: "https://rinkeby.etherscan.io/token/" + res
            });
            console.log(this.state.newAddress);
          });
        });
    });
  }
  recentlyMade() {
    var objects = [1, 2, 3, 4, 5];
    objects.map(i => {
      this.state.ERC721instance.totalGenerated()
        .then(res => {
          console.log(
            "Loading Recently made ERC721s.... Total made: " + res.c[0]
          );

          this.setState({
            max: res.c[0]
          });
        })
        .then(() => {
          if (this.state.max === "0") {
            var random = 1;
          }
          var random = this.state.max - i;

          //var random = ~~(this.state.min + (Math.random() * (this.state.max - this.state.min)));

          this.state.ERC721instance.viewAddressArray(random).then(res => {
            console.log(res);
            this.fetchRecentData(res, random);
          });
          random--;
        });
    });
  }

  render() {
    const { userInput } = this.state;

    return (
      <div className="main" style={{ paddingTop: "2rem" }}>
        <main className="container shadowbox">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1 className="h1-center">Recently Generated Assets</h1>
              <ListComponent item={this.state.recentlyMade} />{" "}
              <hr className="hr" />
              <div className="content">
                <h1 className="h1-center">
                  How to Generate your custom ERC-721
                </h1>
                <p>
                  {" "}
                  This Dapp allows for you to create your own customized ERC-721
                  tokens.
                  <br />Once created, the account who made the ERC721 will be
                  the owner and has complete control over that ERC721. This Dapp
                  accepts 5 variables for you to set as data on your token. The
                  variables are:
                </p>

                <li>
                  <b>Name:</b> The name of your token, for example: “My
                  painting” or ”The deed to my Apartment”
                </li>
                <li>
                  <b>Symbol:</b> Enter a Symbol for your ERC721 (Example: OMG)
                </li>
                <li>
                  <b> URL:</b> For IPFS if you have it, or any other image link
                  you want to provide
                </li>
                <li>
                  <b>String Input:</b> Enter a String (any addition string you'd
                  like to add example: 'Color: Blue'){" "}
                </li>
                <li>
                  <b>String Input:</b> Enter a String (can be empty)
                </li>
                <li>
                  <b>String Input:</b> Enter a String (can be empty)
                </li>
                <li>
                  <b>Number Input:</b> Enter a Number (can be empty)
                </li>

                <br />
                <p className="has-text-success">
                  {" "}
                  Once you confirm that the data is right, MetaMask will ask for
                  a transaction to be sent. Gas price is suggested at 3000000
                  wei.{" "}
                </p>
                <AwesomeButton
                  disabled={this.state.waitingFlag}
                  action={this.checkUserTokens.bind(this)}
                  type="facebook"
                >
                  Check Tokens
                </AwesomeButton>

                <AwesomeButton
                  className="is-pulled-right"
                  type="secondary"
                  action={this.toggleModal.bind(this)}
                >
                  Help
                </AwesomeButton>
              </div>
              <div>
                <h4 className="headers">
                  {" "}
                  Your Account: {this.state.account}{" "}
                </h4>
              </div>
              <br />
              <hr className="hr" />
              <div>
                <PersonalInfo tokens={this.state.addressofTokens} />
              </div>
              <hr className="hr" />
              {this.state.modalState ? (
                <InfoPage onClick={this.toggleModal.bind(this)} />
              ) : null}
              {!this.state.isHidden ? (
                <Boxes
                  className="column"
                  network={this.state.network}
                  web3Flag={this.state.web3Flag}
                  accounts={this.state.account}
                  onClick={this.handleInput.bind(this)}
                />
              ) : null}
              {this.state.isHidden && !this.state.waitingFlag ? (
                <ConfirmationPage
                  network={this.state.network}
                  input={this.state.userInput}
                  accounts={this.state.account}
                  web3Flag={this.state.web3Flag}
                  toggle={this.toggleHidden.bind(this)}
                  create={this.create721.bind(this)}
                />
              ) : null}
              {this.state.waitingFlag ? (
                <LoadingPage
                  txHash={this.state.txHash}
                  mined={this.state.mined}
                  flag={this.state.flag}
                  account={this.state.account}
                  web3Flag={this.state.web3Flag}
                  newAddress={this.state.newAddress}
                  onClick={this.toggleWaiting.bind(this)}
                />
              ) : null}
            </div>
          </div>
        </main>
        <div className="content padding" />
      </div>
    );
  }
}

export default Creator;
