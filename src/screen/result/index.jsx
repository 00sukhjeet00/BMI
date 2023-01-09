import React, { useContext, useState } from "react";
import { ListContext } from "../../utils/Context";

export default function ResultScreen() {
  const [userData, setuserData] = useContext(ListContext);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const [searchArr, setsearchArr] = useState([...userData]);
  const [search, setsearch] = useState("");
  const sortOrder = (name) => {
    const sortOrder = name === sortField && order === "asc" ? "desc" : "asc";
    setSortField(name);
    setOrder(sortOrder);
    handleSorting(name, sortOrder);
  };
  const handleSorting = (name, sortOrder) => {
    if (sortField) {
      const sorted = [...searchArr].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setsearchArr(sorted);
    }
  };
  return (
    <div className="container-fluid text-center">
      <h3 className="m-5">List of all user</h3>
      <div style={{display:"inline-block",textAlign:"center"}}>
        <input
        class="form-control mb-4"
        placeholder="Search..."
          type={"text"}
          value={search}
          onChange={(e) => {
            const txt=e.target.value
            setsearch(txt);
            if(txt=="")
              setsearchArr([...userData])
            else{
              const filterData = searchArr.filter((item) =>
              item.firstName
              .toLowerCase()
              .includes(txt.toLowerCase())
              );
              setsearchArr([...filterData])
            }
          }}
        />
        <table class="table w-5">
          <thead>
            <tr>
              <th scope="col" onClick={() => sortOrder("firstName")}>
                Name
              </th>
              <th scope="col" onClick={() => sortOrder("gender")}>
                Gender
              </th>
              <th scope="col" onClick={() => sortOrder("bmi")}>
                BMI
              </th>
              <th scope="col" onClick={() => sortOrder("classification")}>
                Classification
              </th>
            </tr>
          </thead>
          <tbody>
            {searchArr.length
              ? searchArr.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{`${item.firstName} ${item.lastName}`}</th>
                    <td>{item.gender}</td>
                    <td>{item.bmi}</td>
                    <td>{item.classification}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
