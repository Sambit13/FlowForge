import type { NodeExecutor } from "@/features/executions/types";
import { NonRetriableError } from "inngest";
import Ky, {type Options as KyOptions } from "ky";

type HttpRequestData = {
  endpoint?: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: string;
};


export const HttpRequestExecutor: NodeExecutor<HttpRequestData> = async ({
  data,
  nodeId,
  context,
  step,
}) => {
  // TODO: Publish "loading" state for HTTP request

  if(!data.endpoint){
    //TODO: publish error state for HTTP request
    throw new NonRetriableError("HTTP Request node: No endpoint configured");
  }

  const result = await step.run("http-request", async() => {
    const endpoint = data.endpoint!;
    const method = data.method || "GET";

    const options: KyOptions = {method};

    if(["POST", "PUT", "PATCH"].includes(method)){
        options.body = data.body;
    }

    const response = await Ky(endpoint, options);
    const contentType = response.headers.get("content-type");
    const responseData = contentType?.includes("application/json")
      ? await response.json()
      : await response.text();


    return{
      ...context,
      httpResponse: {
        status: response.status,
        statusText: response.statusText,
        data: responseData
      }
    }
  });

  // const result = await step.run("http-request", async () => context);

  // TODO: Publish "success" state for HTTP request
  return result;
};
