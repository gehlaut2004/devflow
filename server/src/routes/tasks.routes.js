import express from "express";
import supabase from "../config/supabase.js";
import { verifyFirebaseToken } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", verifyFirebaseToken, async (req, res) => {
  const firebaseUid = req.user;

  const { data: user, error: userError } = await supabase
    .from("users")
    .select("id")
    .eq("firebase_uid", firebaseuid)
    .single();
  if (userError) {
    return res.status(500).json({ error: "Failed to fetch user" });
  }

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .sq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    return res.status(500).json({ error: "Failed to fetch tasks" });
  }

  res.json(data);
});

router.post("/", verifyFirebaseToken, async (req, res) => {
  const { title, description } = req.body;
  const firebaseUid = req.user;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const { data: user } = await supabase
    .from("users")
    .select("id")
    .eq("firebase_uid", firebaseUid)
    .single();

  const { data, error } = await supabase.from("tasks").insert([
    {
      user_id: user.id,
      title,
      description,
    },
  ]);
  if (error) {
    return res.status(500).json({ error: "Failed to create task" });
  }
  res.status(201).json(data);
});
export default router;
