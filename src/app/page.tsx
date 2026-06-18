import { getQueryClient, trpc } from "@/trpc/server";
import  Client  from "./client"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
const page = async() => {

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());
  
  return (
    <div className='flex justify-center items-center min-w-screen min-h-screen'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<p>Loading...</p>}>
          <Client/>
        </Suspense>
        
      </HydrationBoundary>
     
    </div>
  )
}

export default page