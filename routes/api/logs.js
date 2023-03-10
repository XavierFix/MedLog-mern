<<<<<<< HEAD
//these are required
=======
// const router = require("express").Router();
// const logsController = require("../../controllers/healthLogController");
// const isAuthenticated = require('../isAuthenticated')

// module.exports = function(passport){
// // Matches with "/api/logs"
// router.route("/")
//     .get(isAuthenticated, logsController.findAll)
//     .post(logsController.create);

// // Matches with "/api/logs/:id"
// router.route("/:id")
//   .get(isAuthenticated, logsController.findById)
//   .put(logsController.update)
//   .delete(logsController.remove);

//   return router;
// }
// // module.exports = router;

>>>>>>> 7044d01 (fixing issues with app. Commented out authentication stuff until it is integrated with app.)
const router = require("express").Router();
const logsController = require("../../controllers/healthLogController");

<<<<<<< HEAD
module.exports = function(passport){
  // Matches with "/api/logs"
  router.route("/")
    .get(isAuthenticated, logsController.findAll)
    .post(logsController.create);

  // Matches with "/api/logs/:id"
  router.route("/:id")
    .get(isAuthenticated, logsController.findById)
    .put(logsController.update)
    .delete(logsController.remove);

  return router;
}
=======
// Matches with "/api/logs"
router.route("/")
    .get(logsController.findAll)
    .post(logsController.create);

// Matches with "/api/logs/:id"
router.route("/:id")
  .get(logsController.findById)
  .put(logsController.update)
  .delete(logsController.remove);

module.exports = router;
>>>>>>> 7044d01 (fixing issues with app. Commented out authentication stuff until it is integrated with app.)
