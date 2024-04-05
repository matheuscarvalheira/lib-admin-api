import express = require("express");
import bodyParser = require("body-parser");
import mongoose, { ConnectOptions } from "mongoose";
import cors from 'cors';
import routes from './routes/routes';

interface CustomConnectOptions extends ConnectOptions {
  useUnifiedTopology?: boolean;
}

//Conectando o banco de dados ao MongoDB
mongoose.connect("mongodb://localhost:27017/dblibrary", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as CustomConnectOptions)
.then(() => {
  console.log("Conexão bem-sucedida ao MongoDB!");
})
.catch((error) => {
  console.error("Erro ao conectar ao MongoDB:", error);
});

//Configurando o servidor express
const app = express();
app.use(bodyParser.json());

//habilitando cors
app.use(cors());

//Usar as rotas criadas definidas em route.ts
app.use(routes);

//Inciando o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`{Server is running on port ${PORT}`);
});
