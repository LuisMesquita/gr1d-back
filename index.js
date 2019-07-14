const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

//Carregando controllers
const mongeralController = require('./controllers/mongeral.js')
const printlaserController = require('./controllers/printlaser.js')
const userController = require('./controllers/user.js')
const goalController = require('./controllers/goal.js')

//Configurando o express
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.post('/goal', async (req, res) => {
  try {
    const { userId, periodicity, goal } = req.body       
    const goalResponse = await goalController.createGoal(goal, userId);
    const response = await mongeralController.getPlanOptionsForUser(goalResponse.user, periodicity);            
    // const sendEmail = await printlaserController.sendEmail({ goal, plans: response })
    const newGoal = goalResponse.goal 
    return res.send({ newGoal, plans: response })
  } catch(err) {		
		return res.status(500).send(err)
	}	
})

app.post('/user', async(req, res) => {
  try {
    const user = req.body          
    const response = await userController.createUser(user)    
    return res.send(response)
  } catch(err) {		     
		return res.send(err)
	}	
})

app.patch('/user', async(req, res) => {
  try {
    const user = req.body          
    const response = await userController.updateUser(user)    
    return res.send(response)
  } catch(err) {		     
		return res.send(err)
	}	
})

http.createServer(app).listen(process.env.PORT || 1337, () => {
  console.log('Express server listening on port 1337');
});
