import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";

function Dashboard({ Toggle }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.iex.cloud/v1/data/CORE/HISTORICAL_PRICES/TWTR?token=sk_61ca8f2743114f649f653d432c4b08c7"
      )
      .then((response) => {
        console.log({ response });
        setData(response?.data?.[0]);
      })
      .catch((error) => console.error({ error }));
  }, []);

  const { open, close, symbol, volume } = data;
  const change = Math.abs(close - open);
  const percentChange = (Math.abs(change) / open) * 100;

  return (
    <div className="px-3">
      <NavBar Toggle={Toggle} />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{open}</h3>
                <p className="fs-5">Open Price</p>
              </div>
              <i className="bi bi-currency-dollar p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{close}</h3>{" "}
                <p className="fs-5">Close Price</p>
              </div>
              <i className="bi bi-currency-dollar p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{change.toFixed(2)}</h3>{" "}
                <p className="fs-5">Change in Price</p>
              </div>
              <i
                className={`bi  + ${
                  close > open ? " bi-graph-up-arrow" : "bi-graph-down-arrow"
                }  p-3 fs-1 + ${
                  close > open ? " text-green-600" : "text-red-600"
                } `}
              ></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{percentChange.toFixed(2)}</h3>{" "}
                <p className="fs-5">Percentage</p>
              </div>
              <i class="bi bi-percent p-3 fs-1"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white fs-4">Stocks</h3>
          <form className="" role="search">
            <input
              className="w-[300px] h-10 outline-none rounded-sm pl-4"
              type="search"
              placeholder="Search stock"
              aria-label="Search"
            />
            <button
              className=" bg-dark w-20 h-10 text-white rounded-r-sm text-center"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <table class="table mt-2 bg-white rounded ">
          <thead>
            <tr>
              <th scope="col"></th> <th scope="col">Stock</th>
              <th scope="col">Stock Symbol</th> <th scope="col">value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th> <td>Jacob</td> <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th> <td>Larry</td> <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th> <td>Larry</td> <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">5</th> <td>Larry</td> <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">6</th> <td>Larry</td> <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Dashboard;
