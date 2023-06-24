import Config from "../WEB_CONFIG.json"
import Logo from "../assets/icons/logo.png"
import {menus} from "../Components/Navbar/Menus"
import avatar from "../assets/avatars/user.svg"
import { Tooltip } from "@mui/material"

interface Props {
    width: Number,
    isOnMobile: boolean,
    Image: ArrayBuffer
}

export function Navbar(Props : Props) {
    return (
        Props.isOnMobile ? (
            <div className="bg-[#1B2130] w-[250px] min-h-screen fixed">
                <div className="flex flex-row ml-2 mt-6">
                    <img src={Logo} className="w-16 h-12" />
                    <p className="text-[18px] mt-[10px] font-poppins_regular text-white">{Config.WEB_TITLE}</p>

                    <div className="-ml-[180px] mt-16">
                        {menus.length > 0 && menus.map((d : any) => {
                            return (
                                <>
                                    <div className="flex flex-row space-x-2 mt-6">
                                        <div>
                                            <p className="text-gray-500">{d.icon}</p>

                                        </div>
                                        <div>
                                            <p className="text-[#7F828A] font-poppins_regular">{d.name}</p>
                                        </div>
                                    </div>
                                </>
                            )

                        })}
                    </div>
                </div>
                <div className="absolute bottom-0">
                    <div className="bg-[#262D3B] h-[80px] w-[250px]">
                        <div className="flex flex-row">
                            <div className="m-5">
                                <img src={Props.Image ? `data:image/jpeg;base64,${Props.Image}` : `${avatar}`} className="w-[40px] h-[40px] rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <div className="mt-5 -ml-3">
                                    <p className="font-poppins_regular text-white">Zorty</p>
                                </div>
                                <div className="-mt-1 -ml-3">
                                    <Tooltip title="320241515706187778">
                                        <p className="text-gray-500 font-poppins_regular text-[15px] truncate w-[100px]">320241515706187778</p>
                                    </Tooltip >
                                </div>
                            </div>
                            <div>
                                <div className="mt-7 ml-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
                                        <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="bg-[#1B2130] fixed h-full w-[70px] flex flex-col">
                <div className="justify-center m-2 mt-4">
                    <img src={Logo} />
                </div>

                <div className="mt-8 flex flex-col justify-center items-center space-y-2">
                    {menus.length > 0 && menus.map((d : any) => (
                        <div className="hover:bg-gray-900 w-8 h-8 mx-auto flex flex-col justify-center rounded-full items-center">
                            <Tooltip title={d.name} placement="right-start">
                                <p className="text-gray-500">{d.icon}</p>
                            </Tooltip>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-0">
                    <div className="h-[50px] w-[70px]">
                        <div className="flex flex-col justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-500">
                            <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
                        </svg>
                        </div>

                    </div>
                </div>

            </div>
        )
    )
}