"use client"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    ThemeProvider,
    input
} from "@material-tailwind/react";
import Input from "../inputs/Input";
import { useState } from "react";
import { ApolloError, gql, useMutation } from "@apollo/client";
const query = gql`
mutation SignUp($email:String! , $password:String!){
    signUp(email:$email,password:$password){
      id
    }
  }
`;
export default function SignUpBody({ handleOpen }) {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
        confirm_password: "",
    });
    const [errorMessages, setErrorMessages] = useState<string | undefined>(undefined);
    const [mutateCallBack, _] = useMutation(query, { variables: loginForm});
    const perFormSignUp = async () => {
        try {
            if(loginForm.confirm_password !== loginForm.password){
                setErrorMessages("Password not match")
            }
            const { data, errors } = await mutateCallBack()
            if (data) {
                setErrorMessages(undefined)
                window.location.reload();
            }
        } catch (error) {
            if (error instanceof ApolloError) {
                setErrorMessages(error.graphQLErrors[0].message)
            }
        }
    }
    return (
        <>
                <Input size="md" disabled={false} type="email" placeholder="User name" onChange={value => setLoginForm({ ...loginForm, email: value })}></Input>
                <Input size="md" disabled={false} type="password" placeholder="Password" onChange={value => setLoginForm({ ...loginForm, password: value })}></Input>
                <Input size="md" disabled={false} type="password" placeholder="Confirm password" onChange={value => setLoginForm({ ...loginForm, confirm_password: value })}></Input>
                <button onClick={perFormSignUp} className=" w-2/3 mr-3 pl-3 pr-3 h-9  rounded-2xl border border-black bg-orange-700 hover:bg-orange-800 text-white text-sm">
                    Sign Up
                </button>
                <div className="w-full h-5">
                {errorMessages && <p className="text-lg font-bold text-red-500 self-center">{errorMessages}</p>}
                </div>
        </>
    )
}