require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain exchange give clog outer slam'; 
let testAccounts = [
"0xde8eb1a2d086c36f25b61adbd23b65cbe5482120100db5ed25432880eaf06bf9",
"0x950c8580658b2e82b503bac334e11c3a928951b750061c039835e4c060ea21db",
"0xc38cb3199da764a13702e4d914b9d3a497981a8d333508c39b87807178ea6473",
"0x2acfb2842526a4dfa398ab2382a1a0359dcdabc0fbc529de35c872c055ac3b35",
"0xad4a17bb00cdd7a0c7cc9e6af835f214460f6bb757fe6296a13c08671370c0f0",
"0xc5d7a582400a6094fe876a574cce3847c19353398ff6e2175f852fa2d5413313",
"0x2ccba08f380e498d6925d974654eb2bb8d20d9e554b0e4452d79e0a0e8cfc6ca",
"0xce40d47e7120902fb9ce81cbc53f8e692e32fd5d6e4e64086256655a2858b3c2",
"0x10278527f28752e46cdc0e4d9942c273376815d3fbec1165aeab327a29022564",
"0x0d1d4f70607e4316478a45ad3b85370e47ba29539516b9ccf7cf9c48da52a7cd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

