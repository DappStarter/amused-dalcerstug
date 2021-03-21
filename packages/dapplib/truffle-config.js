require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rate mad midnight grace near tackle tumble'; 
let testAccounts = [
"0xda0be95118642ae3a29328fc75dada104f1ac78e5b297a7e19a2ccd7501c682c",
"0xf2fb71968351fcd7a10af2474002046051633ceb385173d353fe7095f830846d",
"0x82e446d7fad63126faa6b1d3d75485553b02697aed369cf0bbea117b0579a51e",
"0xc5d06de1cb05196afad1a5925ad29f2741f22ce8485540a1e791665c728a8057",
"0x8db3f1563828a763c96d82f5e310b4d02efbca700d12fd76c6c7a3c3ccb769fe",
"0xfa039eb8d1630e1973c6e445e5ea62a3a558b659535d22bbab49b93d6a506ce3",
"0x05422a93a6816f55684b696849132a150ceac19fd92711000efd47f6fc2a05d2",
"0x81cb0289cd12bad2758ceb08537aa152e4a56f45e118b2c1539a09ce7ebf6f91",
"0xb9e1f3c74cce6e07a7aca4cc9a9e392edf59f8b66d010c1ebb26ecd4e14ec677",
"0xfb0809763772427ce251e4b86aca75a0586788054bc0e71f261f65d74357fd78"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
