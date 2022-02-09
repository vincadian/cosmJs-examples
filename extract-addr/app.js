/*
 * @atmon3r - 2022
 */

import cosmos from 'cosmos-lib'
import cosmosConfig from './cosmos.config.js'

function getAddressFromPubKey (pubKey, chain) {
  let buff = new Buffer.from(pubKey, 'base64')
  const address = cosmos.address.getAddress(buff, chain.coinLookup.addressPrefix)
  console.log('Address: ' + address)
  console.log('PubKey: ' + pubKey)
  console.log(chain.explorer + address)    
}

cosmosConfig.forEach(function(getChain){
  console.log(getChain.name)
  getAddressFromPubKey(
    '',
    getChain
  )
  console.log('\n')
});

