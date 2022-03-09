// import { calculateGasMargin, getGasPrice, useTokenContract } from './web3Utils'
import { useCallback } from './contractEvent'

export async function approveToken (spender, tokenId, tokenContract, callback, errorCallback) {
  console.log(spender, tokenId)
  if (!tokenContract) {
    console.error('tokenContract is null')
    return
  }
  console.log(tokenContract)
  tokenContract
    .approve(spender, tokenId)
    .then((response) => {
      console.log(response)
      useCallback(response, {
        summary: 'Approve ',
        approval: spender
      }, callback)
    })
    .catch((error) => {
      errorCallback && errorCallback(error)
      console.error('Failed to approve token', error)
      throw error
    })
}
