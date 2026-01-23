import { useEffect, useState } from "react";
import { fetchTasks, createTask } from "../api/tasks.api";
import { useAuth } from "../auth/Authprovider";

export default function Tasks() {
  const { user, loading } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loading && user) {
      fetchTasks().then(setTasks);
    }
  }, [loading, user]);

  const handleCreateTask = async () => {
    try {
      const newTask = await createTask(title, description);
      setTasks([...tasks, newTask]);
      setTitle("");
      setDescription("");
    } catch (err) {
      setError(err.message);
    }
  };  
  if (loading) {
    return <div>Loading...</div>;
  } 
  if (!user) {
    return <div>Please log in to view your tasks.</div>;
  }
  return (
    <div>
      <h2>Your Tasks</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}  
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3> 
            <p>{task.description}</p>
          </li>
        ))} 
      </ul>
      <h2>Create New Task</h2>    
      <input
        type="text"
        placeholder="Title"
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />  
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
}