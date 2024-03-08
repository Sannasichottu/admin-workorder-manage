import React from 'react'
import { Table } from "antd";
const columns = [
  {
    title: "Vendor",
    dataIndex: "vendor",
    key: "vendor",
    render: (text) => <a href=" ">{text}</a>,
  },

  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href=" ">{text}</a>,
  },
  {
    title: "Engine Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Engine Type",
    dataIndex: "type",
    key: "type",
  },

  {
    title: "Recived Date",
    dataIndex: "date",
    key: "date",
  },
];
const data = [
  {
    key: "1",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    vendor: "Vendor-01",
    type: "Petrol",
    date: "Dec-07-2023",
  },
  {
    key: "2",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    vendor: "Vendor-01",
    type: "Petrol",
    date: "Dec-18-2023",
  },
  {
    key: "3",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    vendor: "Vendor-03",
    type: "Petrol",
    date: "Dec-25-2023",
  },
  {
    key: "4",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    vendor: "Vendor-03",
    type: "Petrol",
    date: "Jan-07-2024",
  },
  {
    key: "5",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    vendor: "Vendor-02",
    type: "Petrol",
    date: "Jan-14-2024",
  },
  {
    key: "6",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    vendor: "Vendor-02",
    type: "Petrol",
    date: "Jan-22-2024",
  },
  {
    key: "7",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    vendor: "Vendor-01",
    type: "Petrol",
    date: "Jan-28-2024",
  },
  {
    key: "8",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    vendor: "Vendor-03",
    type: "Petrol",
    date: "Feb-03-2024",
  },
  {
    key: "9",
    name: "Zhou Maomao5-speed R151 manual 6-speed AC60 automatic",
    code: "2TR-FE",
    vendor: "Vendor-02",
    type: "Petrol",
    date: "Feb-08-2024",
  },
];

const RecivedVendorForm = () => {
  return (
    <div>
    <hr />
    <h2 style={{ textAlign: "center", color: "red" }}>Enquiry-Form</h2>

    <h2 style={{ textAlign: "center" }}>Recived From Vendor List</h2>
    <hr />
    <Table columns={columns} dataSource={data} />
  </div>
  )
}

export default RecivedVendorForm