import { TRANSACTION_ACTIONS } from './constants'
// import { getGasLimit } from './web3Utils'
import Vue from 'vue'
export function useCallback (response, { summary, eventName, approval }, callback) {
  if (process.client) {
    const { $store } = window.$nuxt
    const { hash } = response
    $store.dispatch('updateTransactions', {
      hash,
      type: TRANSACTION_ACTIONS.ADDED,
      summary,
      eventName,
      approval
    })
    response.wait().then(res => {
      console.log(res)
      const { transactionHash } = res
      $store.dispatch('updateLoading', false)
      $store.dispatch('updateTransactions', {
        hash: transactionHash,
        type: TRANSACTION_ACTIONS.CONFIRMED
      })
      callback && callback(res)
    }).catch(e => {
      $store.dispatch('updateLoading', false)
    })
  }
}

export function sendTransactionEvent (sendEvent, { summary, approval }, callback, errorCallback) {
  if (process.client) {
    const { $store, $toastBox } = window.$nuxt
    $store.dispatch('updateLoading', true)
    sendEvent.on('transactionHash', function (hash) {
      console.log('transactionHash')
      $store.dispatch('updateTransactions', {
        hash,
        type: TRANSACTION_ACTIONS.ADDED,
        summary,
        approval
      })
    }).on('receipt', function (receipt) {
      console.log('receipt')
      $store.dispatch('updateTransactions', {
        hash: receipt.transactionHash,
        type: TRANSACTION_ACTIONS.CONFIRMED
      })
      $store.dispatch('updateLoading', false)
      callback && callback(receipt.transactionHash)
    }).catch(error => {
      $store.dispatch('updateLoading', false)
      return errorCallback && errorCallback(error)
      const errInfo = JSON.parse(JSON.stringify(error))
      console.log(errInfo)
      if (errInfo?.receipt && !errInfo.receipt?.status) {
        $toastBox.showToastBox({
          type: 'none',
          text: '合约异常：Transaction has been reverted by the EVM'
        })
      } else {
        $toastBox.showToastBox({
          type: 'none',
          text: error.message
        })
      }
      if (error?.code === 4001) {
        console.log('Transaction rejected.')
      } else {
        const errInfo = JSON.parse(JSON.stringify(error))
        console.log(errInfo)
        console.log(`actions is failed: ${error.message}`)
        if (errInfo.receipt.transactionHash) {
          $store.dispatch('updateTransactions', {
            hash: errInfo.receipt.transactionHash,
            type: TRANSACTION_ACTIONS.CONFIRMED
          })
        }
      }
    })
  }
}

export async function useContractMethods ({ contract, methodName, parameters, eventName, summary }, callback, errorCallback) {
  if (!contract) {
    console.error('no contract')
    return
  }
  if (!methodName) {
    console.error('no methodName')
    return
  }
  // const estimatedGas = await getGasLimit(contract, methodName, parameters)
  let method
  if (parameters.length < 1 || !parameters) {
    method = contract[methodName]()
  } else if (parameters.length === 1) {
    method = contract[methodName](parameters[0])
  } else if (parameters.length === 2) {
    method = contract[methodName](parameters[0], parameters[1])
  } else if (parameters.length === 3) {
    method = contract[methodName](parameters[0], parameters[1], parameters[2])
  } else if (parameters.length === 4) {
    method = contract[methodName](parameters[0], parameters[1], parameters[2], parameters[3])
  } else if (parameters.length === 5) {
    console.log(parameters[0], parameters[1], parameters[2], parameters[3], parameters[4])
    method = contract[methodName](parameters[0], parameters[1], parameters[2], parameters[3], parameters[4])
  }
  const { $store, $toastBox } = window.$nuxt
  // $store.dispatch('updateLoading', true)
  method.then((response) => {
    $store.dispatch('updateLoading', false)
    useCallback(response, {
      summary: summary,
      eventName: eventName
    }, callback)
  })
    .catch((error) => {
      $store.dispatch('updateLoading', false)
      const networkVersion = window.ethereum.networkVersion
      console.log(networkVersion)
      errorCallback && errorCallback(error)
      console.error('Failed to request', error)
      if (error?.data?.message) {
        // $toastBox.showToastBox({
        //   type: 'none',
        //   text: error?.data?.message || error.message
        // })
        // alert(error?.data?.message || error.message)
      } else {
        // errorCallback(error)
        console.log(111)
        // if (error.code === 4001) {
        //   $toastBox.showToastBox({
        //     type: 'none',
        //     text: '授权拒绝'
        //   })
        // } else {
        //   $toastBox.showToastBox({
        //     type: 'none',
        //     text: error.message
        //   })
        // }
      }
    })
}
