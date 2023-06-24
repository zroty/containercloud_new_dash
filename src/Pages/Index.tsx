import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import avatar from "../assets/avatars/user.svg"
import Config from "../WEB_CONFIG.json"
import io from "socket.io-client"

interface news {
    id: any,
    title: any,
    description: any,
    created: any
}

interface logs {
    avatar: ArrayBuffer,
    name: string,
    role: string,
    title: string,
    description: string
}

export default function IndexPage() {


    const [currentWidth, updateWidth] : any = useState<number>(window.innerWidth);
    const [onMobile, updateOnMobile] : any  = useState<boolean>(false);
    const [socket, updateSocket] : any = useState(null);
    const [binaryImage, updateBinary] : any = useState<ArrayBuffer>();
    
    const [logs, updateLogs] : any = useState<logs>();
    const [news, updateNews] : any = useState<news>();

    
    useEffect(() => {
        updateSocket(io("ws://127.0.0.1:8081", {transports: ["websocket"]}).connect());
    }, [])

    useEffect(() => {
        if (!socket) return;

        socket.emit("get_news", true);
        socket.emit("get_avatar", true);
        socket.emit("list_logs", true);

        socket.on("avatar_binary", (data : ArrayBuffer) => {
            updateBinary(data);
        })

        socket.on("news", (data : news) => {
            updateNews(data);
        })

        socket.on("logs", (data : logs) => {
            updateLogs(data);
        })


    }, [socket])

    
    
    useEffect(() => {
        window.addEventListener("resize", function() {
            updateWidth(window.innerWidth);
        })
    }, [])

    useEffect(() => {
        if (currentWidth <= 768) {
            updateOnMobile(false)
        } else {
            updateOnMobile(true);
        }
    }, [currentWidth])

    return (
        <>
            <div className="bg-[#000000] flex flex-row">
                <div className="static flex-0 md:w-[250px] w-[70px]">
                    <Navbar width={currentWidth} isOnMobile={onMobile} Image={binaryImage}/>
                </div>
                <div className="flex flex-1 min-h-screen flex-col items-center   ">
                    <div className="bg-[#1B2130] w-[200px] h-[350px] lg:w-[700px] lg:h-[124px] md:w-[500px] md:h-[124px] m-12 rounded-2xl">
                        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-12 items-center">
                            <div className="flex flex-row">
                                <div className="mt-6">
                                    <div className="flex flex-row space-x-2">
                                        <div>
                                            <p className="text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                                </svg>
                                            </p>
                                        </div>
                                        <div className="mt-[1px]">
                                            <p className="text-gray-500 font-poppins_regular text-[13px]">Felhasználók</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white text-center ml-6 font-poppins text-[26px]">1,212</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:mt-6 -mt-12 invisible  md:visible">
                                <div className="border-y-[30px] border ">
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="mt-6">
                                    <div className="flex flex-row space-x-2">
                                        <div>
                                            <p className="text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                                </svg>
                                            </p>
                                        </div>
                                        <div className="mt-[1px]">
                                            <p className="text-gray-500 font-poppins_regular text-[13px]">Konténerek</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white text-center ml-6 font-poppins text-[26px]">1,212</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:mt-6 -mt-12 invisible  md:visible">
                                <div className="border-y-[30px] border ">
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="mt-6">
                                    <div className="flex flex-row space-x-2">
                                        <div>
                                            <p className="text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                                </svg>
                                            </p>
                                        </div>
                                        <div className="mt-[1px]">
                                            <p className="text-gray-500 font-poppins_regular text-[13px]">Műveletek</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white text-center ml-6 font-poppins text-[26px]">1,212</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-x-6 mt-6 justify-center items-center">
                        <div>
                            <div className="overflow-x-auto md:w-[250px] lg:w-full w-[250px]">
                                <table className="table  md:w-full  ">
                                    <thead>
                                        <tr>
                                            <th>Név</th>
                                            <th>Művelet</th>
                                            <th>Leírás</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {logs && logs.map((data : logs) => (
                                        <tr>
                                            <td>
                                                <div className="flex items-center space-x-3 ">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={data.avatar ? `data:image/jpeg;base64,${data.avatar}` : `${avatar}`} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{data.name}</div>
                                                        <span className="badge badge-ghost badge-sm">{data.role}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {data.title}
                                                <br/>
                                            </td>
                                            <td>
                                                {data.description}
                                            </td>
                                        </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bg-[#1B2130] w-[250px] h-[400px] lg:w-[700px] lg:h-[400px] mt-6 -mr-12 rounded-3xl overflow-auto">
                            {news && news.map((d : news) => (
                                <>
                            <div className="mt-6 flex flex-row justify-end m-4">
                            <p className="text-center mx-auto font-poppins_regular text-white">{d.title}</p>
                            <div className="">
                                <p className="font-poppins_regular text-gray-500">{d.created}</p>
                            </div>
                        </div>
                        <div className="m-8">
                            <p className="font-poppins_regular break-words text-[15px]">
                                {d.description}
                            </p>
                        </div>
                        <div className="border-2 w-[650px] mx-auto border-gray-500 m-6">
                        </div>
                        </>
                            ))}

                        </div>


                    </div>
                    {/* <div className="flex flex-col m-2">
                        <div className="bg-[#1B2130] h-[300px] w-[250px]  md:h-[300px] md:w-[400px] rounded-2xl">
                            <p className="text-center font-poppins_regular text-white text-[17px] m-2">
                                Felhasználó meghívása
                            </p>

                            <div className="flex flex-col justify-center items-center">
                                <p className="text-center font-poppins_regular font-bold text-[14px] m-2">
                                    Egy felhasználó meghívásáért extra kreditet kaphatsz amelyet felhasználhatsz az oldalunkon. Ahhoz hogy meghívj valakit, először a linkeddel kell hogy beregisztráljanak.
                                </p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <button className="btn btn-primary mt-4">Link másolása</button>
                            </div>

                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}