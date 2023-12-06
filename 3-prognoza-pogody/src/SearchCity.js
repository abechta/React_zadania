const SearchCity = (props) => {
  return (
    <div className="searchCity">
      <form>
        <label htmlFor="searchWeather">Szukaj: </label>
        <input
          type="text"
          id="searchWeather"
          onChange={(e) => {
            props.searchWeather(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
};
export default SearchCity;
