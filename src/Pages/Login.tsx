import {Discord} from "../assets/icons/discord"
import Config from "../WEB_CONFIG.json"
export default function Login() {


    return (
        <>
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col bg-[#4D47C3] w-[250px] h-[450px] md:w-[600px] md:h-[300px] rounded-2xl shadow-2xl">
                    <p className=" text-white text-center text-[20px] font-poppins">Login to Auth</p>

                    <div className="mt-6 mx-auto">
                        <p className="text-center m-8 -mt-2 text-white font-poppins_regular">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore voluptate quae illo ratione, corrupti aperiam. Nam, animi. Obcaecati labore vitae ratione quia, tenetur soluta rem quis voluptate magnam nisi.
                        </p>
                    </div>

                    <div className="mt-2 flex flex-row justify-center items-center">
                        <div onClick={() => window.location.href = Config.backend_http + "/"} className="btn btn-secondary flex space-x-2 flex-row">
                            <div className="w-6 h-6">
                                <Discord/>
                            </div>
                            <div>
                                Login with Discord
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}