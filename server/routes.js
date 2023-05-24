const AuthenticationController = require('./controllers/AuthenticationController')
const MachineInventoryController = require('./controllers/MachineInventoryController')

module.exports = (app) => {
    app.get('/status', (req, res) => {
        res.send('Hello World!')
      })
    
    app.post('/register', AuthenticationController.register)

    app.get('/login', AuthenticationController.login)

    //#region MachineInvetoryAPIs
    const machineInventoryRoute = '/api/machine-inventory'
    app.get(machineInventoryRoute, MachineInventoryController.getAll)
    app.post(machineInventoryRoute, MachineInventoryController.addMachine)
    app.get(machineInventoryRoute + '/:id', MachineInventoryController.getById)
    app.put(machineInventoryRoute + '/:id', MachineInventoryController.editMachine)
    app.delete(machineInventoryRoute + '/:id', MachineInventoryController.deleteMachine)
    //#endregion MachineInvetoryAPIs
}

