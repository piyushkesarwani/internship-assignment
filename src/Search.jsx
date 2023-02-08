import React, { useState } from "react";
import { Badge, Button, Form } from "react-bootstrap";

export const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      alert("The field cannot be empty");
      return;
    }
    onSearchChange(search);
    // setSearch("");
  };

  return (
    <>
      <section className="d-flex justify-content-around align-items-center">
        <Form.Control
          placeholder="Search Book by title or by author name"
          className="searchBar w-75 my-3"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Badge variant="danger" bg="danger" onClick={() => setSearch("")}>
          Clear Search
        </Badge>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </section>
    </>
  );
};
