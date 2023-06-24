import {
    useState, useEffect
} from "react"
import { Navbar } from "../Components/Navbar";
import Installing from "../Components/Console/Installing";
import { useChart, useChartTickLabel } from '../Components/Console/Chart';
import ChartBlock from '../Components/Console/ChartBlock';
import { Line } from 'react-chartjs-2';
import { CloudArrowDownIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';
import Tooltip from "../Components/Tooltip/tooltip"
import { bytesToString, hexToRgba } from "../lib/helpers";
import { theme } from 'twin.macro';

export default function Console() {
    const [currentWidth, updateWidth] : any = useState<number>(window.innerWidth);
    const [onMobile, updateOnMobile] : any  = useState<boolean>(false);

    const cpu = useChartTickLabel('CPU', 100, '%', 2);
    const memory = useChartTickLabel("Memory", 100, "%", 2);
    const network = useChart('Network', {
        sets: 2,
        options: {
            scales: {
                y: {
                    ticks: {
                        callback(value) {
                            return bytesToString(typeof value === 'string' ? parseInt(value, 10) : value);
                        },
                    },
                },
            },
        },
        callback(opts, index) {
            return {
                ...opts,
                label: !index ? 'Network In' : 'Network Out',
                borderColor: !index ? theme('colors.cyan.400') : theme('colors.yellow.400'),
                backgroundColor: hexToRgba(!index ? theme('colors.cyan.700') : theme('colors.yellow.700'), 0.5),
            };
        },
    });
    
    useEffect(() => {
        window.addEventListener("resize", function() {
            updateWidth(window.innerWidth);
        })
    }, [])

    useEffect(() => {
        setInterval(() => {
            cpu.push(Math.random() * 101)
            memory.push(Math.random() * 101)
            network.push([Math.random() * 256, Math.random() * 256])
        }, 1000)
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

                <div className="bg-[#1B2130] h-[500px] w-[250px] md:w-[800px] mt-12 rounded-2xl">
                    <p className="m-2 font-poppins_regular ">
                        asd
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-x-0 space-y-6 md:space-y-0 md:space-x-6">
                    <div>
                        <button className="btn btn-primary">Konténer elinditása</button>
                    </div>
                    <div>
                        <button className="btn btn-secondary">Konténer újrainditása</button>
                    </div>
                    <div>
                        <button className="btn btn-error">Konténer leállítása</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center md:flex-row mt-6 md:space-x-12 space-y-6 md:space-y-0">
                    <div className="">
                        <ChartBlock  title="CPU usage">
                            <Line {...cpu.props} />
                        </ChartBlock>
                    </div>
                    <div className="">
                        <ChartBlock  title="memoria usage">
                            <Line {...memory.props} />
                        </ChartBlock>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-6 m-6">
                    <ChartBlock
                        title="cpu fasz"
                        legend={
                            <>
                                <Tooltip arrow content={"InBound"}>
                                    <CloudArrowDownIcon className="mr-2 h-4 w-4 text-yellow-400" />
                                </Tooltip>
                                <Tooltip arrow content={"OutBound"}>
                                    <CloudArrowUpIcon className="mr-2 h-4 w-4 text-yellow-400" />
                                </Tooltip>
                            </>
                        }
                    >
                        <Line {...network.props} />
                    </ChartBlock>
                </div>


                {/* <ChartBlock title={'CPU Load'}>
                    <Line {...cpu.props} />
                </ChartBlock> */}


                </div>
            </div>
        </>
    )
}