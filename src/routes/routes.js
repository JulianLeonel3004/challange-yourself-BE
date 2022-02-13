const userController = require('../controllers/userController')

const appRouter = app => {

    const bodyParser = require('body-parser');
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
 
    
  app.post("/register", async (req, res) => {
    const resp = await userController.register(req.body)
    res.status(200).send(resp)
  })
 
}


module.exports = appRouter;