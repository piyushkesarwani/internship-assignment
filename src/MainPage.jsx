import { useState } from "react";
import "./App.css";
import { SEARCH_API } from "./api";
import { SUBJECT_API } from "./api";
import { Search } from "./Search";
import { TrendignSubjects } from "./TrendingSubjects/TrendignSubjects";
import Spinner from "react-bootstrap/Spinner";
import { DataTable } from "./DataTable/DataTable";
import { PgDataTable } from "./Pages/PgDataTable";

export const MainPage = () => {
  const [data, setData] = useState();
  const [searchData, setSearchData] = useState(); //for sidebar Inputs
  const [loading, setLoading] = useState(false);

  const handleOnSearchChange = (value) => {
    setData();
    setSearchData();
    setLoading(true);
    const titleSearchFetch = fetch(
      `${SEARCH_API}search.json?title=${value}&offset=1&limit=50`
    );
    Promise.all([titleSearchFetch])
      .then(async (response) => {
        const titleSearchResponse = await response[0].json();
        console.log("Title Search=", titleSearchResponse);
        setSearchData();
        setData(titleSearchResponse);
        setLoading(false);
        console.log("The data is =", data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert(
          "We do not have such topics to display. Please make sure to enter right keyword."
        );
      });
  };

  //function to display subjects based on the sidebar Input

  const handleSideBarInput = (inputValue) => {
    setSearchData();
    setData();
    setLoading(true);
    const searchSidebarFetch = fetch(
      `${SUBJECT_API}${inputValue}.json?offset=1&limit=50`
    );
    Promise.all([searchSidebarFetch])
      .then(async (response) => {
        const searchSidebarResponse = await response[0].json();
        setData();
        setSearchData(searchSidebarResponse);
        setLoading(false);
        console.log("Sidebar search Response =", searchData);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert(
          "We do not have such Subjects topics to display. Please make sure to enter right keyword."
        );
      });
  };
  return (
    <>
      <div className="App d-flex justify-content-start">
        <TrendignSubjects handleSideBarInput={handleSideBarInput} />
        <div className="container">
          <Search onSearchChange={handleOnSearchChange} />
          {loading && (
            <section className="d-flex flex-column justify-content-center align-items-center my-auto">
              <Spinner className="my-5" animation="border" />
              <h2>Please wait while we search your results in the API...</h2>
            </section>
          )}
          {data && <DataTable data={data} />}
          {searchData && <PgDataTable data={searchData} />}
        </div>
      </div>
    </>
  );
};
