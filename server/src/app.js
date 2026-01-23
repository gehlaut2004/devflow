import express from "express";
import cors from "cors";
import tasksRoutes from "../src/routes/tasks.routes.js"
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "devflow-server" });
});

app.use("/tasks", tasksRoutes);
export default app;
