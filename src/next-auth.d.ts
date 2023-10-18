import NextAuth from "next-auth/next";

declare module "next-auth"{
    interface session{
        user: {
            _id: string,
            name: string,
            email: string,
            role: string,
            token: string
        }
    }
}