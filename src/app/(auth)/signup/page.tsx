import { RegisterForm } from "@/features/auth/components/register-form";
import { requireAuth, requireUnauth } from "@/lib/auth-utils";

const Page = async () => {
    await requireUnauth();
    return(
        <div>
            <RegisterForm/>
        </div>
    )
}

export default Page;