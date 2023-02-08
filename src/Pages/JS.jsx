import React, { useEffect, useState } from "react";
import { SUBJECT_API } from "../api";
import { TrendignSubjects } from "../TrendingSubjects/TrendignSubjects";
import { PgDataTable } from "./PgDataTable";
import Spinner from "react-bootstrap/Spinner";

export const JS = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true)
    const subjectFetch = fetch(`${SUBJECT_API}javascript.json?offset=1&limit=50`);
    Promise.all([subjectFetch]).then(async (response) => {
      const subjectResponse = await response[0].json();
      setData(subjectResponse);
      setLoading(false);
      console.log(subjectResponse);
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <section className="d-flex flex-row justify-content-start align-items-start">
        <TrendignSubjects />
        <div className="container p-4">
          <h1>JAVASCRIPT</h1>
          {loading && (
            <section className="d-flex flex-column justify-content-center align-items-center my-auto">
              <Spinner className="my-5" animation="border" />
              <h2>Please wait while we search your results in the API...</h2>
            </section>
          )}
          {data && <PgDataTable data={data} />}
        </div>
      </section>
    </>
  );
};
