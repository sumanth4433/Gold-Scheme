import request from "@/utils/request";
const UserbaseUrl = `${import.meta.env.VITE_BASEURL}/user`;
export default {
  // --------------------------------------AUTHENTICATION MODULE----------------------------------//
  Login(data) {
    return request({
      url: `${UserbaseUrl}/login`,
      method: "POST",
      data: data,
    });
  },
  Createpassword(data) {
    return request({
      url: `${UserbaseUrl}/forget-password`,
      method: "POST",
      data,
    });
  },
  userProfile(id) {
    return request({
      url: `${UserbaseUrl}/get/${id}`,
      method: "GET",
    });
  },
};
