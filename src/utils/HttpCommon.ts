// ***********************************************
// © 2022 Latest news next. All Rights Reserved.
// ***********************************************
import axios from "axios";

export default axios.create({
  baseURL: "",
  headers: {
    "Content-type": "application/json",
  },
});
