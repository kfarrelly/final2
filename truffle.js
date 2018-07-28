module.exports = {
  networks: {
development: {
 host: "127.0.0.1", port: 7545, network_id: "*",  gas: 4000000,  
      },
      Rinkeby: {
 host: "127.0.0.1", port: 8545, network_id: "4",  gas: 6612388, // Gas limit used for deploys
      gasPrice: 20000000000, // 20 gwei
      }
}
}    	



 