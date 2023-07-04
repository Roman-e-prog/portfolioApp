const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDb = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const port = process.env.Port;
const authRoute = require('./routes/auth');
const berufsstationenRoute = require('./routes/berufsstationen');
const referenzenRoute = require('./routes/referenzen');
const sprachenRoute = require('./routes/sprachen');
const ueberMichRoute = require('./routes/ueberMich');
const path = require("path");
const app = express();
connectDb();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use("/api/auth", authRoute);
app.use('/api/berufsstationen', berufsstationenRoute);
app.use('/api/referenzen', referenzenRoute);
app.use('/api/sprachen', sprachenRoute);
app.use('/api/ueberMich', ueberMichRoute);
//Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontside/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontside', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

app.use(errorHandler);

app.listen(port || 8020, ()=>{
    console.log(`Server is running on port ${port}`);
})
