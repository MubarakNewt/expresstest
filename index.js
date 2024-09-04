import express from 'express';


const app = express();
const port = 4444


app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => console.log(`app on port ${port}`))