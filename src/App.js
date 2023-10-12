import './App.css';
import PartsPrint from "./parts/PartsPrint";



function App() {
  return (
    <div className="App">
      Learn React
      <div>
        <div class="display-3">pc customize sim </div>
        <PartsPrint partsInfo={cpuInfo} />
        <PartsPrint partsInfo={mbInfo} />
        <PartsPrint partsInfo={memInfo} />
        <PartsPrint partsInfo={cpuCoolerInfo} />
      </div>
    </div>
  );
}

export default App;




const cpuInfo = {
  kind: "cpu",
  id: "K0001172062",
  maker: 'AMD',
  name: 'Ryzen 5 3600 BOX',
  core: '6',
  thread: '12',
  price: '18334'
};

const mbInfo = {
  kind: "mb",
  id: "K0001172565",
  maker: 'ASRock',
  name: 'X570 Phantom Gaming 4',
  formFactor: 'ATX',
  socket: 'SocketAM4',
  chipset: 'AMD X570',
  memoryType: 'DIMM DDR4',
  price: '26800'
};

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

const cpuCoolerInfo = {
  kind: "cpuCooler",
  id: "K0000966603",
  maker: 'サイズ',
  name: '虎徹 MarkII SCKTT-2000',
  intelSocket: 'LGA 2011-3/2011/1200/1151/1150/1155/1156/1366/775',
  AmdSocket: 'AM4/AM3+/AM3/AM2+/AM2/FM2+/FM2/FM1',
  type: 'サイドフロー型',
  size: '120x120x27mm',
  price: '3329'
};
