import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.min.css";

const Admin = () => {
  return (
    <div>
      <HotTable
        data={[
          ["", "Tesla", "Volvo", "Toyota", "Ford"],
          ["2019", 10, 11, 12, 13],
          ["2020", 20, 11, 14, 13],
          ["2021", 30, 15, 12, 13],
        ]}
        rowHeaders
        colHeaders
        settings={{ licenseKey: "non-commercial-and-evaluation" }}
      />
    </div>
  );
};

export default Admin;
