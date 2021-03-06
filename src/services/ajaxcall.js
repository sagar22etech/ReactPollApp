import Axios from "axios";
import baseurl from "../config/config";
export default function callAjax(URL, method, data, header) {
  const url = baseurl + URL;
  if (method === "GET") {
    return Axios.get(url, data);
  } else if (method === "DELETE") {
    return Axios.delete(url, data);
  } else if (method === "POST") {
    return Axios.post(url, data, header);
  } else {
    return Axios.put(url, data);
  }
}
