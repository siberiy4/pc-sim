export default function MemPrint({ partsInfo }) {
    return (
        <div className='row'>
            <div class="col-4">
                <div>メモリ容量(1枚あたり) </div>
                <div>{partsInfo.capacity}</div>
            </div>
            <div className='col'>
                <div>枚数</div>
                <div>{partsInfo.count}枚</div>
            </div>
            <div className='col-3'>
                <div>企画</div>
                <div>{partsInfo.standard}</div>
            </div>
            <div className='col'>
                <div>インターフェイス</div>
                <div>{partsInfo.interface}</div>
            </div>
        </div>
    );
}
