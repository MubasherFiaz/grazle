import axios from "axios";

export const OnRegister = (values) => {
  console.log("Success:", values.email);
  const formData = new FormData();
  formData.append("email", values.email);
  formData.append("password", values.password);
  formData.append("c_password", values.c_password);
  formData.append("name", values.name);
  axios
    .post(`https://aquaconcepts78.fr/grazleBackend/api/register`, formData)
    .then(({ data }) => {
      localStorage.setItem("login_token", data.success.token);
      return data;
    })
    .catch(({ response }) => {
      return response;
    });
};

export const onLogin = async (values) => {
  const formData = new FormData();
  formData.append("type", 'phone');
  formData.append("country_code", '12');
  formData.append("mobile", '03095090605');
  formData.append("name", 'mobi');
  formData.append("email", values.email);
  formData.append("password", values.password);
  return new Promise(async (resolve, reject) => {
    try {
      axios
        .post(
          `https://aquaconcepts78.fr/grazleBackend/api/register`,
          formData,
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        )
        .then(({ data }) => {
          console.log("data", data);
          resolve(data);
        })
        .catch(({ response }) => {
          resolve("error");
        });
    } catch (err) {
      reject(err);
    }
  });
};
export const globalApi = async (api) => {
 
  return new Promise(async (resolve, reject) => {
    try {
      axios
        .get(
          api,
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        )
        .then(({ data }) => {
         
          resolve(data);
        })
        .catch(({ response }) => {
          resolve("error");
        });
    } catch (err) {
      reject(err);
    }
  });
};
