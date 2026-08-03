import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/db";
import { checkout, polar, portal } from "@polar-sh/better-auth"
import { polarClient } from "./polar";

export const auth = betterAuth({
     database: prismaAdapter(prisma,{
        provider: "postgresql",
     }),
     emailAndPassword:{
        enabled: true,
        autoSignIn: true,
     },
     socialProviders:{
        github: {
           clientId: process.env.GITHUB_CLIENT_ID as string,
           clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        google: {
           clientId: process.env.GOOGLE_CLIENT_ID as string,
           clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
     },
   //   plugins:[]
     plugins: [
      polar({
         client: polarClient,
         createCustomerOnSignUp:true,
         use: [
            checkout({
               products: [
                  {
                     productId: "74309045-c65d-4c96-89cf-e2b306cd02c3",
                     slug:"pro",
                  }
               ],
               successUrl: process.env.POLAR_SUCCESS_URL,
               authenticatedUsersOnly: true,
            }),
            portal()
         ],
      })
     ]
});