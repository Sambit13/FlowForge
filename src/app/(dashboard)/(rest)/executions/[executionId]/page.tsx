import { requireAuth } from "@/lib/auth-utils";

interface PageProps{
    params:Promise<{
        executionId: string;
    }>
}

//localhost:3000/executions/123
const page = async ({params} : PageProps) => {
  await requireAuth();
    const {executionId} = await params;
  return (
    <div>Execution id:{executionId} </div>
  )
}

export default page