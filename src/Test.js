import Parts from './parts/PartsPrint';

export default function Square() {
    return <span>
        <Parts partsInfo={memInfo} />
    </span>;
}


const memInfo = {
    kind: "mem",
    id: "K0001370952",
    maker: 'crucial',
    name: 'CT2K16G4DFRA32A [DDR4 PC4-25600 16GB 2枚組]',
    capacity: '16GB',
    count: '2',
    standard: 'DDR4 SDRAM',
    interface: 'DIMM',
    price: '8970'
};
