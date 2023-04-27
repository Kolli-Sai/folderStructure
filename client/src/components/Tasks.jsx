import { useQuery } from "react-query";
import axios from "axios";
import { Stack } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

// import { useNavigate } from "react-router-dom";

const fetchTasks = async () => {
  try {
    let data = await axios.get("http://localhost:8190/api/v1/tasks");
    console.log(data);
    return data;
  } catch (error) {
    console.log(`error while fetching tasks ${error}`);
  }
};

function Tasks() {
  // const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery("tasks", fetchTasks);
  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

  const handleDelete = async (id) => {
    try {
      const task = await axios.delete(
        `http://localhost:8190/api/v1/tasks/${id}`
      );
      return task;
    } catch (error) {
      console.log(`error while deleting task with id ${id}`);
    }
  };

  return (
    <>
      {data.data.map((task) => {
        return (
          <div key={task._id}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <h1>{task.name}</h1>
              <EditNoteIcon
              // onClick={() => navigate(`/api/v1/tasks/${task._id}`)}
              />

              <DeleteIcon onClick={() => handleDelete(task._id)} />
            </Stack>
          </div>
        );
      })}
    </>
  );
}

export default Tasks;
