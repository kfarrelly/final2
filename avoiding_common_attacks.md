#Explain what measures you’ve taken to ensure that your contracts are not susceptible to common attacks


When creating this dapp, security was on the forefront of my mind. Knowing that a factory contract, or generator, needs to be secure in its implemwentation, I knew security was important. 
With that in mind, I made quite a few choices to protect the smart contract in multiple ways, and below are a few of the attack vectors I have addressed with my design. 

First and foremost, the main Generator contracts needs to be able to generate ERC-721s reliably, and securely. This means I need to use 
 a secure standard for my ERC721 standard. Using OpenZeppelin was a no-brainer, their contracts are the industry standard. So I went
 with zeppelin for the 721 contract standards and the erc 20 standards as well. Simply importing them was too easy to resist. After that
 was handled, the only issue was ensuring the generator was secure. 
 
 Secondly, the generator needed to properly interact with another contract so as to not create any issues for the users. One of the ways
 I choose to secure the Generator was using safemath library. Zeppelin uses these libraries as well, but I specifically ran into an overflow issue by having my front end send malicious 
 code to the contract. Therefore safemath was very important in reverting transactions that could be malicious in nature and easy to deploy. 
 
 Also, standard ownership libraries and a variant conditional library was used to allow for modifiers of any nature. In reality, the smart contract
  is only version 0.5 and will be updated in the coming months with more abilities,  so those conditionals will really help securing it in the future. 
  
 I'll  be adding version control and the ability to update the contract, but for now, I do not know the design structure of the finished product, so I can't
 put up an upgradeable manager yet, although its on the way! 
 
 The event firing, creation of tokens, and handling of error is all done via design of the `createERC721()` function. The first act is the contract creation that if fails, will stop before anything is done. 
 Secondly, the data is stored to prevent against reentrancy, and finally, returning the contract address as well. 
