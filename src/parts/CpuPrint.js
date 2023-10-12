export default function CpuPrint({partsInfo}) {
    return (
        <div className='row'>
            <div className="col-4">
                <div>コア数</div>
                <div>{partsInfo.core}コア</div>
            </div>
            <div className='col-4'>
                <div>スレッド数</div>
                <span>{partsInfo.thread}スレッド</span>
            </div>
        </div>
    );
}
