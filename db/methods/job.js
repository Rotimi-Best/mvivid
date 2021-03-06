const JobModel = require('../models/Job');
const { DB: { COLLECTIONS : { JOB } } } = require('../../helpers/constants');

module.exports = {
  addJob: data => require('./templates/create')(JobModel, JOB, data),
  getJob: (findFields = {}, sortFields = null, limitNo = null) =>
    require('./templates/read')(JobModel, JOB, findFields, sortFields, limitNo),
  updateJob: (findField, setField) => require('./templates/update')(JobModel, JOB, findField, setField),
  deleteJob: findField => require('./templates/delete')(JobModel, JOB, findField)
};
