import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactorAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // ref hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charactorAllowed) {
      str += "!@#$%^&*?";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charactorAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charactorAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full m-10 p-10 max-w-md mx-auto shadow-md rounded-lg px-4 my-80, bg-gray-700 text-center">
        <h1 className="text-2xl mb-3 text-center">password generator </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3 text-black"
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-700 p-2 active:bg-blue-500"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm grap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={15}
              className="cursor-pointer"
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className=" text-orange-500" htmlFor="">
              Length : {length}
            </label>
          </div>

          <div className="ml-3 flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className=" text-orange-500" htmlFor="numberInput">
              Numbers
            </label>
          </div>

          <div className="flex ml-3 items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charactorAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className=" text-orange-500" htmlFor="characterInput">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
