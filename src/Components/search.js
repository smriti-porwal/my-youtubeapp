import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };
  const callApi = (searchtext) => {
    // an api call
    console.log(searchtext);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      callApi(searchText);
    }, 2000);
    return () => {
      console.log("return of useeffect");
      clearTimeout(timer);
    };
  }, [searchText]);
  return (
    <div>
      <form>
        <input
          className="border border-black rounded-md w-full p-2 h-7"
          type="text"
          value={searchText}
          placeholder="Search anything here..."
          onChange={searchHandler}
        ></input>
      </form>
    </div>
  );
};

export default Search;
