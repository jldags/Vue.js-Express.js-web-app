<template>
  <el-container class="container" style="max-width: 450px;">
    <el-header style="width: 100%;">
      <h3>Edit Inventory</h3>
    </el-header>
    <el-main>
      <div class="mb-3" style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
          <label for="machine-name" class="form-label">Machine/Asset Name</label>
          <el-input v-model="model.name" type="text" id="machine-name" placeholder="e.g. Brand, Model, etc..." clearable></el-input>
      </div>
      <div class="mb-3" style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
          <label for="machine-type" class="form-label">Asset Type</label>
          <el-input v-model="model.assetType" type="text" id="machine-type" placeholder="e.g. Laptop, Mouse, Keyboard, etc..." clearable></el-input>
        </div>
        <div class="mb-3" style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
          <label for="machine-stock" class="form-label">Stock Count</label>
          <el-input-number type="number" v-model="model.stockCount" controls-position="right" id="machine-stock" style="width: 100%; text-align-last: left;" placeholder="Available amount"></el-input-number>
        </div>
    </el-main>
    <el-footer>
      <el-button type="info" @click="() => router.go(-1)">Cancel</el-button>
      <el-button type="success" @click="updateMachine(model)">Save</el-button>
      <el-button type="danger" @click="deleteMachine(model.id)">Delete</el-button>
    </el-footer>
  </el-container>
</template>

<script>
import router from '../../router/index'
import { Types } from './store/mutations'

export default {
  data () {
    return {
      model: {},
      router: router,
      stateManager: this.$store.default
    }
  },
  async beforeMount () {
    await this.getMachineById(this.$route.params.id)
  },
  methods: {
    async getMachineById (id) {
      let store = this.stateManager

      await store.dispatch('machineinventoryModule/' + Types.GET_MACHINE_BY_ID, id)
        .then((successResponse) => {
          // success callback
          this.model = store.state.machineinventoryModule.currentMachine
        }, (errorResponse) => {
          // error callback
          this.$notify.error('Failed to get Data')
        }).catch((reason) => {
          // catch callback
          this.$notify.error('Unexpected error occured')
        })
      // await MachineService.getMachineById(id)
      //   .then((successResponse) => {
      //     // success callback
      //     console.log(successResponse)
      //     console.log(this.$store.allMachines)
      //     this.model = successResponse.data
      //   }, (errorResponse) => {
      //     // error callback
      //     console.log(errorResponse.data)
      //   })
    },
    async updateMachine (machine) {
      let store = this.stateManager

      store.dispatch('machineinventoryModule/' + Types.UPDATE_MACHINE, machine)
        .then((successResponse) => {
          // success callback
          this.$notify.success('Successfully updated')
          router.push('/machine-inventory/index')
        }, (errorResponse) => {
          // error callback
          this.$notify.error('Failed to update Data')
        }).catch((reason) => {
          // catch callback
          this.$notify.error('Unexpected error occured')
        })
      // await MachineService.updateMachine(machine)
      //   .then((successResponse) => {
      //     // success callback
      //     this.model = successResponse.data.data
      //   }, (errorResponse) => {
      //     // error callback
      //     console.log(errorResponse.data)
      //   })
    },
    async deleteMachine (id) {
      let store = this.stateManager

      store.dispatch('machineinventoryModule/' + Types.DELETE_MACHINE, id)
        .then((successResponse) => {
          // success callback
          this.$notify.success('Successfully deleted')
          router.push('/machine-inventory/index')
        }, (errorResponse) => {
          // error callback
          this.$notify.error('Failed to delete Data')
        }).catch((reason) => {
          // catch callback
          this.$notify.error('Unexpected error occured')
        })
      // await MachineService.deleteMachine(id)
      //   .then((successResponse) => {
      //     // success callback
      //     if (successResponse.status >= 200 && successResponse.status < 300) router.replace('/machine-inventory/index')
      //   }, (errorResponse) => {
      //     // error callback
      //     console.log(errorResponse.data)
      //   })
    }
  }
}
</script>
