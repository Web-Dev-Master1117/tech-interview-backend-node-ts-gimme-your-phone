import axios from "axios";

const baseURL = "https://api.fungenerators.com";
const apiKey = process.env.FUN_API_KEY;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "X-Fungenerators-Api-Secret": apiKey
  }
});

function getPhoneNumbers({ size }: { size: number }) {
  return axiosInstance
    .get("/identity/person/phonenumber", {
      params: { limit: size }
    })
    .then((result) => result.data)
    .catch((err) => console.log(err));
}

export { getPhoneNumbers };
