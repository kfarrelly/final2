![Mintable.app](https://github.com/VexyCats/final2/blob/master/src/images/mintable.jpg?raw=true)

Mintable is a DApp on the Ethereum Blockchaian that allows for you to create, and manage ERC721s.


# Mintable beta is live on the test network, visit [Mintable.app](http://mintable.app)
If you want to run it locally, clone, `npm install`, then `npm run start` no need to migrate or compile with truffle.

-  	What does your project do?

  - Mintable is a dapp that allows for people to create ERC721 tokens without needing programming knowledge. The dapp will let anyone set the metadata, and information of a ERC721 standard contract. A contract is then created on the blockchain and the user who sent the transaction is the owner. Allowing for anyone to make cards/ERC721s/collectibles/anything.
  
  
  
  ---
  
  
  **Everything below is for Consensys grading**

-  	How to set it up and use the Rinkeby Test Network **if you don't want to use mintable.app**

  `mkdir mintable`
  
  `cd mintable`
  
  `git clone https://github.com/VexyCats/Final_Mintable.git`
  
  `npm install`
   
  `npm run start`
  
  Localhost should open in the browser automatically, make sure metamask is on Rinkeby test network. 
  
  
■  	Run a local development server **if you migrate on a testnetwork or live network you may run into gas issues**

    Run ganache in the background
    
    `truffle compile`
    
    `truffle migrate`
    
    `truffle test`
     
■   	Smart Contract code should be commented according to the specs in the documentation

  - [X] Done
    

 
■  	Create at least 5 tests for each smart contract

  - [X] Done
  
Test 1: Check to see if the owner is correct and that the total generated is zero. This to my constructor values and need to be correct.
Test 2: Confirm that the owner can turn off and on the contract. 
Test 3: Check that a creation works properly by creating a contract and checking that the user has one contract created.
Test 4: Pulls the address for the contract just created, checks that the name is correct. 
Test 5: Checks that alice can transfer tokens to bob and the transaction is successful. Event is also fired. 

 
■  	A development server to serve the front end interface of the application
  - [X] Done. Use npm run start also on [Mintable.app](http://mintable.app)
 
■   	A document called design_pattern_desicions.md that explains why you chose to use the design patterns that you did.
  see Design_Patterns.md


■  	A document called avoiding_common_attacks.md that explains what measures you took to ensure that your contracts are not susceptible to common attacks. (Module 9 Lesson 3)

  - see avoiding_common_attacks.md


 
■   	Implement a library or an EthPM package in your project

  - [X] Done using **SafeMath, OpenZeppelin Contracts, Melon Libraries**


  


---



 
# Requirements
  - [X] 	User Interface Requirements:
  - [X] 	Run the app on a dev server locally for testing/grading
  - [X] 	You should be able to visit a URL and interact with the application
  - [X] 	App recognizes current account
  - [X]	Sign transactions using MetaMask
  - [X] Contract state is updated
  - [X]	Update reflected in UI
  Design Pattern Requirements:
  - [X]	Implement emergency stop
  - [X] What other design patterns have you used / not used?
  - [X]	Why did you choose the patterns that you did?
  - [X]	Why not others? 
  - [X] 	Security Tools / Common Attacks:
  - [X] 	Explain what measures you’ve taken to ensure that your contracts are not susceptible to common attacks
  - [X]	  Use a library
# Test Requirements:
  - [X]  	Write 5 tests for each contract you wrote
  - [X]  	Solidity or JavaScript
  - [X] 	Explain why you wrote those tests
  - [X] 	Tests run with truffle test
 





