const express = require("express");
const app = express();
require('dotenv').config();
const syncDB = require("./config/db");
const TutorRouters = require("./routers/TutorRouters");
const PetRouters = require("./routers/PetRouters");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/vetclinic', TutorRouters); 
app.use('/vetclinic', PetRouters);

app.listen(PORT, async () => {
  await syncDB();
  console.log(`O Express está rodando na porta ${PORT}`);
});
