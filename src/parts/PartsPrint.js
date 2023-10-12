import CpuCoolerPrint from './CpuCoolerPrint';
import CpuPrint from './CpuPrint';
import MbPrint from './MbPrint';
import MemPrint from './MemPrint'

// const kakakuUrl = "https://kakaku.com/item/"

export default function PartsPrint({ partsInfo }) {
    return (

        <div class="container">

            <div className='row '>
                <div className='col-3'>
                    <span className='Item-Maker'>
                        {partsInfo.maker}
                    </span>
                    <div >
                        <a href={"https://kakaku.com/item/" + partsInfo.id}>

                            {partsInfo.name}
                        </a>
                    </div>
                </div>
                <div className='col-7'>
                    <PartsFork partsInfo={partsInfo} />

                </div>
                <div className='col-2'>
                    <div>最安価格</div>
                    <div>{partsInfo.price}円 </div>
                </div>
            </div>
        </div >
    );
}

function PartsFork(params) {

    switch (params.partsInfo.kind) {
        case "cpu":
            return <CpuPrint partsInfo={params.partsInfo} />
        case "mb":
            return <MbPrint partsInfo={params.partsInfo} />
        case "mem":
            return <MemPrint partsInfo={params.partsInfo} />
        case "cpuCooler":
            return <CpuCoolerPrint partsInfo={params.partsInfo} />
        default:
            return <div>表示するものないよー</div>
    }

}
