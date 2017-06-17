const app = require("./custom-express.js");
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`);
  console.log(`Para derrubar o servidor: CTRL + C`);
});
