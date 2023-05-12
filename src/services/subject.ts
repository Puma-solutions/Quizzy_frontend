import axios from "axios"

const BASEURL = 'https://quizzy-backend-gxw8.onrender.com'

export const requestSubjectList = async () => {
    try {
        return axios({
        method: "GET",
        url: `${BASEURL}/subject`,
    })
    } catch (error) {
      throw error;  
    }
}