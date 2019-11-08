import axios from "axios";

export const addTask = (task, history) => async dispatch => {
    await axios.post("", task);
    history.push("/");
} 