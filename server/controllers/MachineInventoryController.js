const { MachineInventory } = require("../models");

module.exports = {
  async getAll(req, res) {
    try {
      const machines = await MachineInventory.findAll();

      res.status(200).send(machines);
    } catch (error) {
      console.log(error);
    }
  },
  async getById(req, res) {
    try {
      console.log(req);
      const machine = await MachineInventory.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (machine === null) {
        return res
          .status(404)
          .send(`No matching machine found with id : ${req.params.id}`);
      } else {
        return res.status(200).send(machine);
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send("An error occured. Please try again");
    }
  },
  async editMachine(req, res) {
    try {
      const machine = await MachineInventory.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (machine == null)
        return res
          .status(404)
          .send(`No matching machine found with id : ${req.params.id}`);

      var updatedMachine = await machine.update(req.body);
      return res.status(200).send({
        message: `Successfully updated machine details with id : ${req.params.id}`,
        data: updatedMachine,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send("An error occured. Please try again");
    }
  },
  async addMachine(req, res) {
    try {
      const machine = await MachineInventory.create(req.body);
      res.status(200).send(machine);
    } catch (error) {
      console.log(error);
      return res.status(400).send("An error occured. Please try again");
    }
  },
  async deleteMachine(req, res) {
    try {
      const machine = await MachineInventory.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (machine == null)
        return res
          .status(404)
          .send(`No matching machine found with id : ${req.params.id}`);

      var deleted = await machine.destroy();
      console.log(deleted);
      return res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(400).send("An error occured. Please try again");
    }
  },
};
