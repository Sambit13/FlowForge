import { requireAuth } from "@/lib/auth-utils";

interface PageProps{
    params:Promise<{
        workflowId: string;
    }>
}

//localhost:3000/executions/123
const page = async ({params} : PageProps) => {
    await requireAuth();
    const {workflowId} = await params;
  return (
    <div>Workflow id:{workflowId} </div>
  )
}

export default page