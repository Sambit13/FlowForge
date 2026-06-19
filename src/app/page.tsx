import { requireAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";

const page = async () => {

  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className='flex flex-col gap-y-6 justify-center items-center min-w-screen min-h-screen'>
      Protected server component
      <div>
      {JSON.stringify(data)}
      </div>
      <LogoutButton/>
    </div>
  )
}

export default page