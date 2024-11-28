/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/database';
import User from '@/models/user.model';

export const AuthOptions : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id:'credentials',
            name:'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials:any) : Promise<any>{
                await connectDB();
                try {
                    const user = await User.findOne({
                        $or:[
                            {email: credentials.identifier},
                            {username: credentials.identifier}
                        ]
                    });

                    if(!user){
                        throw new Error('No user found with this email');
                    }

                    const isValidPassword = await bcrypt.compare(credentials.password,user.password);

                    if(isValidPassword){
                        return user;
                    } else {
                        throw new Error('Incorrect password');
                    }

                } catch (err:any) {
                    throw new Error(err);
                }
            }
        }),
    ],
    callbacks:{
        async jwt({token, user}) {
            if (user) {
                token._id = user._id?.toString(); // Convert ObjectId to string
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id;
            }
            return session;
        },
    },
    session:{
        strategy:'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:'/sign-in'
    },
}