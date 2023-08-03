import "dotenv/config";
import App from "./app";

const PORT = process.env.PORT;
const app = new App();

app.server.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
