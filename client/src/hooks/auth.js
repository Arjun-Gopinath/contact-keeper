import axios from "axios";

export const handleLogin = async (userCredentials) => {
  await axios
    .post("http://localhost:8000/api/auth", userCredentials)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    });
};
