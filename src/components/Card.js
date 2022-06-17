const Card = ({ country, totalRecovered, totalDeaths, totalCase }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden cursor-pointer ">
      <img
        className="w-full"
        alt="Country"
        src="https://www.ekoturk.com/wp-content/uploads/2020/11/turk-bilim-insanlarindan-kovid-19-karsi-antiviral-etkili-koku-molekulleri-tespiti.jpg"
      />

      <div className="font-bold text-xl mb-2">Country:{country}</div>

      <p className="text-gray-700 text-base"> Deaths{totalDeaths}</p>

      <p className="text-gray-700 text-base">Recovered {totalRecovered}</p>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semicolon">
          #TotalCase {totalCase}
        </span>
      </div>
    </div>
  );
};
export default Card;
