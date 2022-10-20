import axios from "axios";
import { setToken } from "./utils";

export const handleRegister = async (userCredentials) => {
  await axios
    .post("http://localhost:8000/api/users", userCredentials)
    .then((res) => {
      setToken(res.data.token);
    });
};
