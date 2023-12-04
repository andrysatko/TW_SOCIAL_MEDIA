import Logo from '../../../public/logo.svg'
import Name from '../../../public/name.svg'
import Image from 'next/image';
import LoginModal from "@/components/Modals/LogInModal";
export default function NavBar() {
    return (
        <div className=" w-full h-1/4 border border-gray-400 shadow-md flex justify-between flex-row items-center pb-2 pt-2 rounded-xl">
            <div className="ml-2 flex flex-row">
                <Image src={Logo}></Image>
                <Image src={Name} width={34}></Image>
            </div>
            <div className="md:w-3/4 lg:w-1/2 sm:w-4/6 w-1/2 2xl:w-1/3">
                <div className="relative h-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                        <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" className="outline-none block h-9 w-full  ps-10 text-sm text-gray-900 border border-gray-500 rounded-2xl bg-gray-50 " placeholder="Search..." />
                </div>
            </div>
            <LoginModal></LoginModal>
        </div>
    )
}