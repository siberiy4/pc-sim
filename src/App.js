import './App.css';

const exampleCpu = {
  maker: 'AMD',
  name: 'Ryzen 5 3600 BOX',
  core: '6',
  thread: '12',
  price: '18334'
};

function Item() {
  return (
    <div >
      <div>maker: {exampleCpu.maker}</div>
      <h3>{exampleCpu.name}</h3>
      <div>コア数</div>
      <div>{exampleCpu.core}コア</div>
      <div>スレッド数</div>
      <div>{exampleCpu.thread}スレッド</div>
      <div>最安価格</div>
      <div>{exampleCpu.price}円 </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      Learn React
      <div>
        <h1>pc customize sim </h1>
        <Item />
      </div>
    </div>
  );
}

export default App;
