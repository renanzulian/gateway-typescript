import App from "../index"
import http from "http"

const app = new App();
const server = http.createServer(app.getApplication());
server.listen(process.env.PORT || 3333);