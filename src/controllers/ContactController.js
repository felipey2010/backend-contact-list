const mongoose = require("mongoose");

const Contacts = mongoose.model("contacts");

module.exports = {
  // Show all data in Contacts
  async index(req, res) {
    const data = await Contacts.find();
    return res.json(data);
  },
  // Show a particular contact by id
  async show(req, res) {
    const data = await Contacts.findById(req.params.id);
    return res.json(data);
  },
  // Store contact data
  async store(req, res) {
    await Contacts.create(req.body)
      .then(result => {
        return res.json({
          success: true,
          message: result,
        });
      })
      .catch(err => {
        return res.json({
          success: false,
          message: err,
        });
      });
  },
  // Update a contact's data
  async update(req, res) {
    await Contacts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .then(result => {
        return res.json({
          success: true,
          message: result,
        });
      })
      .catch(err => {
        return res.json({
          success: false,
          message: err,
        });
      });
  },
  // Delete a contact
  async destroy(req, res) {
    await Contacts.findByIdAndDelete(req.params.id)
      .then(result => {
        return res.json({
          success: true,
          message: result,
        });
      })
      .catch(err => {
        return res.json({
          success: false,
          message: err,
        });
      });
  },
};
