export default function CpuCoolerPrint({ partsInfo }) {
    return (
        <div className='row'>
            <div class="col-2">
                <div>タイプ </div>
                <div>{partsInfo.type}</div>
            </div>
            <div className='col-4'>
                <div>Intel ソケット</div>
                <div>{partsInfo.intelSocket}</div>
            </div>
            <div className='col-4'>
                <div>AMD ソケット</div>
                <div>{partsInfo.AmdSocket}</div>
            </div>
            <div className='col-2'>
                <div>サイズ</div>
                <div>{partsInfo.size}</div>
            </div>
        </div>
    );
}
