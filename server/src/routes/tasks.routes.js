import express from "express";
import supabase from "../config/supabase.js";
import { verifyFirebaseToken } from "../middleware/auth.middleware.js";
import { getOrCreateUser } from "../services/user.service.js";

const router = express.Router();

router.get("/", verifyFirebaseToken, async (req, res) => {
  try {
    const { firebaseUid, email } = req.user;
    const user = await getOrCreateUser({ firebaseUid, email });

    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/", verifyFirebaseToken, async (req, res) => {
  try {
    const { title, description } = req.body;
    const { firebaseUid, email } = req.user;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const user = await getOrCreateUser({ firebaseUid, email });

    const { data, error } = await supabase.from("tasks").insert([
      {
        user_id: user.id,
        title,
        description,
      },
    ]);

    if (error) throw error;

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
