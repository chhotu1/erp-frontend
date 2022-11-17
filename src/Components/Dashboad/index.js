import React from 'react';
import { FaDollarSign, FaShoppingCart, FaUsers } from 'react-icons/fa'
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
                        {/* Left side columns */}
                        <div className="col-lg-8">
                            <div className="row">
                                {/* Sales Card */}


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
                                                    <FaUsers/>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>&#8377;{credit-debit}</h6>
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
                                                        dashboard && dashboard.data && dashboard.data.cashbookUser && dashboard.data.cashbookUser.map((item,index)=>{
                                                            return(
                                                                <tr key={index}>
                                                                <th scope="row">
                                                                    <a href="#">{index+1}</a>
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
                        </div>
                        {/* End Left side columns */}
                        {/* Right side columns */}
                        <div className="col-lg-4">
                            {/* Recent Activity */}
                            <div className="card">

                                <div className="card-body">
                                    <h5 className="card-title">
                                        Recent Activity <span>| Today</span>
                                    </h5>
                                    <div className="activity">
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">32 min</div>
                                            <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                                            <div className="activity-content">
                                                Quia quae rerum{" "}
                                                <a href="#" className="fw-bold text-dark">
                                                    explicabo officiis
                                                </a>{" "}
                                                beatae
                                            </div>
                                        </div>
                                        {/* End activity item*/}
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">56 min</div>
                                            <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                                            <div className="activity-content">
                                                Voluptatem blanditiis blanditiis eveniet
                                            </div>
                                        </div>
                                        {/* End activity item*/}
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">2 hrs</div>
                                            <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                                            <div className="activity-content">
                                                Voluptates corrupti molestias voluptatem
                                            </div>
                                        </div>
                                        {/* End activity item*/}
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">1 day</div>
                                            <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                                            <div className="activity-content">
                                                Tempore autem saepe{" "}
                                                <a href="#" className="fw-bold text-dark">
                                                    occaecati voluptatem
                                                </a>{" "}
                                                tempore
                                            </div>
                                        </div>
                                        {/* End activity item*/}
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">2 days</div>
                                            <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                                            <div className="activity-content">
                                                Est sit eum reiciendis exercitationem
                                            </div>
                                        </div>
                                        {/* End activity item*/}
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">4 weeks</div>
                                            <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                                            <div className="activity-content">
                                                Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                                            </div>
                                        </div>
                                        {/* End activity item*/}
                                    </div>
                                </div>
                            </div>



                        </div>
                        {/* End Right side columns */}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Dashboard
