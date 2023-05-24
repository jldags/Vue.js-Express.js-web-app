import Api from '@/services/Api'
const route = 'api/machine-inventory/'

export default {
  async getMachines () {
    return Api().get(route)
  },
  async getMachineById (id) {
    return Api().get(route + `${id}`)
  },
  async updateMachine (model) {
    return Api().put(route + `${model.id}`, model)
  },
  async addMachine (model) {
    return Api().post(route, model)
  },
  async deleteMachine (id) {
    return Api().delete(route + `${id}`)
  }
}
