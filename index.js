import express from 'express';
import taskRoutes from './src/task/routes.js'


const app = express();
const port = 4444

app.use(express.json())


app.use('/api/v1/taskman', taskRoutes)
  

app.listen(port, () => console.log(`app on port ${port}`))