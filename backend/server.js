import express from "express";
import schoolRoutes from "./routes/schoolRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use("/api/school", schoolRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:3000`);
});
