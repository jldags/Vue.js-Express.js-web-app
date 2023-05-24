<template>
  <div class="container">
    <div class="container-fluid">
        <el-table
          :data="machines"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="Name"
            width="180">
          </el-table-column>
          <el-table-column
            prop="assetType"
            label="Asset Type">
          </el-table-column>
          <el-table-column
            prop="stockCount"
            label="Stocks">
          </el-table-column>
          <el-table-column
            prop="updatedAt"
            label="Last Updated">
          </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-button size="mini"
                         type="success"
                          icon="el-icon-plus"
                          @click="() => router.push('/machine-inventory/add')"
                          circle>
              </el-button>
            </template>
            <template slot-scope="scope">
              <el-button title="Manage"
                         size="mini"
                         type="primary"
                         icon="el-icon-edit"
                         @click="() => router.push(`/machine-inventory/edit/${scope.row.id}`)"
                         circle>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
// import MachineService from '../../services/MachineInventory/MachineServices'
import router from '../../router/index'

export default {
  data () {
    return {
      machines: [],
      router: router,
      store: this.$store.default
    }
  },
  async mounted () {
    await this.getMachines()
  },
  methods: {
    async getMachines () {
      let store = this.store
      store.dispatch('machineinventoryModule/GET_MACHINES')
        .then((successResponse) => {
          this.machines = store.state.machineinventoryModule.allMachines
        }, (errorResponse) => {
          this.$notify.error('Failed to get Data.')
        })
        .catch((reason) => {
          this.$notify.error('Unexpected Error.')
        })
    }
  }
}
</script>
