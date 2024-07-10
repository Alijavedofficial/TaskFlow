import { getReq } from "@/lib/utils";

export default async function CompWithFetch() {
  const data = await getReq();
  console.log("Server", data);
  return <h1>{JSON.stringify(data)}</h1>;
}