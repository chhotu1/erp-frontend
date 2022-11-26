import React from 'react';
import { FaDollarSign, FaUsers } from 'react-icons/fa'
const Dashboard = ({ dashboard }) => {
    let credit = 0;
    let debit = 0;
    dashboard && dashboard.data && dashboard.data.cashbook && dashboard.data.cashbook.map((e) => {
        if (e._id === 'CREDIT') {
            credit = e.total;
        } else {
            debit = e.total
        }
    })

    return (
        <div>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Title */}
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-xxl-4 col-md-6">
                            <div className="card info-card sales-card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Total credit
                                    </h5>
                                    <div className="d-flex align-items-center">
                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <FaDollarSign />
                                        </div>
                                        <div className="ps-3">
                                            <h6>&#8377;{credit}</h6>
                                            {/* <span className="text-success small pt-1 fw-bold">
                                                        12%
                                                    </span>
                                                    <span className="text-muted small pt-2 ps-1">
                                                        increase
                                                    </span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Sales Card */}
                        {/* Revenue Card */}
                        <div className="col-xxl-4 col-md-6">
                            <div className="card info-card revenue-card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Total debit
                                    </h5>
                                    <div className="d-flex align-items-center">
                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <FaDollarSign />
                                        </div>
                                        <div className="ps-3">
                                            <h6>&#8377;{debit}</h6>
                                            {/* <span className="text-success small pt-1 fw-bold">
                                                        8%
                                                    </span>{" "}
                                                    <span className="text-muted small pt-2 ps-1">
                                                        increase
                                                    </span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Revenue Card */}
                        {/* Customers Card */}
                        <div className="col-xxl-4 col-md-12">
                            <div className="card info-card customers-card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Balance
                                    </h5>
                                    <div className="d-flex align-items-center">
                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <FaUsers />
                                        </div>
                                        <div className="ps-3">
                                            <h6>&#8377;{credit - debit}</h6>
                                            {/* <span className="text-danger small pt-1 fw-bold">
                                                        12%
                                                    </span>{" "}
                                                    <span className="text-muted small pt-2 ps-1">
                                                        decrease
                                                    </span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card recent-sales overflow-auto">

                                <div className="card-body">
                                    <h5 className="card-title">
                                        Recent Credit and debit
                                    </h5>
                                    <table className="table table-borderless datatable">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Customer</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                dashboard && dashboard.data && dashboard.data.cashbookUser && dashboard.data.cashbookUser.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">
                                                                <a href="#">{index + 1}</a>
                                                            </th>
                                                            <td>{item.data[0]?.name}</td>
                                                            <td>
                                                                <a href="#" className="text-primary">
                                                                    {item.data[0].type}
                                                                </a>
                                                            </td>
                                                            <td>&#8377;{item?.totalPrice}</td>

                                                        </tr>

                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Dashboard
