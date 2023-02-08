import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./TrendignSubjects.css";

export const TrendignSubjects = ({ handleSideBarInput }) => {
  const [search, setSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      alert(`The subject field cannot be empty`);
      return;
    }
    handleSideBarInput(search);
    setSearch();
  };

  return (
    <>
      <div className="sidebar p-3">
        <h2 className="fs-4 mb-3">Trending Subjects</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              placeholder="Search Subjects"
              className="mb-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <Button size="sm" variant="primary" onClick={handleSubmit}>
              Submit
            </Button> */}
          </Form.Group>
        </Form>
        <div className="listMenu ms-0">
          <ul>
            <a href="/javascript">
              <li>JavaScript</li>
            </a>
            <a href="/fiction">
              <li>Fiction</li>
            </a>
            <a href="/psychology">
              <li>Psychology</li>
            </a>
            <a href="/love">
              <li>Love</li>
            </a>
            <a href="/thriller">
              <li>Thriller</li>
            </a>
            <a href="/scifi">
              <li>Sci-Fi</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};
