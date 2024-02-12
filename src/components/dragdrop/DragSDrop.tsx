"use client"

import { useEffect, useRef, useState,DragEvent } from "react";

export default function DragAndDrop() {
    const [dragActive, setDragActive] = useState<boolean>(false);
    const inputRef = useRef<any>([])
    const [filesState, setFiles] = useState<File[]>([])

    function calculateTotalSize() {
        let totalSize = 0;
        for(let i = 0; i < filesState.length; i++) {
            totalSize += filesState[i]!.size;
        }
        return totalSize;
    }
    function validateFile(file:File){
        const suportedFormats = ["image/jpeg","image/jpg","image/png","image/gif","video/mp4"]
        return suportedFormats.includes(file.type)
    }
    function handleDragover(e: DragEvent<HTMLDivElement>) {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(true)
    }
    function handleDragLeave(e:DragEvent<HTMLDivElement>){
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
    }
    function handleDrop(e:DragEvent<HTMLDivElement>){
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        const files : FileList | undefined = e.dataTransfer.files;
        if (files && files[0]) {
            let fileSizeLimit = 10000000 - calculateTotalSize();
            if(filesState.length + files.length > 5){
                alert("File limit exceeded. You can only upload up to 5 files")
                return
            }
            for(let i =0 ; i < files.length;i++){
                if(!validateFile(files[i])){
                    alert("File format is not supported")
                    return
                }
                fileSizeLimit -= files[i].size;
                console.log(fileSizeLimit)
                if(fileSizeLimit < 0){
                    alert("File size limit exceeded")
                    return
                }
            }
            setFiles((prevState: any) => [...prevState, ...e.dataTransfer.files]);
        }
    }
    function openFileExplorer(){
        inputRef.current.value = "";
        inputRef.current.click();
    }
    function removeFile(index:number){
        const Spliced = [...filesState];
        Spliced.splice(index,1);
        setFiles([...Spliced])
    }
    function handleChagneInput(e:any){
        e.preventDefault();
        if(e.target.files && e.target.files[0]){
            setFiles((prevState: any) => [...prevState, ...e.target.files]);
        }
    }
    useEffect(() => {console.log(filesState, typeof filesState)},[filesState])
    return (<div className="flex flex-col items-center justify-center w-full bg-red-200">
        <form className={`${dragActive ? "bg-gray-300" : "bg-gray-200"} p-1/4 rounded-lg min-h-[10rem] text-center flex flex-col justify-center w-full`}
            onDragOver={handleDragover}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input onChange={handleChagneInput} ref={inputRef} type="file" className="hidden"  multiple accept=".image/*,video/mp4" />
            <p>
            Drag and drop image or <span className="text-blue-500 cursor-pointer" onClick={openFileExplorer}>Browse</span>
                <div className="flex flex-col items-center p-3">
                    {filesState.map((file, index) => <div key={index} className="flex flex-row items-center justify-center p-1">
                        <span className="text-sm text-black">{file.name}</span>
                        {" "}
                        <span className="text-red-600 text-xs cursor-pointer hover:text-red-500" onClick={() =>{removeFile(index)}}>remove</span>
                    </div>)}
                </div>
            </p>
        </form>
    </div>)
}