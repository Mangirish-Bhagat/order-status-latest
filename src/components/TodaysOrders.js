// import React from 'react';


import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Notifications from "react-notifications-menu";
// JS for modal

class TodaysOrder extends React.Component {

    state = {
        notifData: [],
        dataNotification: [],
        dataNotification1: [],
        filterID: [],
        showCardToday: false,
        isactive1: true,
        orderToday: [],
    }

    componentDidMount = () => {

        let location = localStorage.getItem('AuthLocation')
        this.setState({ location: location });

        setTimeout(() => {

            axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/today_order.php', {

            }).then((response) => {
                console.log(response.data);

                this.setState({ orderToday: response.data })

                let cardTimeStamp = response.data;
                this.setState({ cardTimeStamp: cardTimeStamp })
                console.log(cardTimeStamp)

            })

        }, 1000)

        setTimeout(() => {
            this.timeCalculate()
        }, 2000)

    }

    timeCalculate = () => {

        if (this.state.orderToday.length === 1 && this.state.orderToday[0].error_code === '1') {
            console.log("orderToday", this.state.orderToday[0]);
            this.setState({ showCardToday: false });
        } else {
            this.setState({ showCardToday: true });

        }

        let timestampConvert = this.state.cardTimeStamp
        let newTimeArr = [];



        timestampConvert.map((item) => {

            let oldTime = new Date(item.timestamp)
            console.log("oldTime", oldTime);

            let timeNow = new Date();
            console.log("timeNow", timeNow);

            var timeDiff = timeNow - oldTime;
            console.log("timeDiff", timeDiff);

            var msec = timeDiff;
            var hh = Math.floor(msec / 1000 / 60 / 60);
            msec -= hh * 1000 * 60 * 60;
            var mm = Math.floor(msec / 1000 / 60);
            msec -= mm * 1000 * 60;
            var ss = Math.floor(msec / 1000);
            msec -= ss * 1000;

            console.log("msec", hh, mm, ss);

            this.setState({ hh: hh });
            this.setState({ mm: mm });
            this.setState({ ss: ss });

            // let timeChunk = [];
            // timeChunk = [...hh, ...mm, ...ss];
            // console.log("timeChunk", timeChunk)

            let concatTime = hh + ":" + mm + ":" + ss;
            console.log("concatTime", concatTime)
            newTimeArr.push(concatTime);
            console.log("newTimeArr", newTimeArr)
            this.setState({ newTimeArr: newTimeArr }, () => {
                if (timestampConvert.length === newTimeArr.length) {

                    setTimeout(() => {
                        this.timeRunner()
                    }, 1000)
                }
            })



        })
    }

    timeRunner = () => {
        let a = 1;

        let orderToday = this.state.orderToday
        let newTimeArr = this.state.newTimeArr
        console.log(orderToday, newTimeArr)
        // console.log("HH:MM:SS", this.state.hh, this.state.mm, this.state.ss);

        orderToday.forEach((element, i) => {
            element.timestamp = newTimeArr[i];
            this.setState({ orderToday: orderToday })

            console.log("orderToday", orderToday);

            this.notiFunction()

        })
    }

    notiFunction = () => {

        setTimeout(() => {

            axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/notif.php', {

            }).then((response) => {
                console.log("notif", response.data);
                this.setState({ notifData: response.data }, () => {
                    setTimeout(() => {
                        this.notifConver();
                    }, 2000)
                })
            })

        }, 4000)
    }

    notifConver = () => {
        var orderText = "New Order Recived, Order ID: "
        var dataNotification = this.state.notifData.map(s => ({
            message: "New Order Received." + "Order ID: " + s.order_id, image:
                "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png"
        }))
        let dataNotification1 = [];
        // dataNotification.forEach((element) => {
        //     dataNotification1 = element.conc;

        // })
        // dataNotification.map((item) => {
        //     dataNotification1 = item.order_id.concat(orderText)
        // })
        this.setState({ dataNotification: dataNotification });
        this.setState({ dataNotification1: dataNotification });
        console.log("dataNotification", dataNotification)
        console.log("dataNotification", dataNotification1)


        // this.timeCalculate()
    }

    handleFilter = () => {
        let filterID = this.state.orderToday.filter((value) => {
            return value.message.includes(this.state.searchID)
        })
        console.log("filterID", filterID)
        this.setState({ filterID: filterID })

    }

    render() {
        return (
            <div class="cardPage">
                <div class="progressBarDiv">

                    <div className='LocationDiv'>
                        <span className='LocationName'>{this.state.location}</span>
                    </div>
                    <div>
                        <li><Link className="linkTag" to="/homepage"><img className='logoImg' src={"logo.jpg"}></img></Link></li>

                    </div>
                    <nav className='homeNavbar'>
                        <div className='HomeBtn'>
                            <li>
                                {/* <Link className="linkTag" to="/homepage"><img className='logoImg' src={"logo.jpg"}></img></Link> */}
                            </li>

                        </div>

                        <div className='NavRight'>
                            <ul className='NavUl'>
                                <Notifications
                                    data={this.state.dataNotification}
                                // renderItem={ }
                                // classNamePrefix='okrjoy'
                                // headerBackgroundColor='#00A699'
                                />
                                {/* <li><Button className='NotifBtn' color="success">N</Button></li> */}
                                <li><Link className={this.state.isactive1 ? "LinkActive" : "linkTag"} to="/todaysorders">Today's Orders</Link></li>
                                <li><Link className={this.state.isactive2 ? "LinkActive" : "linkTag"} to="/history">History</Link></li>
                                <li><Link className={this.state.isactive3 ? "LinkActive" : "linkTag"} to="/">Log Out</Link></li>
                            </ul>
                        </div>


                        {/* View Notifications page */}


                        <Modal>
                            <ModalHeader>Notifications</ModalHeader>
                            <ModalBody>
                                <div>
                                    <ul>
                                        <li>Notification 1</li>
                                        <li>Notification 2</li>
                                        <li>Notification 3</li>
                                        <li>Notification 4</li>
                                        <li>Notification 5</li>
                                        <li>Notification 6</li>
                                        <li>Notification 7</li>
                                        <li>Notification 8</li>
                                    </ul>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button> */}
                            </ModalFooter>
                        </Modal>



                    </nav>

                    <div className=''>
                        {/* <h3>Search order ID</h3> */}
                        <nav className="SearchNav navbar navbar-light bg-light">
                            <div className="form-inline">
                                <label className="LabelName">Order&nbsp;ID</label>
                                <input
                                    onChange={(e) => this.setState({ searchID: e.target.value }, () => { this.handleFilter() })} className="barSearch" type="search" aria-label="Search" />
                                {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                                {/* {this.state.filteredData.length != 0 && (
                                <div className="dataResult">
                                    {this.state.filterID.map((value, key) => {
                                        return (
                                            <a className="dataItem">
                                                <p>{value.order_id}</p></a>)
                                    })}
                                </div>
                            )} */}

                                {/* <button className="Srhbtn" onClick={this.searchClick}>search</button> */}

                            </div>

                        </nav>
                    </div>
                </div>

                {/* Searchbar for ID  */}
                {/* <div className='header text-center'> */}
                {/* <h3>Search order ID</h3> */}
                {/* <nav className="SearchNav navbar navbar-light bg-light">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search By Order ID" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                </div> */}


                {/* Div for cards */}
                <div className="historyDiv">
                    {this.state.showCardToday ? (
                        <>
                            {this.state.orderToday.length && this.state.orderToday.map((todayObj) =>
                                <div className='TodaysOrdersCardContainer'>
                                    <div className='TodaysOrdersCard'>
                                        <h4 className='TodaysOrdersTag'>Order id</h4>
                                        <h4 className='TodaysOrdersDetails'>{todayObj.order_id}</h4>

                                        <div className='Tod'>
                                            <h4 className='TodaysOrdersTag'>Order Status</h4>
                                            <h4 className='TodaysOrdersDetails2'><QueryBuilderIcon className='clock' />{todayObj.timestamp}</h4>
                                            <h4 className='TodaysOrdersDetails'>{todayObj.order_status}</h4>
                                        </div>
                                        {/* <h4 className='TodaysOrdersTag2'>Order Time</h4> */}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <div>
                                <h1 className="noOrders">No New Orders</h1>
                            </div>
                        </>
                    )}
                </div>

            </div>
        )
    }
}

export default TodaysOrder;


// const TodaysOrders = (args) => {

//     const [modal, setModal] = useState(false);

//     const toggle = () => setModal(!modal);


//     // Homepage design

//     return (
//         // navbar
//         <> <div className='LocationDiv'>
//             <span className='LocationName'>SAKINAKA</span>
//         </div>
//             <nav className='homeNavbar'>
//                 <div className='HomeBtn'>
//                     <ul className='NavUl'>
//                         <li><Link to="/homepage">Home</Link></li>
//                     </ul>

//                 </div>

//                 <div className='NavRight'>
//                     <ul className='NavUl'>
//                         <li><Button className='NotifBtn' color="success" onClick={toggle}>N</Button></li>
//                         <li><Link to="/todaysorders">Today's Orders</Link></li>
//                         <li><Link to="/history">History</Link></li>
//                         <li><Link to="/">Log Out</Link></li>
//                     </ul>
//                 </div>


//                 {/* View Notifications page */}


//                 <Modal isOpen={modal} toggle={toggle} {...args}>
//                     <ModalHeader toggle={toggle}>Notifications</ModalHeader>
//                     <ModalBody>
//                         <div>
//                             <ul>
//                                 <li>Notification 1</li>
//                                 <li>Notification 2</li>
//                                 <li>Notification 3</li>
//                                 <li>Notification 4</li>
//                                 <li>Notification 5</li>
//                                 <li>Notification 6</li>
//                                 <li>Notification 7</li>
//                                 <li>Notification 8</li>
//                             </ul>
//                         </div>
//                     </ModalBody>
//                     <ModalFooter>
//                         {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
//                     <Button color="secondary" onClick={toggle}>Cancel</Button> */}
//                     </ModalFooter>
//                 </Modal>



//             </nav>


//             {/* Searchbar for ID  */}
//             <div className='header text-center'>
//                 {/* <h3>Search order ID</h3> */}
//                 <nav className="SearchNav navbar navbar-light bg-light">
//                     <form className="form-inline">
//                         <input className="form-control mr-sm-2" type="search" placeholder="Search By Order ID" aria-label="Search" />
//                         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                     </form>
//                 </nav>
//             </div>


//             {/* Div for cards */}
//             <div className='TodaysOrdersCardContainer'>
//                 <button className='TodaysOrdersCard btn btn-success'>New Card</button>
//                 <button className='TodaysOrdersCard btn btn-success'>New Card</button>
//                 <button className='TodaysOrdersCard btn btn-success'>New Card</button>
//                 <button className='TodaysOrdersCard btn btn-success'>New Card</button>
//                 <button className='TodaysOrdersCard btn btn-success'>New Card</button>
//             </div>
//         </>
//     );
// };

// export default TodaysOrders;