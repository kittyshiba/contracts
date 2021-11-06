const KShiba = artifacts.require("KittyShiba.sol");
module.exports = function(deployer) {
  deployer.deploy(KShiba);
};
