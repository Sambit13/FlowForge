"use client"

import { useTRPC } from "@/trpc/client";
import { trpc } from "@/trpc/server";
import { useSuspenseQuery } from "@tanstack/react-query"



export const client = () => {
    const trpc = useTRPC();
    const {data: users} = useSuspenseQuery(trpc.getUsers.queryOptions());
  return (
    <div>client Component: {JSON.stringify(users)}</div>
  )
}

export default client