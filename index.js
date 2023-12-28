//import json server library
const jsonServer=require('json-server')
const cors=require('cors')

//create server
const videoServer=jsonServer.create()

//create a router to connect the json file with index
const router=jsonServer.router('data.json')

//create middleware (json data to js)
const middleware=jsonServer.defaults()

//connect with client
videoServer.use(cors())
videoServer.use(middleware)
videoServer.use(router)

//to run, create a port. for that we use a method listen()
const PORT=4000
videoServer.listen(PORT,()=>{
    console.log(`__Video Server Started At Port ${PORT} __`);
})

