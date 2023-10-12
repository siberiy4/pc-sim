export default function MbPrint({ partsInfo }) {
    return (

        <div className='row'>
            <div class="col-4">
                <div>フォームファクタ</div>
                <div>{partsInfo.formFactor}</div>
            </div>
            <div className='col'>
                <div>ソケット</div>
                <div>{partsInfo.socket}</div>
            </div>
            <div className='col-3'>
                <div>チップセット</div>
                <div>{partsInfo.chipset}</div>
            </div>
            <div className='col'>
                <div>メモリ</div>
                <div>{partsInfo.memoryType}</div>
            </div>
        </div>

    );
}
