import getBaseUrl from "./getBase";
import axios from "axios";

export const instance = axios.create({
  baseURL: getBaseUrl(),
  timeout: 60000,
  withCredentials: false
});
