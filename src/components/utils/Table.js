import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid/DataGrid/";

import { v4 as uuidv4, v4 } from "uuid";
import "./Table.css";
import SearchBar from "./SearchBar";

export default function BasicTable(props) {
  let users = props.users.users;
  let firstUser = props.users.users[0];
  let tablecells = Object.keys(firstUser);

  const [data, setData] = useState(users);

  const columns = [
    { field: "firstname", headerName: "First name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 130 },
    { field: "StartDate", headerName: "Start date", width: 130 },
    { field: "department", headerName: "department", width: 150 },
    { field: "birthdate", headerName: "Date of Birth", width: 130 },
    { field: "street", headerName: "street", width: 130 },
    { field: "City", headerName: "City", width: 130 },
    { field: "state", headerName: "state", width: 130 },
    { field: "ZipCode", headerName: "Zip Code", width: 90 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <SearchBar list={data} setList={setData}></SearchBar>

      <DataGrid
        rows={data}
        getRowId={(row) => v4()}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      ></DataGrid>
    </div>
  );
}
