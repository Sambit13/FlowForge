import { requireAuth } from "@/lib/auth-utils";

interface PageProps{
    params:Promise<{
        credentialId: string;
    }>
}

//localhost:3000/credentials/123
const page = async ({params} : PageProps) => {
    await requireAuth();
    const {credentialId} = await params;
  return (
    <div>Credential id:{credentialId} </div>
  )
}

export default page