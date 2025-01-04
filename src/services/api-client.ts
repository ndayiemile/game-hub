import axios from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const create = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "db2cb78ec8714cc8a5d7a5d2bc5839a8",
  },
});

export default create;
