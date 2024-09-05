import axios from "../api/axios";
import useAuth from "./useAuth";

export default function useLogOut() {
  const { setAuth } = useAuth();
  const logout = async () => {
    setAuth({});
    try {
      const response = await axios.post("/logout", null, {
        withCredentials: true,
      });
    } catch (error) {
      console.log(errror);
    }
  };
  return logout;
}
