const express = require('express')
const userController =require('../Controller/userController')

const foodsController = require('../Controller/foodsController')
const stagesController = require('../Controller/stageController')
const ordersController = require('../Controller/orderController')
const jwtMiddleware = require('../Middileware/jwtMiddleware')
const multerConfig = require('../Middileware/multerMiddilware')
const cartsController = require('../Controller/cartController')
const destinationController = require('../Controller/destinatonControlls')
const hillstatinController = require('../Controller/hillstationController')

const router = new express.Router()

//register
router.post('/users/register',userController.register)

//login
router.post('/users/login',userController.login)

//get all foods
router.get('/foods/all-foods',foodsController.getAllFoodsController)

//get all stages
router.get('/stages/all-stages',stagesController.getAllStagesController)

//add number of participents
router.post('/participens/add',jwtMiddleware,multerConfig.single('profileImage'),ordersController.addNumberOfParticipents)

//get number of particepents of a user
router.get('/participens/get',jwtMiddleware,ordersController.getNumberOfParticipents)

//add food to cart
router.post('/cart-food/add',jwtMiddleware,cartsController.addFoodToCart)

//add stage to cart
router.post('/cart-stage/add',jwtMiddleware,cartsController.addStageToCart)

//get all destination
router.get('/destination/all-destination',destinationController.getAllDestinationController)

//get all hillstation
router.get('/destination/hillstaion',hillstatinController.getAllHillstationController)

//add destination to cart
router.post('/cart-destination/add',jwtMiddleware,cartsController.addDestinationToCart)

//get destination from cart
router.get('/destination/cart',jwtMiddleware,destinationController.getADestinationFromCartController)

//get stage from cart
router.get('/stage/cart',jwtMiddleware,stagesController.getAStageFromCartController)

//get all food from cart
router.get('/food/cart',jwtMiddleware,foodsController.getAllFoodFromCartController)

//delete order
router.delete('/order/delete/:id',jwtMiddleware,cartsController.deleteDestination)

//delete stage
router.delete('/stage/delete/:id',jwtMiddleware,cartsController.deleteStage)

//delete food
router.delete('/food/delete/:id',jwtMiddleware,cartsController.deleteFood)

//edit userprofile
router.put('/order/edit',jwtMiddleware,ordersController.editProfile)


module.exports = router