import Index from '@/components/MachineInventory/Index.vue'
const url = '/machine-inventory/'

exports.MachineInventoryRoutes = {
  path: url.concat('index'),
  name: 'Index',
  component: Index
}
