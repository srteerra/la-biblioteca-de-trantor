import axios from "axios";
import router from "../routes";
import bootstrap from "bootstrap";
import swal from "sweetalert";

export const actions = {
  async login({ commit }, payload) {
    try {
      var data = {
        user_email: payload.loginEmail,
        user_password: payload.loginPassword,
      };
      await axios
        .post("/api/v1/users/login", data)
        .then((res) => {
          commit("SET_USER", res.data.data);
          router.push(`/profile/${res.data.data.user_id}`);
        })
    } catch (error) {
      console.log(error)
      if (error){
          swal({
            title: "error",
            text: "El correo o contrasena son incorrectos, intententalo de nuevo",
            icon: "error",
            button: "OK"
          });
      }
    }
  },
  async accessRole({ commit, dispatch }, payload) {
    try {
      let role = payload.user_role;
      const response = await axios.post(
        "/api/v1/users/accessRole",
        { role },
        {
          headers: {
            Authorization: "Baerer " + payload.access_token,
          },
        }
      );
      
      commit('SET_ACCESS',true)
    } catch (error) {
      if (error.response.data.message == "jwt expired" || error.response.data.message == "Token unauthorized") {
        
        await dispatch("refresh_token", { cb: "accessRole", datas: payload });
      }
    }
  },
  async refresh_token({ commit, getters,dispatch }, payload) {
    try {
      const { cb, datas } = payload;
      let token = getters.getUser;

      const response = await axios.post("/api/v1/users/refreshtoken", "", {
        headers: {
          Authorization: "Baerer " + token.refresh_token,
        },
      });
      commit("SET_ACCESS_TOKEN", response.data.tokens);
      await dispatch(cb, datas);
    } catch (error) {
      router.push("/");
    }
  },
  async logout({ commit, getters,dispatch }, payload) {
    try {
      let token = getters.getUser.access_token;

      
      const response = await axios.post("/api/v1/users/logout", "", {
        headers: {
          Authorization: "Baerer " + token,
        },
      });

      sessionStorage.clear();
      router.go("/")
      
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.data.message == "jwt expired" || error.response.data.message == "Token unauthorized") {
        dispatch("refresh_token", { cb: "logout", datas: payload });
      }
    }
  },
};
