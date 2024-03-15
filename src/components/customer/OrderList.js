import React, {useState} from "react";
import '../../style/calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AnchorTag from "../Anchortag";
import Table from "../table/Table";
import InputFormGroup from "../input/InputFormGroup";

const localizer = momentLocalizer(moment);

const OrderList = () => {
    const columnList = ["ID", "Customer", "Order ID", "Total", "Paid", "Order Date", "Action"];
    const tableData = [
        {"id": 1, "customer": "Mrinal Sawarn", "order_id": "201256", "total": "238.00", "is_paid": "Yes", "date": "15th March, 2024"},
        {"id": 2, "customer": "David Miller", "order_id": "201257", "total": "980.00", "is_paid": "Yes", "date": "15th March, 2024"},
        {"id": 3, "customer": "MS Dhoni", "order_id": "201258", "total": "305.00", "is_paid": "Yes", "date": "15th March, 2024"},
        {"id": 4, "customer": "Virat Kohli", "order_id": "201259", "total": "139.00", "is_paid": "No", "date": "15th March, 2024"},
    ];
    
    

    const events = [
        ...tableData.map(order => ({
            title: `Order ${order.order_id} - ${order.customer}`,
            start: moment(order.date, "Do MMMM, YYYY").toDate(),
            end: moment(order.date, "Do MMMM, YYYY").toDate(),
        })),
        {
            title: 'Delivery Date',
            start: moment('18th March, 2024', "Do MMMM, YYYY").toDate(),
            end: moment('18th March, 2024', "Do MMMM, YYYY").toDate(),
        },
    ];

    return (
        <div className="admin-content mx-auto">
            <div className="w-100 mb-5">
                <AnchorTag link="/app/shop/invoice/create" className="btn btn-sm btn-warning float-right" itemValue="Create Order"></AnchorTag>
                <h4>Order List</h4>
            </div>
            <div className="row mb-5">
                <div className="col-12">
                    <p><b>Search Order</b></p>
                </div>
                <div className="col-2">
                    <InputFormGroup labelClassName="sr-only" inputClassName="form-control form-control-sm" placeholder="Customer Name"/>
                </div>
                <div className="col-2">
                    <InputFormGroup labelClassName="sr-only" inputClassName="form-control form-control-sm" placeholder="Order ID"/>
                </div>
                <div className="col-2">
                    <div className="form-group">
                        <input type="submit" className="btn btn-sm btn-success" value="Search"/>
                    </div>
                </div>
            </div>
            <Table className="table table-striped" columnList={columnList} tableData={tableData} actionLinkPrefix="">
                {tableData.map(order => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.order_id}</td>
                        <td>{order.total}</td>
                        <td>{order.is_paid}</td>
                        <td>{order.date}</td>
                        
                    </tr>
                ))}
            </Table>
            <br/>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 400 }}
            />
        </div>
    );
};

export default OrderList;