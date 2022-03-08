import React from "react";
import { Table, Button } from "react-bootstrap";

import { header, data } from "./tableData";
import { ReactComponent as Eye } from "./assets/images/eye.svg";
import { ReactComponent as Download } from "./assets/images/download.svg";

const BillingInfo = () => {
  return (
    <Table responsive="sm" className="table">
      <thead>
        <tr>
          {header.map((text) => (
            <th>{text}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((element) => (
          <tr>
            <td>{element.date}</td>
            <td>{element.transaction}</td>
            <td>{element.productName}</td>
            <td>{element.price}</td>
            <td>
              <div className="actionBtn">
                <Button>
                  <Eye />
                </Button>

                <Button>
                  <Download />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BillingInfo;
