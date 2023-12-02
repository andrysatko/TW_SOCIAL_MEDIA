export default function PostLoader() {
    return (
        <div style={{ height: "500px" }} className="mt-3 h-auto  flex flex-col w-4/5 border-t-2 border-b-2  shadow  mx-auto bg-white rounded-lg border-solid border-2 border-black row-span-2  items-center p-3">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-gray-500 h-14 w-14"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-gray-500 rounded col-span-2"></div>
                            <div className="h-2 bg-gray-500 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-gray-500 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}