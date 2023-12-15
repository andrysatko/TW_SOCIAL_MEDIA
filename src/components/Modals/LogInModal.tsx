"use client"
import React, { useState } from "react";
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
import { setModalView } from "@/redux/features/motalViewSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import LoginBody from "./LoginBody";
import CloseModalSvg from "../../../public/close.svg";
import Image from "next/image"
import SignUpBody from "./SignUpBody";
export default function LoginModal() {
    const { open, view } = useAppSelector((state) => state.modalView);
    const dispatch = useAppDispatch();
    const handleOpen = () => dispatch(setModalView({ open: !open }))

    return (
        <>
            <button onClick={handleOpen} className="mr-3 pl-3 pr-3 h-9  rounded-2xl border border-black bg-orange-700 hover:bg-orange-800 text-white text-xs sm:text-sm md:text-lg lg:text-xl">
                Log In
            </button>
            <ThemeProvider>
                <Dialog open={open} handler={handleOpen} className="h-5/6 w-full md:w-2/3 md:h-2/3 lg:h-2/3 lg:w-1/2 flex flex-col items-center">
                    <DialogHeader className="flex flex-col w-full">
                        <div className="flex flex-row-reverse w-full">
                            <button className="h-10 w-10 rounded-full bg-gray-400 hover:bg-gray-300 flex justify-center items-center" onClick={handleOpen}>
                                <Image src={CloseModalSvg} alt="close modal" />
                            </button>
                        </div>
                        <div className="-ml-1">
                            {view === "login" && "Login"}
                            {view === "signup" && "Sign Up"}
                            {view === "resetPassword" && "Reset Password"}
                        </div>
                    </DialogHeader>
                    <DialogBody className="w-5/6 text-center">
                        By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
                        <div className="flex flex-row w-full items-center justify-between text-center">
                            <hr className="w-full border-t border-gray-500 my-8" />
                            <p className="w-24">OR</p>
                            <hr className="w-full border-t border-gray-500 my-8" />
                        </div>
                        {view === "login" && <LoginBody handleOpen={handleOpen}></LoginBody>}
                        {view === "signup" && <SignUpBody handleOpen={handleOpen}></SignUpBody>}
                    </DialogBody>
                    <DialogFooter className="w-5/6 flex-col items-center">
                        <div className="flex flex-row">
                            {view === "login" && <>New to Reddit?  <button className="text-orange-500 hover:text-orange-900" onClick={() => { dispatch(setModalView({ view: "signup" })) }}>Sign up</button></>}
                            {view === "signup" && <>Already a redditor?  <button className="text-orange-500 hover:text-orange-900" onClick={() => { dispatch(setModalView({ view: "login" })) }}>Log in</button></>}
                        </div>
                    </DialogFooter>
                </Dialog>
            </ThemeProvider>
        </>
    );
}



