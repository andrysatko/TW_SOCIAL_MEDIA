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
    const [mutateCallBack, _] = useMutation(query, { variables: loginForm });
    const perFormSignUp = async () => {
        try {
            const { data, errors } = await mutateCallBack()
            if (data) {
                localStorage.setItem("token", `Bearer ${data.login.jwt_token}`);
                handleOpen()
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
            <DialogBody className="w-5/6 text-center">
                By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
                <div className="flex flex-row w-full items-center justify-between text-center">
                    <hr className="w-full border-t border-gray-500 my-8" />
                    <p className="w-24">OR</p>
                    <hr className="w-full border-t border-gray-500 my-8" />
                </div>
                <Input size="md" disabled={false} type="email" placeholder="User name" onChange={value => setLoginForm({ ...loginForm, email: value })}></Input>
                <Input size="md" disabled={false} type="password" placeholder="Password" onChange={value => setLoginForm({ ...loginForm, password: value })}></Input>
                <button onClick={performLogin} className=" w-2/3 mr-3 pl-3 pr-3 h-9  rounded-2xl border border-black bg-orange-700 hover:bg-orange-800 text-white text-sm">
                    Log In
                </button>
                <div className="w-full h-5">
                {errorMessages && <p className="text-lg font-bold text-red-500 self-center">{errorMessages}</p>}
                </div>
            </DialogBody>
        </>
    )
}