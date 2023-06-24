import {
    useState, useEffect
} from "react"
import { Navbar } from "../Components/Navbar";

export default function Containers() {
    const [currentWidth, updateWidth] : any = useState<number>(window.innerWidth);
    const [onMobile, updateOnMobile] : any  = useState<boolean>(false);


    
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
                <div className="flex flex-1 min-h-screen flex-col items-center   ">
                    {/* <p className="font-poppins_regular text-[25px] m-6 font-bold">Nincs egy konténered sem.</p> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center m-6">
                        <div className="bg-[#1B2130] w-[300px] h-[150px] rounded-3xl shadow-2xl">
                            <p className="text-center text-[20px] font-poppins_regular m-2 ">container-1</p>
                            
                            <div className="flex flex-col justify-center items-center m-6">
                                <button className="btn btn-primary">Konténer megtekintése</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}