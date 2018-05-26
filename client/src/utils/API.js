import axios from "axios";

export default {
  sendEmail : function(obj) {
    return axios.post(`/email/send`, {
      data: obj
    });
  }
};
