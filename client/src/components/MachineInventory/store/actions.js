import MachineServices from '../../../services/MachineInventory/MachineServices'
import { Types } from './mutations'

export default {
  async [Types.GET_MACHINES] (context) {
    return new Promise((resolve, reject) => {
      MachineServices.getMachines()
        .then((successResponse) => {
          // success method here
          context.commit(Types.GET_MACHINES, successResponse.data)
          resolve()
        },
        (errorResponse) => {
          // error method here
          console.log(errorResponse.data || 'Failed to get data.')
          reject(errorResponse)
        })
        .catch((reason) => {
          console.log(reason)
        })
    })
  },
  async [Types.GET_MACHINE_BY_ID] (context, id) {
    return new Promise((resolve, reject) => {
      MachineServices.getMachineById(id)
        .then((successResponse) => {
        // success method here
          context.commit(Types.GET_MACHINE_BY_ID, successResponse.data)
          resolve()
        },
        (errorResponse) => {
        // error method here
          console.log(errorResponse.data || 'Failed to get data.')
          reject(errorResponse)
        })
        .catch((reason) => {
          // method if everything fails
          console.log(reason)
        })
    })
  },
  async [Types.UPDATE_MACHINE] (context, obj) {
    return new Promise((resolve, reject) => {
      MachineServices.updateMachine(obj)
        .then((successResponse) => {
          // success
          context.commit(Types.UPDATE_MACHINE, successResponse.data)
          resolve()
        }, (errorResponse) => {
          // error
          console.log(errorResponse.data || 'Failed to update data.')
          reject(errorResponse)
        })
        .catch((reason) => {
          // failed
          console.log(reason)
        })
    })
  },
  async [Types.DELETE_MACHINE] (context, id) {
    return new Promise((resolve, reject) => {
      MachineServices.deleteMachine(id)
        .then((successResponse) => {
          // success
          context.commit(Types.DELETE_MACHINE, successResponse.data)
          resolve()
        }, (errorResponse) => {
          // error
          console.log(errorResponse.data || 'Failed to delete data.')
          reject(errorResponse)
        })
        .catch((reason) => {
          // failed
          console.log(reason)
        })
    })
  }
}
