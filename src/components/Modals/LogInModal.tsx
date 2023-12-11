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
                <Dialog open={open} handler={handleOpen} className="h-2/3 flex flex-col items-center w-1/2 lg:w-1/4">
                    <DialogHeader>
                        {view === "login" && "Login"}
                        {view === "signup" && "Sign Up"}
                        {view === "resetPassword" && "Reset Password"}
                    </DialogHeader>
                    {view === "login" && <LoginBody handleOpen={handleOpen}></LoginBody>}
                </Dialog>
            </ThemeProvider>
        </>
    );
}



