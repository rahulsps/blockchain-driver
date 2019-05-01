const async     = require('async');
const steem     = require('steem');

var BlockchainDataDriver = (function() {

    BlockchainDataDriver = function(){ }

    BlockchainDataDriver.transfer = function(from, to, amount, unit, memo, platform){
        return new Promise( function(resolve, reject) {
            resolve("In Progress..")
        });
    }

    return BlockchainDataDriver;

})();

module.exports = BlockchainDataDriver;
