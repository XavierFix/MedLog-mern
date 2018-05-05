// Exporting an object containing all of our models

module.exports = {
  User: require('./User'),
  Clinic: require('./clinic'),
  Doctor: require('./Doctor'),
  HealthLog: require('./HealthLog'),
  Appointment: require('./Appointment'),
  SymptomJournal: require('./Symptom'),
  Prescription: require('./Prescription'),
  //Code: require('./Code'),
  //Token: require('./token'),
  //Client: require('./Client'),
};
