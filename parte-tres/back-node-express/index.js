import express from 'express';
const app = express();  

app.get('/', (req, res) => {(

    res.send("Reviviendo desde Express")

)})

app.listen(3000 || process.env.PORT, () => {
    console.log("Server is running on port"+`${process.env.PORT}`)
})