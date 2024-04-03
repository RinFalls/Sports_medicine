import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/index.js'
import fileUpload from 'express-fileupload'



mongoose
  .connect('mongodb+srv://admin:admin@cluster0.ounjgxs.mongodb.net/site')
  .then(() => {
  })
  .catch((err) => console.log('DB connection error', err));

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(fileUpload({}));
// app.use(errorHandler)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

export default app;