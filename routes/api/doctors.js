// //these are required
// const router = require("express").Router();
// const doctorsController = require("../../controllers/doctorsController");
// const isAuthenticated = require('../isAuthenticated')

// module.exports = function(passport){
//   // Matches with "/api/doctors"
//   console.log('inside doctors controller!')
//   router.route("/")
//     .get( isAuthenticated,  () => {
//       console.log('Executing find all');
//       doctorsController.findAll();
//     })
//     .post(doctorsController.create);
//     console.log()

//   // Matches with "/api/doctors/:id"
//   router.route("/:id")
//     .get(isAuthenticated, doctorsController.findById)
//     .put(doctorsController.update)
//     .delete(doctorsController.remove);

//     return router;
// }
// // module.exports = router;

//these are required
const router = require("express").Router();
const doctorsController = require("../../controllers/doctorsController");

<<<<<<< HEAD
module.exports = function(passport){
  // Matches with "/api/doctors"
  router.route("/")
    .get(isAuthenticated, doctorsController.findAll)
    .post(doctorsController.create);
=======
// Matches with "/api/doctors"
router.route("/")
  .get(doctorsController.findAll)
  .post(doctorsController.create);
>>>>>>> 7044d01 (fixing issues with app. Commented out authentication stuff until it is integrated with app.)

// Matches with "/api/doctors/:id"
router.route("/:id")
  .get(doctorsController.findById)
  .put(doctorsController.update)
  .delete(doctorsController.remove);

<<<<<<< HEAD
  return router;
}
=======
module.exports = router;
>>>>>>> 7044d01 (fixing issues with app. Commented out authentication stuff until it is integrated with app.)
