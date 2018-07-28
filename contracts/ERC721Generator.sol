pragma solidity ^0.4.24;

//import zeppelin standard for erc721
import "./ERC721Token.sol";


    

/**
 * @title Full ERC721 Token Generator
 * This smart contract allows you to create an ERC721 of your own, very easily! 
 * How it works
 * - Call function createERC721 and pass in the metadata for your token
 * - It can take multiple params
 * - You can then call the public viewYourTokens with your address to see the ID's of your new ERC721s.
 * - Then you can call viewAddressArray with your token ID to see the address of your new token.
 *
 *
 *
 *
 *
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
/// @title Desing by contract (Hoare logic)
/// @author Melonport AG <team@melonport.com>
/// @notice Gives deriving contracts design by contract modifiers


contract ERC721Generator{
    
   /**
   * @dev Checks for a pre-condition
   * @param condition bool the condition you want to be tested
   */
 // PRE, POST CONDITIONS
 modifier pre_cond(bool condition) {
        require(condition);
        _;
    }
   /**
   * @dev Checks for a post-condition
   * @param condition bool the condition you want to be tested
   */
    modifier post_cond(bool condition) {
        _;
        assert(condition);
    }




    bool public isOnline;
    using SafeMath for uint256;
    using SafeMath for uint;
    address public owner;
    //public array of all tokens made by this contract
    address[] public tokensArray;
    //takes an id, returns the position in the tokensArray for that token
    mapping (uint256 => uint256 ) internal posInTokensArray;
    //tracking total contracts created
    uint256 public totalGenerated;
    //takes an address and returns an array of the token IDs in which they own
    mapping(address => uint256[]) public ownedTokens;
    
    //event
    
    event erc721Created(address indexed _sender, address indexed _newContract);

    
     /**
   * @dev sets totalGenerated to 0, sets owner, sets isOnline to true
   *  
   */
    constructor() public{
        isOnline = true;
        owner = msg.sender;
        totalGenerated = 0;
    }
    
    
      /**
   *
   * @dev creates a new erc721 contracts
   * @param _name name of contract
   * @param _symbol symbol for contract
   * @param _url ipfs or any other url, image preferred 
   * @param _input1 any user input
   * @param _input2 any user input
   * @param _input3 any user input
   * @param  _int any user input
   * @return address of the newly created contract
   */
    function createERC721(string _name, string _symbol, string _url, string _input1, string _input2, string _input3,uint256 _int) 
    public  pre_cond(isOnline)
    returns(address _newContract)
    {
        ERC721Token erc721 = new ERC721Token(_name, _symbol, _url, _input1, _input2, _input3, _int, msg.sender);
        tokensArray.push(erc721); 
        totalGenerated = totalGenerated.add(1);
        posInTokensArray[totalGenerated] = totalGenerated.sub(1);
        ownedTokens[msg.sender].push(totalGenerated);
        emit erc721Created(msg.sender, erc721);
        return erc721;
        
    }
      /**
   * @dev changes ownership, must be current owner
   * @param ofNewOwner address, the new owners address 
   */
    function changeOwner(address ofNewOwner) public pre_cond(isOwner()) { owner = ofNewOwner; }

   
    /**
   * @dev internal, checks for ownership
   * @return bool if msg.sender is owner  
   */
    function isOwner() internal view returns (bool) { return msg.sender == owner; }

    /**
   * @dev Gets the total amount of tokens stored by the contract
   * @return uint256 representing the total amount of tokens
   */
    function viewTotal() public view returns(uint256 _totalGenerated){
        return totalGenerated;
    }


    /**
   * @dev Gets the total amount of tokens owned by the sender
   * @return uint[] with the id of each token owned
   */
    function viewYourTokens() public view  returns (uint[] _yourTokens){
    return ownedTokens[msg.sender];
    }
    
    /**
   * @dev Gets the address of the contract, takes a token ID 
   * @return address of the contract for the token
   */
     function viewAddressArray(uint _id) view public returns (address _yourToken){
    return tokensArray[_id];
    }
     /**
   * @dev Sets the isOnline state variable, only owner
   * @return state of isOnline
   */
     function toggleOnlineStatus() public pre_cond(isOwner())  returns (bool status){
         isOnline = !isOnline;
    return isOnline;
    }
    /**
   * @dev fallback revert
   *
   */
    function() payable {
     revert();
 }
   /**
   * @dev Kill, only owner. Destroys the smart contract
   *
   */
 function kill(){ 
     require(isOwner());
     selfdestruct(msg.sender);
 }
    
 
    
}
