const express = require("express")
const cors = require("cors")
const app = express()

//middleware
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
res.send("Server says buenas noches!")
})

app.get("/jedi", (req, res) => {
    const jedi = {
        name: "Luke",
        surname: "Skywalker",
        lightsaber: 1,
        colorLightsaber: "green"
    }
    res.send(jedi)
    })
    

app.post("/jedi", (req, res) =>{
    console.log(req.body)
    res.send("Data Saved")

})

app.listen(8080, () => {
    console.log("Server run port 8080")
})