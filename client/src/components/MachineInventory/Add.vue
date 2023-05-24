<template>
  <el-container class="container" style="max-width: 450px;">
    <el-header style="width: 100%;">
      <h3>Add Inventory</h3>
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
          <el-input-number v-model="model.stockCount" controls-position="right" id="machine-stock" style="width: 100%;" placeholder="Available amount"></el-input-number>
        </div>
    </el-main>
    <el-footer>
      <el-button type="info" @click="() => router.go(-1)">Cancel</el-button>
      <el-button type="success" @click="submit(model)">Submit</el-button>
    </el-footer>
  </el-container>
</template>
<script>
import MachineService from '../../services/MachineInventory/MachineServices'
import router from '../../router/index'

export default {
  data () {
    return {
      model: {},
      payloadModel: {},
      router: router
    }
  },
  methods: {
    async submit (model) {
      this.payloadModel = model
      var notification = {}

      await MachineService.addMachine(this.payloadModel)
        .then((successResponse) => {
          // success callback

          notification.message = 'Successfully added!'
          notification.type = 'success'
          router.replace('/machine-inventory/index')
        }, (errorResponse) => {
          // error callback
          console.log(errorResponse)
          notification.message = 'Adding failed!'
          notification.type = 'error'
        }).finally(() => {
          this.$message(notification)
        })
    }
  }
}

</script>
