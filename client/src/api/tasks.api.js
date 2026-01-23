import { auth } from "../firebaae/firebase";
const API_URL = import.meta.env.VITE_API_URL;

export async function fetchTasks() {
  const token = await auth.currentUser.getIdToken();
 
  const res = await fetch(`${API_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return res.json();
}
export async function createTask(title, description) {
  const token = await auth.currentUser.getIdToken();
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description }),
  });
  if (!res.ok) {
    throw new Error("Failed to create task");
  }
  return res.json();
}