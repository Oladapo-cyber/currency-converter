const Inputs = () => {
  return (
    <span className=" w-fit relative px-2">
      <input
        className="border border-black w-[24rem] p-5 font-semibold text-black text-2xl rounded-lg"
        placeholder="0"
      />

      <select className="absolute right-5 bg-transparent p-5 font-semibold text-black text-2xl rounded-lg">
        <option value="NGN">NGN</option>
        <option value="USD">USD</option>
      </select>
    </span>
  );
};

export default Inputs;
