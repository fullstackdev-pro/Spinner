import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const notify = (args) => toast(`${args} 0 dan kichik bo'la olmaydi!!!`);
  const [vaqt, setVaqt] = useState(0);
  const [timer, setTimer] = useState(0);
  const [radius, setRadius] = useState(0);
  const [tezlik, setTezlik] = useState(0);
  const [start, setStart] = useState(false);
  const [davr, setDavr] = useState(0);
  const [chastota, setChastota] = useState(0);
  const [orttezlik, setOrttezlik] = useState(0);
  const [burtezlik, setBurtezlik] = useState(0);
  const [ayltezlik, setAyltezlik] = useState(0);
  const counterRef = useRef(null);

  const handleChangeVaqt = (event) => {
    if (event.target.value < 0) {
      notify("Vaqt");
    } else {
      setVaqt(event.target.value);
      setTimer(event.target.value);
    }
  };

  const handleChangeRadius = (event) => {
    if (event.target.value < 0) {
      notify("Radius");
    } else {
      setRadius(event.target.value);
    }
  };

  const handleChangeTezlik = (event) => {
    if (event.target.value < 0.1) {
      notify("Tezlik");
    } else {
      setTezlik(event.target.value);
    }
  };

  function Started() {
    if ((!vaqt && !tezlik) || start) {
      return;
    }
    counterRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    setStart(true);
    let T = vaqt / tezlik;
    setDavr(T);
    let f = tezlik / (2 * Math.PI * radius);
    setChastota(f);
    let v = 2 * Math.PI * radius * f;
    setOrttezlik(v);
    let w = 2 * Math.PI * f;
    setBurtezlik(w);
  }
  const Stoped = () => {
    setStart(false);
    setVaqt((prev) => prev);
    clearInterval(counterRef.current);
  };
  useEffect(() => {
    if (timer == 0) {
      clearInterval(counterRef.current);
      setStart(false);
      setVaqt(0);
    }
  }, [timer]);
  return (
    <div className="xl:flex xl:justify-between xl:my-12 xl:mx-12 overflow-x-hidden ">
      <ToastContainer />
      <div
        className="xl:py-20 xl:w-[60%] xl:h-[100%] border-[1px] xl:border-r-0 border-black relative
        flex justify-center items-center rounded-tr-lg xl:rounded-tr-none rounded-tl-lg xl:rounded-bl-lg"
      >
        <div className="absolute text-xl bottom-4 right-4 xl:bottom-8 xl:right-8">
          {timer}
        </div>
        <div>
          {vaqt > 1 && start ? (
            <div
              className="xl:w-[24rem] xl:h-[24rem] animate-spin "
              style={{ animation: `spin ${chastota}s linear infinite` }}
            >
              <img
                src="https://pngimg.com/uploads/spinner/spinner_PNG56.png"
                alt="spinner"
                className="w-full h-full "
              />
            </div>
          ) : (
            <div className="xl:w-[24rem] xl:h-[24rem]">
              <img
                src="https://pngimg.com/uploads/spinner/spinner_PNG56.png"
                alt="spinner"
                className="w-full h-full "
              />
            </div>
          )}
        </div>
      </div>

      <div
        className="xl:w-[40%] xl:h-full bg-blue-50 border-[1px] border-black text-center 
      xl:rounded-tr-lg rounded-br-lg pb-12"
      >
        <div className="border-b-[1px] border-black">
          <div className="py-[2.21rem] text-left pl-12">
            <label htmlFor="davr">Vaqt</label>
            <input
              type="number"
              id="davr"
              className="ml-[4.5rem] pl-4 rounded-sm right w-28"
              onChange={handleChangeVaqt}
              required
              value={vaqt}
            />{" "}
            sekund
            <br /> <br />
            <label htmlFor="radius">Radius </label>
            <input
              type="number"
              id="radius"
              className="ml-[3.4rem] pl-4 rounded-sm w-28"
              onChange={handleChangeRadius}
              required
              value={radius}
            />{" "}
            sm
            <br /> <br />
            <label htmlFor="tezlik">Tezlik, N</label>
            <input
              type="number"
              id="tezlik"
              className="ml-[2.75rem] pl-4 rounded-sm w-28"
              onChange={handleChangeTezlik}
              required
              value={tezlik}
            />
            <br />
            <br />
            <button
              type="submit"
              className="border-2 py-1 px-12 ml-[6.3rem] rounded-lg text-white text-xl bg-green-400"
              onClick={() => {
                Started();
              }}
            >
              Start
            </button>
            <button
              type="submit"
              className="border-2 py-1 px-12 ml-[6.3rem] lg:ml-[1rem] rounded-lg text-white text-xl bg-red-400"
              onClick={() => {
                Stoped();
              }}
            >
              Stop
            </button>
          </div>
        </div>
        <div>
          {vaqt < 1 && !start ? (
            <div className="text-left pl-12 ">
              <div className="pt-[3.5rem]">
                Davr: <span className="pl-[5.5rem]">{davr} sekund.</span>
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
              <div className="mt-4">
                Aylana tezlik:{" "}
                <span className="pl-[2rem]">{ayltezlik} m/s.</span>
              </div>
            </div>
          ) : (
            <div className="xl:h-[15rem]">

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
