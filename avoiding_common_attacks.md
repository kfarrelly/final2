# Explain what measures you’ve taken to ensure that your contracts are not susceptible to common attacks


When creating this dapp, security was on the forefront of my mind. Knowing that a factory contract, or generator, needs to be secure in its implemwentation, I knew security was important. 
With that in mind, I made quite a few choices to protect the smart contract in multiple ways, and below are a few of the attack vectors I have addressed with my design. 

First and foremost, the event firing, creation of tokens, and handling of error is all done via design of the `createERC721()` function. The first act is the contract creation that if fails, will stop before anything is done. This protects against re-entrancy attacks. 

Using safemath Libraries, as well as modifiers, and open zeppelin standards protects against the following: 
 - Safemath helps with overflow issues. Specifically I could call an over with my front end very easily, and that was a bug I found very early. Therefore safemath was a must. 
 - Open Zeppelin due to how secure its known to be. 
 - Pre and post variant modifiers for later in the design when  the generator has more functionality. 
 
 Adding a mint() function to the ERC721 from zeppelin for the owner of the contract which wasn't included. This was done via only calling the standard `_mint()` that is only internal. That way I didn't need to trust my own code to mint a new token, but instead rely only on the trusted zeppelin code. 
 
