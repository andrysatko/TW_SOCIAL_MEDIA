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
import { gql, useMutation } from "@apollo/client";;
const query = gql`
mutation LogIn($email:String! , $password:String!){
    login(email:$email,password:$password){
      jwt_token
    }
  }
`;
export default function LoginBody({handleOpen}) {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const [mutateCallBack,_] = useMutation(query, { variables: loginForm });
    const performLogin = async () => {
            const {data} = await mutateCallBack()
            if(data){console.log(data.login.jwt_token);localStorage.setItem("token", `Bearer ${data.login.jwt_token}`);;handleOpen()}
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
                <Input size="md" disabled={false} type="email" placeholder="User name" onChange={value=>setLoginForm({...loginForm,email:value})}></Input>
                <Input size="md" disabled={false} type="password" placeholder="Password" onChange={value=>setLoginForm({...loginForm,password:value})}></Input>
            </DialogBody>
            <DialogFooter className="w-2/3">
                <button onClick={performLogin} className="w-full mr-3 pl-3 pr-3 h-9  rounded-2xl border border-black bg-orange-700 hover:bg-orange-800 text-white text-sm">
                    Log In
                </button>
            </DialogFooter>
        </>
    )
}