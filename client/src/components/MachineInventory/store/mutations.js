/* eslint-disable no-undef */
export const Types = {
  GET_MACHINES: 'GET_MACHINES',
  GET_MACHINE_BY_ID: 'GET_MACHINE_BY_ID',
  UPDATE_MACHINE: 'UPDATE_MACHINE',
  ADD_MACHINE: 'ADD_MACHINE',
  DELETE_MACHINE: 'DELETE_MACHINE'
}

export default {
  [Types.GET_MACHINES] (state, data) {
    state.allMachines = data
  },
  [Types.GET_MACHINE_BY_ID] (state, data) {
    var machine = state.allMachines.filter((element) => {
      return element.id === data.id
    })[0]
    if (machine !== undefined) state.currentMachine = machine
  },
  [Types.UPDATE_MACHINE] (state, data) {
    state.allMachines.forEach(element => {
      if (element.id === data.id) {
        element = { ...data }
      }
    })
  },
  [Types.ADD_MACHINE] (state, data) {
    state.allMachines.push(data)
  },
  [Types.DELETE_MACHINE] (state, data) {
    let index = state.allMachines.indexOf(data)

    if (index > -1) {
      state.allMachines.splice(index, 1)
    }
  }
}
