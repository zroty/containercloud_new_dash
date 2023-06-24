
import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import Modal from "../Components/Services/Modal";
import Config from "../WEB_CONFIG.json"
import { io } from "socket.io-client";
export default function Services() {
    const [currentWidth, updateWidth] : any = useState<number>(window.innerWidth);
    const [onMobile, updateOnMobile] : any  = useState<boolean>(false);

    const [stateModal, updateModalState] : any = useState<boolean>(true);

    const [socket, updateSocket] : any = useState(null);


    useEffect(() => {
        updateSocket(io(Config.backend_socket, {transports: ["websocket"], autoConnect: true}).connect())
    }, [])

    React.useEffect(() => {
        if (!socket) return;

        socket.emit("get_users", true);
        socket.on("res:get_users", (data : any) => {
            console.log(data);
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
                    <Navbar width={currentWidth} isOnMobile={onMobile}/>
                </div>
                <div className="flex flex-1 min-h-screen flex-col items-center">
                    {stateModal && (
                        <Modal updateShow={updateModalState} show={stateModal}/>
                    )}
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 m-12">
                        <div className="bg-[#1B2130] h-[550px] w-[200px] md:h-[400px] md:w-[350px] rounded-3xl">
                            <p className="text-center font-poppins_regular m-2 font-semibold text-[20px]">SERVICES 1</p>

                            <p className="font-poppins_regular m-6 text-center">Bármilyen docker image használható hozzá. Ha nem szerepel az a docker image a listánk között bármikor telepitheted nálunk.</p>

                            <p className="font-poppins_regular text-center mt-16">Érdekel esetleg a csomag? Vagy több információt szeretnél megtudni róla?</p>

                            <div className="flex flex-col justify-center items-center">
                                <button onClick={() => updateModalState(true)} className="btn btn-primary m-4">Csomag megtekintése</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}