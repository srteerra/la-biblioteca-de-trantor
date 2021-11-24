import axios from 'axios'

export const updateUser = ( { commit }, id ) => {
    axios.get(`api/v1/users/${id}`)
    .then(res => {
        commit('GET_USER', res.data)
    })
}