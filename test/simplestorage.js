var ERC721g = artifacts.require("./ERC721Generator.sol");
var ERC721 = artifacts.require("./ERC721Token.sol");

contract("ERC721g", async accounts => {
  var alice = accounts[0];
  var bob = accounts[1];
  var thief = accounts[2];
  var input1 = "x";
  var input2 = "y";
  var input3 = "z";
  var url = "url";
  var number = ~~4;
  var name = "name";
  var tempAddr;

  it("it should set the owner to the first account and totalgenerated to 0", async () => {
    let instance = await ERC721g.deployed();
    let owner = await instance.owner.call();
    let total = await instance.totalGenerated.call();

    assert.equal(
      owner,
      accounts[0],
      "Account 1 does not match owner of contract"
    );
    assert.equal(total, 0, "The value totalGenerated was not 0");
  }),
    it("should check that you can turn the contract on and off", async () => {
      let isOffline = await instance.toggleOnlineStatus({ from: alice });
      let isOffline = await instance.isOnline.call();
      let backOn = await instance.toggleOnlineStatus({ from: alice });
      let isOnline1 = await instance.isOnline.call();

      assert.equal(
        isOnline,
        false,
        "The contract is online when it should not be"
      );
      assert.equal(
        isOnline1,
        true,
        "The contract is not online when it should be"
      );
    }),
    it("it should create a new erc721", async () => {
      let instance = await ERC721g.deployed();
      let newToken = await instance.createERC721(
        name,
        url,
        url,
        input3,
        input2,
        input1,
        number,
        { from: alice }
      );
      let ownedID = await instance.viewYourTokens.call({ from: alice });
      assert.equal(ownedID.length, 1, "more than 1 token owned by owner");
    });

  it("it should check the address of the current tokens, add the address and confirm its name", async () => {
    let instance = await ERC721g.deployed();
    let address = await instance.viewAddressArray(0, { from: alice });
    console.log(address);
    var newContract = await ERC721.at(address);
    let newname = await newContract.name.call({ from: alice });
    console.log(newname);

    assert.equal(
      newContract.address,
      address,
      "The two address values are the same"
    );
    assert.equal(newname, name, "the name is not correct");
  });

  it("should transfer the erc721 correctly", async () => {
    let instance = await ERC721g.deployed();
    let address = await instance.viewAddressArray(0, { from: alice });

    var newContract = await ERC721.at(address);
    let name = await newContract.name.call({ from: alice });
    let attempt = await newContract.transferFrom(alice, bob, 1, {
      from: alice
    });

    assert(attempt, "Attempt to transfer failed");
  });
});
