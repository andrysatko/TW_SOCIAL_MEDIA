"use client"
import { useState } from "react";
import DragAndDrop from "../dragdrop/DragSDrop";

export default function AddPostSecation() {
    const [value , setValues] = useState<string>("")
    return (<div className="mx-auto bg-white rounded-xl shadow-md  border border-black flex flex-col h-auto">
    <input className="w-full h-1/3" type="text" value={value} onChange={e=>  setValues(e.target.value)}/>
    <DragAndDrop></DragAndDrop>
    </div>)
}