# Mintable 
Mintable is a DApp on the Ethereum Blockchaian that allows for you to create, and manage ERC721s.


#Mintable beta is live on the test network, visit [Mintable.app](http://mintable.app)
If you want to run it locally, clone, `npm install`, then `npm run start` no need to migrate or compile with truffle.

-  	What does your project do?

  - Mintable is a dapp that allows for people to create ERC721 tokens without needing programming knowledge. The dapp will let anyone set the metadata, and information of a ERC721 standard contract. A contract is then created on the blockchain and the user who sent the transaction is the owner. Allowing for anyone to make cards/ERC721s/collectibles/anything.

-  	How to set it up and use the Rinkeby Test Network

  `mkdir mintable`
  
  `cd mintable`
  
  `git clone https://github.com/VexyCats/Final_Mintable.git`
  
  `npm install`
   
  `npm run start`
  
  Localhost should open in the browser automatically, make sure metamask is on Rinkeby test network. 
  
  
■  	Run a local development server

    Run ganache in the background
    
    `truffle compile`
    
    `truffle migrate`
    
    `truffle test`
     
●  	Smart Contract code should be commented according to the specs in the documentation

    - [X] Done
    

 
●  	Create at least 5 tests for each smart contract

  - [X] Done
  
- 	Write a sentence or two explaining what the tests are covering, and explain why you wrote those tests

 
●  	A development server to serve the front end interface of the application
  - [X] Done also on [Mintable.app](http://mintable.app)
 
●  	A document called design_pattern_desicions.md that explains why you chose to use the design patterns that you did.
  see Design_Patterns.md


●  	A document called avoiding_common_attacks.md that explains what measures you took to ensure that your contracts are not susceptible to common attacks. (Module 9 Lesson 3)
  - see avoiding_common_attacks.md


 
●  	Implement a library or an EthPM package in your project
  - [X] Done using SafeMath, OpenZeppelin Contracts, Melon Libraries

○  	If your project does not require a library or an EthPM package, demonstrate how you would do that in a contract called LibraryDemo.sol
  
We ask that you develop your application and run the other projects during evaluation in a VirtualBox VM running Ubuntu 16.04 to reduce the chances of run time environment variables.
 
Requirements
  - [X] 	User Interface Requirements:
  - [X] 	Run the app on a dev server locally for testing/grading
  - [X] 	You should be able to visit a URL and interact with the application
  - [X] 	App recognizes current account
  - [X]	Sign transactions using MetaMask
  - [X] Contract state is updated
  - [X]	Update reflected in UI
 
●  	Test Requirements:
  - [_]  	Write 5 tests for each contract you wrote
  - [X]  	Solidity or JavaScript
○  	Explain why you wrote those tests
○  	Tests run with truffle test
 
  - [X]  	Design Pattern Requirements:
  - [X]	Implement emergency stop
  - [X] What other design patterns have you used / not used?
  - [X]	Why did you choose the patterns that you did?
  - [X]	Why not others?
 
  - [X] 	Security Tools / Common Attacks:
  - [X] 	Explain what measures you’ve taken to ensure that your contracts are not susceptible to common attacks
 
  - [X]	  Use a library




