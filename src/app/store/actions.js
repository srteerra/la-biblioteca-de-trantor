import axios from "axios";
import router from "../routes"
export const actions = {
  async login({ commit }, payload) {
    var data = {
      user_email: payload.loginEmail,
      user_password: payload.loginPassword,
    };
    await axios
      .post("/api/v1/users/login", data)
      .then((res) => {
        commit("SET_USER", res.data.data);
        //this.$router.push(`/profile/${res.data.data.user_id}`);
      })
      .catch((error) => console.log(error));
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
      
      return response.data.data
     
    } catch (error) {
      if (error.response.data.message == "jwt expired") {
        dispatch("refresh_token", { cb: "getRole", datas: payload });
      }
    }
  },
  async refresh_token({ commit,getters }, payload) {
    try {
      const { cb, datas } = payload;
      let token = getters.getUser;
      
      const response = await axios.post(
        "/api/v1/users/refreshtoken",
        '',
        {
          headers: {
            Authorization: "Baerer " + token.refresh_token,
          },
        }
      );
      commit('SET_ACCESS_TOKEN',response.data)
      dispatch(cb,datas)
    
    } catch (error) {
        router.push('/')
        
    }
  },
};
