import axios from "axios";

export const OnRegister = async (values) => {
  const formData = new FormData();
  formData.append("type", "phone");
  formData.append("country_code", values.code);
  formData.append("mobile", values.number);
  formData.append("email", values.email);
  formData.append("password", values.password);
  formData.append("c_password", values.confirmPassword);
  formData.append("name", values.fullName);
  try {
    const response = await axios.post(
      `https://aquaconcepts78.fr/grazleBackend/api/register`,
      formData
    );

    localStorage.setItem("login_token", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const onLogin = async (values) => {
  const formData = new FormData();
  formData.append("identity", values.email);
  formData.append("password", values.password);
  try {
    const response = await axios.post(
      `https://aquaconcepts78.fr/grazleBackend/api/login`,
      formData,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );

    localStorage.setItem("login_token", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    throw error;
  }
};
// export const globalApi = async (api) => {
//   try {
//     const response = await axios.get(api, {
//       headers: {
//         "X-Requested-With": "XMLHttpRequest",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     // Handle error
//     console.error("Error fetching data:", error);
//     throw error; // Re-throw the error to propagate it
//   }
// };
export const globalApi = async (api, method = "GET", data = null) => {
  try {
    const config = {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    };

    if (method === "GET") {
      config.params = data;
    }

    const response = await axios.request({
      url: api,
      method: method,
      data: data,
      ...config,
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to propagate it
  }
};
