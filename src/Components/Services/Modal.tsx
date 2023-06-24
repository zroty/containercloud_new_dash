import React from "react";

interface settings {
    show: React.FC,
    updateShow: React.FC
}

export default function Modal(settings: settings) {

    const [currentValue, updateValue] : any = React.useState<number>(0);

    return (
        <>
            <div className="modal modal-bottom modal-open sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Információ a következő szolgálatatásról: SERVICES-1</h3>
                    <div className="mt-6">
                        <div className="flex flex-col justify-center items-center space-y-6">
                            <div>
                                <p className="font-poppins_regular text-[18px] text-center font-semibold">CPU beállítás</p>
                                <div className="mt-2">
                                    <input type="range" min="25" max="125" defaultValue={currentValue} onChange={(e) => updateValue(e.target.value)} className="range" step="25" />
                                    <div className="w-[300px] flex justify-between text-xs px-2">
                                        <span>50%</span>
                                        <span>100%</span>
                                        <span>200%</span>
                                        <span>300%</span>
                                        <span>400%</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="font-poppins_regular text-[18px] text-center font-semibold">Memória beállítás</p>
                                <div className="mt-2">
                                    <input type="range" min="25" max="125" defaultValue={currentValue} onChange={(e) => updateValue(e.target.value)} className="range" step="25" />
                                    <div className="w-[300px] flex justify-between text-xs px-2">
                                        <span>512MB</span>
                                        <span>1024MB</span>
                                        <span>2048MB</span>
                                        <span>4096MB</span>
                                        <span>5012MB</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="font-poppins_regular text-[18px] text-center font-semibold">Tárhely beállítás</p>
                                <div className="mt-2">
                                    <input type="range" min="25" max="125" defaultValue={currentValue} onChange={(e) => updateValue(e.target.value)} className="range" step="25" />
                                    <div className="w-[300px] flex justify-between text-xs px-2">
                                        <span>5GB</span>
                                        <span>10GB</span>
                                        <span>15GB</span>
                                        <span>20GB</span>
                                        <span>30GB</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <div className="input-group">
                                        <input type="text" placeholder="Docker image telepítés" className="input input-bordered" />
                                        <button className="btn btn-accent">Végrehajtás</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <button className="btn btn-primary text-[11px]">Vásárlás (Konténereid száma: 0 | Bérelhető konténer: 0)</button>
                        <button onClick={() => settings.updateShow(!settings.show)} className="btn btn-error">Bezárás</button>
                    </div>
                </div>
            </div>
        </>
    )
}