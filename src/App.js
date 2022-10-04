import { useState } from "react";

function App() {
  const [vaqt, setVaqt] = useState(0);
  const [radius, setRadius] = useState(0);
  const [aylson, setAylson] = useState(0);
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

  const handleChangeAylson = (event) => {
    setAylson(event.target.value);
  };

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
    <div className="flex justify-between my-10 mx-16 h-[85vh] ">
      <div
        className="p-16 w-[60%] h-[100%] border-[1px] border-r-0 border-black 
    flex justify-center items-center rounded-tl-lg rounded-bl-lg"
      >
        <div
          className="inline-block rounded-full w-[25rem] h-[25rem] animate-spin"
          style={{ animation: `spin ${chastota}s linear infinite` }}
        >
          <div
            className="bg-[url('https://pngimg.com/uploads/spinner/spinner_PNG10.png')] 
        bg-cover bg-no-repeat w-[92%] h-[85%]"
          ></div>
        </div>
      </div>

      <div className="w-[40%] h-full bg-blue-50 border-[1px] border-black text-center rounded-tr-lg rounded-br-lg">
        <div className="border-b-[1px] border-black">
          <div className="py-8 text-left pl-12">
            <label htmlFor="davr">Vaqt, sekund</label>
            <input
              type="number"
              id="davr"
              className="ml-8 pl-4 rounded-sm right"
              onChange={handleChangeVaqt}
              required
            />
            <br /> <br />
            <label htmlFor="radius">Radius, sm</label>
            <input
              type="number"
              id="radius"
              className="ml-[2.9rem] pl-4 rounded-sm"
              onChange={handleChangeRadius}
              required
            />
            <br /> <br />
            <label htmlFor="aylson">Aylana soni, ta</label>
            <input
              type="number"
              id="aylson"
              className="ml-[1.3rem] pl-4 rounded-sm"
              onChange={handleChangeAylson}
              required
            />
            <br /> <br />
            <label htmlFor="tezlik">Tezlik, N</label>
            <input
              type="number"
              id="tezlik"
              className="ml-[3.9rem] pl-4 rounded-sm"
              onChange={handleChangeTezlik}
              required
            />
            <br />
            <br />
            <button
              className="border-2 py-1 px-8 ml-[7rem] rounded-lg "
              onClick={() => {
                Started();
              }}
            >
              Start
            </button>
          </div>
        </div>
        <div className="text-left pl-12">
          <div className="mt-8">
            Davr: <span className="pl-[5.6rem]">{davr} sekund.</span>
          </div>
          <div className="mt-4">
            Chastota: <span className="pl-[3.6rem]">{chastota} Hz.</span>
          </div>
          <div className="mt-4">
            O'rtacha tezlik:{" "}
            <span className="pl-[1.2rem]">{orttezlik} m/s.</span>
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
