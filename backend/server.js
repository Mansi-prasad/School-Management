import express from "express";
import schoolRoutes from "./routes/schoolRoutes.js";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/api/school", schoolRoutes);
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
