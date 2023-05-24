import Vuex from 'vuex'
import machineinventoryModule from '../components/MachineInventory/store/machineInventory.js'

export default new Vuex.Store({
  modules: {
    machineinventoryModule: machineinventoryModule
  }
})
