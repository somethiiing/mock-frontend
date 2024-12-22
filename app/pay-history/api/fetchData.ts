import { Data } from "./Data.model";
import { data } from "./data";

export async function fetchData(): Promise<Data[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
