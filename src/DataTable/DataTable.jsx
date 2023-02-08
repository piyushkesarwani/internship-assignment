import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.docs.slice(startIndex, endIndex);

  const pageCount = Math.ceil(data.docs.length / itemsPerPage);

  return (
    <>
      <Table className="my-5" striped bordered hover>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title & Sub Title</th>
            <th>Author</th>
            <th>Latest Publish</th>
            <th>First Publish</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td>{item.author_name[0].toString()}</td>
                <td>{Math.max(...item.publish_year).toString()}</td>
                <td>{Math.min(...item.publish_year).toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div>
        <Button variant="primary"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="me-3"
        >
          Previous
        </Button>
        <Button variant="primary"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          Next
        </Button>
      </div>
    </>
  );
};
