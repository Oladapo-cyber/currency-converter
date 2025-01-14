import { useState } from "react";
import Inputs from "./Input";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import axios from "axios";

const Converter = () => {
  const [currency, setCurrency] = useState("usd");
  const [convertedCurrency, setConvertedCurrency] = useState("ngn");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleConvert = async () => {
    const res = await axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    );

    console.log(res.data[currency][convertedCurrency] * amount);
    setConvertedAmount(res.data[currency][convertedCurrency] * amount);
  };

  const handleSwap = () => {
    let tempCurrency = currency;
    let tempAmount = amount;
    setCurrency(convertedCurrency);
    setConvertedCurrency(tempCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  };
  return (
    <div className="bg-white h-[20rem] flex flex-col gap-5 justify-center items-center rounded-xl">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        <Inputs
          amount={amount}
          currency={currency}
          setAmount={setAmount}
          setCurrency={setCurrency}
        />
        <CgArrowsExchangeAltV
          onClick={handleSwap}
          className="text-5xl text-black lg:rotate-90"
        />
        <Inputs
          amount={convertedAmount}
          setAmount={setConvertedAmount}
          setCurrency={setConvertedCurrency}
          currency={convertedCurrency}
        />
      </div>

      <button
        onClick={handleConvert}
        className="rounded-lg px-5 font-semibold py-2 mt-8 text-[#163300] bg-[#9fe870] hover:bg-[#8cd360] transition-all duration-300 ease-in-out"
      >
        Convert
      </button>
    </div>
  );
};

export default Converter;
