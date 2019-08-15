import Axios from "axios";
import urlApi from "../../Support/UrlApi/UrlApi";

export const registerUser = data => {
  // console.log(`dicoba dicoba`, data[0])
  return {
    type: "REGISTER_USER",
    payload: Axios.post(urlApi + `/user/register`, data)
  };
};

// get all data users
export const getDataUser = () => {
  return {
      type : "GET_ALL_USER",
      payload : Axios.get(urlApi + '/user')
  }
}

// get all users
export const userLogin = data => {
  return {
    type: "LOGIN_USER",
    payload: Axios
      .post(urlApi + `/user/login`, data, {
        headers: {
          authorization: "welcometoapp",
          "x-token": "token",
          "x-user": "1"
        }
      })
      // .then(res => {
      //   const token = res.data.token;
      //   const id_user = res.data.id_user;
      //   const fullname = res.data.fullname;
      //   const status = res.data.status;
      //   const role = res.data.role;
      //   localStorage.setItem("token", token);
      //   localStorage.setItem("id_user", id_user);
      //   localStorage.setItem("fullname", fullname);
      //   localStorage.setItem("status", status);
      //   localStorage.setItem("role", role);
      // })
  };
};