import axios from "../api/axios";
import useAuth from "./useAuth";

export default function useRefresh() {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.post("/refresh/token/", null, {
      withCredentials: true,
    });
    console.log(response);
    setAuth((prev) => {
      return {
        ...prev,
        roles: response?.data?.roles,
        access: response?.data?.access,
        user: `${response?.data?.user_id?.first_name} ${response?.data?.user_id?.middle_name}`,
      };
    });

    return response.data.access;
  };

  return refresh;
}
