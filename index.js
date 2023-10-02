const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

//to pretty print json response
app.set('json spaces', 2)

app.listen(PORT,()=>{
	console.log('(ctrl + click) http://localhost:3000/')
})