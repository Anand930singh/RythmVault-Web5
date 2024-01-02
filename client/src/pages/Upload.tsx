import { useState, ChangeEvent } from "react";
import FileInput from "../components/FileInput";

export default function Upload() {
  const [Id, setId] = useState("");
  const [Price, setPrice] = useState("");
  const [Desc, setDesc] = useState("");

  const handleSetId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handleSetPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleSetDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  return (
    <div className="koHo-font text-slate-100">
      <div className="bg-slate-950 px-8 w-full flex flex-col pt-32 min-h-[100dvh] ">
        <div className="p-10">
          <h1 className="text-4xl font-extrabold underline">
            Drop a colletion
          </h1>
          <h4 className="text-xl">Launch your NFT on RhythmVault </h4>
        </div>
        <div className="px-10 mb-10">
          <FileInput />
        </div>
        <div className="px-10 flex flex-col sm:flex-row justify-between">
          <div className="mb-4">
            <label className="block text-white text-2xl font-bold mb-2">
              Unique Id
            </label>
            <input
              type="text"
              placeholder="Character / Number / Special Character"
              value={Id}
              onChange={handleSetId}
              className="appearance-none bg-transparent border border-white rounded w-72 sm:w-96 py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label className="block text-white text-2xl font-bold mb-2">
              Price
            </label>
            <input
              type="text"
              placeholder="In Dollars"
              value={Price}
              onChange={handleSetPrice}
              className="appearance-none bg-transparent border border-white rounded w-72 sm:w-96 py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="px-10 mb-4">
          <label className="block text-white text-2xl font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            placeholder="Maximum word limit is 500"
            value={Desc}
            onChange={handleSetDesc}
            className="appearance-none bg-transparent border border-white rounded w-72 sm:w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="px-10 my-4 ">
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create</button>
        </div>
      </div>
    </div>
  );
}
