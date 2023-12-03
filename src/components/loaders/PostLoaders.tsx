export default function PostLoader() {
    return (
        <div>
            <div style={{ height: "500px" }} className={"animate-pulse shadow-lg rounded-lg border-separate bg-gray-100  row-span-2 flex flex-col items-center p-3"}>
                <div className="w-full  h-auto flex flex-col rounded-md border">
                    <div className="flex flex-row  items-center">
                        <div className="p flex flex-row">
                            <div className='w-10 h-10 rounded-full bg-gray-500' />
                            <div className="flex flex-row">
                                <div className="h-2 w-20 bg-gray-500 rounded col-span-2"></div>
                                <div className="ml-2 h-2 w-14 bg-gray-500 rounded col-span-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 mb-2 ml-2 h-2 w-full bg-gray-500 rounded col-span-1"></div>
                </div>
                <div style={{ height: "500px" }} className={`max-h-[100vw] h-full w-full object-contain overflow-hidden  bg-gray-500 rounded-lg relative`}>
                </div>
                <div className="w-5/6  bg-white flex flex-row mt-1 rounded-md border">
                </div>
            </div>
        </div>
    )
}



