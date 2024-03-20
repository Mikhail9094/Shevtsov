import axios from "axios";
import { IData } from "./types";

const baseURL = "https://www.cbr-xml-daily.ru/daily_json.js";

export const getData = (): Promise<IData> => {
  return axios.get(baseURL).then((response) => response.data);
};
