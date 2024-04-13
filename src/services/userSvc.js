import request from "@/utils/request";
const UserbaseUrl = `${import.meta.env.VITE_BASEURL}/user`;
const clientbaseUrl = `${import.meta.env.VITE_BASEURL}/client`;
export default {
  // --------------------------------------AUTHENTICATION MODULE----------------------------------//
  Login(data) {
    return request({
      url: `${UserbaseUrl}/login`,
      method: "POST",
      data: data,
    });
  },
  forgotPassword(data) {
    return request({
      url: `${UserbaseUrl}/forgot-password`,
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
  //-------------------------------- get clients module---------------------------
  getclients() {
    return request({
      url: `${clientbaseUrl}/get`,
      method: "GET",
    });
  },
  addCleint(data) {
    return request({
      url: `${clientbaseUrl}/add`,
      method: "POST",
      data: data,
    });
  },
  updateCleint(data) {
    return request({
      url: `${clientbaseUrl}/update/${data.client_id}`,
      method: "PUT",
      data: data,
    });
  },
};
