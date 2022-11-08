import axios from "axios";

export const getAllContacts = async (token) => {
  return await axios
    .get("http://localhost:8000/api/contacts", {
      headers: {
        "x-auth-token": token,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log("Error: ", err);
    });
};
