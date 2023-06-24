import {
    ExclamationCircleIcon,XCircleIcon 
} from "@heroicons/react/24/outline"

interface Props {
    state: any,
    controlState: any,
    message: any
}

export function ErrorNotification(Props: Props) {
    return (
        Props.state ? (
            <>
                <div className="w-full h-[150px] flex items-center justify-center">
                    <div className="w-2/4 alert alert-error mb-3 absolute top-5 left-2/4 -translate-x-2/4">
                        <div>
                            <ExclamationCircleIcon className="w-6 h-6"/>
                            <p>
                                <strong>Hiba történt: </strong>
                                {Props.message.length > 0 ? Props.message : "Ismeretlen hiba."}
                            </p>
                        </div>
                        <button onClick={() => Props.controlState(!Props.state)} className="btn btn-ghost btn-sm btn-circle">
                            <XCircleIcon className="w-6 h-6"></XCircleIcon>
                        </button>
                    </div>
                </div>
            </>
        ) : (
            <></>
        )
    )
}

export function SuccessNotification(Props: Props) {
    return (
        Props.state ? (
            <>
                <div className="w-full h-[150px] flex items-center justify-center">
                    <div className="w-2/4 alert alert-success mb-3 absolute top-5 left-2/4 -translate-x-2/4">
                        <div>
                            <ExclamationCircleIcon className="w-6 h-6"/>
                            <p>
                                <strong>Sikeres művelet: </strong>
                                {Props.message.length > 0 ? Props.message : "Ismeretlen hiba."}
                            </p>
                        </div>
                        <button onClick={() => Props.controlState(!Props.state)} className="btn btn-ghost btn-sm btn-circle">
                            <XCircleIcon className="w-6 h-6"></XCircleIcon>
                        </button>
                    </div>
                </div>
            </>
        ) : (
            <></>
        )
    )
}