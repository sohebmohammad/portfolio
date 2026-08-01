import { config } from "./src/config.js";
import { app } from "./src/app.js";

app.listen(config.port, () => {
  console.log(`Portfolio backend listening on http://localhost:${config.port}`);
});
