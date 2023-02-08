import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./TrendignSubjects.css";
import { Link } from "react-router-dom";

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
            <Link to="/javascript">
              <li>JavaScript</li>
            </Link>
            <Link to="/fiction">
              <li>Fiction</li>
            </Link>
            <Link to="/psychology">
              <li>Psychology</li>
            </Link>
            <Link to="/love">
              <li>Love</li>
            </Link>
            <Link to="/thriller">
              <li>Thriller</li>
            </Link>
            <Link to="/scifi">
              <li>Sci-Fi</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
