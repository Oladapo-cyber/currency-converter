const Inputs = ({ amount, setAmount, setCurrency, currency }) => {
  const currencyList = [
    "ngn", // Nigeria
    "ghs", // Ghana
    "usd", // United States
    "eur", // European Union
    "gbp", // United Kingdom
    "jpy", // Japan
    "aud", // Australia
    "cad", // Canada
    "zar", // South Africa
    "kes", //Kenya
    "btc", //Bitcoin
    "eth", //Ethereum
  ];
  return (
    <span className=" w-fit relative px-2">
      <input
        className="border border-black w-[24rem] p-5 font-semibold text-black text-2xl rounded-lg"
        placeholder="0"
        value={Number(amount).toFixed(3)}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        onChange={(e) => setCurrency(e.target.value)}
        value={currency}
        className="absolute right-5 bg-transparent p-5 font-semibold text-black text-2xl rounded-lg uppercase"
      >
        {currencyList.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
        <option value="NGN">NGN</option>
        <option value="USD">USD</option>
      </select>
    </span>
  );
};

export default Inputs;
