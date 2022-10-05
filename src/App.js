import { useState } from "react";

function App() {
  const [vaqt, setVaqt] = useState(0);
  const [radius, setRadius] = useState(0);
  // const [aylson, setAylson] = useState(0);
  const [tezlik, setTezlik] = useState(0);

  const [davr, setDavr] = useState(0);
  const [chastota, setChastota] = useState(0);
  const [orttezlik, setOrttezlik] = useState(0);
  const [burtezlik, setBurtezlik] = useState(0);

  const handleChangeVaqt = (event) => {
    setVaqt(event.target.value);
  };

  const handleChangeRadius = (event) => {
    setRadius(event.target.value);
  };

  // const handleChangeAylson = (event) => {
  //   setAylson(event.target.value);
  // };

  const handleChangeTezlik = (event) => {
    setTezlik(event.target.value);
  };

  function Started() {
    if(!vaqt && !tezlik) {
      return 
    }
    let T = vaqt / tezlik;
    setDavr(T);
    let f = 1 / T;
    setChastota(f);
    let v = 2 * Math.PI * radius * f;
    setOrttezlik(v);
    let w = 2 * Math.PI * f;
    setBurtezlik(w);
  }

  return (
    <div className="xl:flex xl:justify-between xl:my-10 xl:mx-16 overflow-x-hidden">
      <div
        className="xl:p-16 xl:w-[60%] xl:h-[100%] border-[1px] xl:border-r-0 border-black 
        flex justify-center items-center rounded-tr-lg xl:rounded-tr-none rounded-tl-lg xl:rounded-bl-lg"
      >
        <div
          className="xl:w-[25rem] xl:h-[25rem] animate-spin "
          style={{ animation: `spin ${chastota}s linear infinite` }}
        >
          <img src="https://pngimg.com/uploads/spinner/spinner_PNG56.png" alt="spinner" 
          className="w-full h-full "/>
        </div>
      </div>

      <div className="xl:w-[40%] xl:h-full bg-blue-50 border-[1px] border-black text-center 
      xl:rounded-tr-lg rounded-br-lg pb-12">
        <div className="border-b-[1px] border-black">
          <div className="py-8 text-left pl-12">
            <label htmlFor="davr">Vaqt</label>
            <input
              type="number"
              id="davr"
              className="ml-[4.5rem] pl-4 rounded-sm right w-32"
              onChange={handleChangeVaqt}
              required
            /> sekund
            <br /> <br />
            <label htmlFor="radius">Radius </label>
            <input
              type="number"
              id="radius"
              className="ml-[3.4rem] pl-4 rounded-sm w-32"
              onChange={handleChangeRadius}
              required
            /> sm
            <br /> <br />
            <label htmlFor="aylson">Aylana soni </label>
            <input
              type="number"
              id="aylson"
              className="ml-[1.4rem] pl-4 rounded-sm w-32"
              // onChange={handleChangeAylson}
              required
            /> ta
            <br /> <br />
            <label htmlFor="tezlik">Tezlik </label>
            <input
              type="number"
              id="tezlik"
              className="ml-[3.9rem] pl-4 rounded-sm w-32"
              onChange={handleChangeTezlik}
              required
            /> N
            <br />
            <br />
            <button
              className="border-2 py-1 px-12 ml-[6.3rem] rounded-lg text-white text-xl bg-green-400"
              onClick={() => {
                Started();
              }}
            >
              Start
            </button>
          </div>
        </div>
        
        <div className="text-left pl-12 pb-[0.45rem]">
          <div className="mt-8">
            Davr: <span className="pl-[5.65rem]">{davr} sekund.</span>
          </div>
          <div className="mt-4">
            Chastota: <span className="pl-[3.6rem]">{chastota} Hz.</span>
          </div>
          <div className="mt-4">
            O'rtacha tezlik:{" "}
            <span className="pl-[1.3rem]">{orttezlik} m/s.</span>
          </div>
          <div className="mt-4">
            Burchak tezlik:{" "}
            <span className="pl-[1.4rem]">{burtezlik} rad/s.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
