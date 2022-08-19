// import React from 'react';


import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useParams } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import Notifications from "react-notifications-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from './Redirect';
// import { withRouter } from "react-router";


class HomeScreen extends React.Component {

    state = {
        filteredData: [],
        searchArray: [],
        showSwapped: false,
        showProgress: false,
        showAPI: false,

        loginAccess: true,
        username: "",
        password: "",
        ProgressListArray: [],
        swappedListArray: [],
        APIListArray: [],
        cardTimeStamp: [],
        data: [{ "message": "123" }],
        dataNotification: [],
        dataNotification1: [],
        searchID: [],
        newTimeArr: [],
        filterID: [],
        notifData: [],
        timeStock: {
            "hh": "",
            "mm": "",
            "ss": ""
        }
    }

    constructor() {
        super()
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange = () => {
        console.log("value", this.state.clickedID);
        let cardID = this.state.clickedID;
        localStorage.setItem('cardID', cardID);
        // let path = `homepage`;
        console.log("routeChange");
        this.props.navigate('/carddetails')
    }

    // /restCards

    routeChange1 = () => {
        console.log("value", this.state.clickedID);
        let cardID = this.state.clickedID;
        localStorage.setItem('cardID', cardID);
        // let path = `homepage`;
        console.log("routeChange");
        this.props.navigate('/restCards')
    }
    location = () => useLocation();
    // navigate = () => useNavigate();

    handleFilter = () => {
        // console.log("HELOOOOOOO", this.state.searchID)
        // let newFilter = this.state.APIListArray.filter((value) => {
        //     return value.order_id.includes(this.state.searchID)
        // })

        // this.setState({ filteredData: newFilter })
        // let filterID = this.state.searchID.filter((value) => {
        //     return value.message.includes(this.state.searchID)
        // })
        // console.log("filterID", filterID)

        let filterID = this.state.dataNotification.filter((value) => {
            return value.message.includes(this.state.searchID)
        })
        console.log("filterID", filterID)
        this.setState({ filterID: filterID })

    }

    notificationsData = () => {
    }

    componentDidMount = () => {

        let filteredData = [];
        this.setState({ filteredData: filteredData })
        // setInterval(() => {
        // console.log("HHEELLOO", this.state.timeStock)
        // }, 20000)

        let location = localStorage.getItem('AuthLocation')
        this.setState({ location: location });
        let data = this.state.location;
        // console.log("AuthLocation", location)

        setTimeout(() => {

            axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/fetch_cards.php', {
                location: this.state.location

            }).then((response) => {
                console.log("response Data", response.data);

                // console.log("Prpos", this.props.location.state)


                this.setState({ ProgressListArray: response.data[0].in_progress })
                // console.log("ProgressListArray: ", this.state.ProgressListArray)

                this.setState({ swappedListArray: response.data[0].swapped })

                this.setState({ cardTimeStamp: response.data[0].in_progress })
                console.log("cardTimeStamp: ", this.state.cardTimeStamp)

                this.setState({ APIListArray: response.data[0].api }, () => {
                    console.log("APIListArray: ", this.state.APIListArray)

                    let searchArray = this.state.ProgressListArray.concat(this.state.swappedListArray, this.state.APIListArray);
                    console.log("searchArray", searchArray)


                    setTimeout(() => {
                        this.notiFunction();
                        this.cardsAnimation();
                    }, 2000)

                })

                // let TTime = new Date()
                // console.log("TTime: ", TTime)

                // console.log("swappedListArray: ", this.state.swappedListArray[0].error_code)
                // if (this.state.ProgressListArray[0].error_code === '1') {
                //     console.log("True", this.state.swappedListArray[0])
                // } else (
                //     console.log("False", this.state.swappedListArray[0])
                // )

                // if (this.state.swappedListArray[0].error_code === '1') {
                //     console.log("True", this.state.swappedListArray[0])
                // } else (
                //     console.log("False", this.state.swappedListArray[0])
                // )

                // if (this.state.APIListArray[0].error_code === '1') {
                //     console.log("True", this.state.swappedListArray[0])
                // } else (
                //     console.log("False", this.state.swappedListArray[0])
                // )

                // let resTime = this.state.cardTimeStamp;
                // let onlyTime = resTime.slice(0, 3);
                // console.log("TTIME", onlyTime)
            })

        }, 4000)

    }

    cardsAnimation = () => {

        if (this.state.swappedListArray.length === 1 && this.state.swappedListArray[0].error_code === '1') {
            console.log("swappedListArray", this.state.swappedListArray[0]);
            this.setState({ showSwappedList: false });
        } else {
            this.setState({ showSwappedList: true });

        }

        if (this.state.ProgressListArray.length === 1 && this.state.ProgressListArray[0].error_code === '1') {
            console.log("ProgressListArray", this.state.ProgressListArray[0]);
            this.setState({ showProgress: false });
        } else {
            this.setState({ showProgress: true });
        }

        // APIListArray

        if (this.state.APIListArray.length === 1 && this.state.APIListArray[0].error_code === '1') {
            console.log("APIListArray", this.state.APIListArray[0]);
            this.setState({ showAPI: false });
        } else {
            this.setState({ showAPI: true });
        }
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


        this.timeCalculate()
    }

    timeCalculate = () => {

        let timestampConvert = this.state.cardTimeStamp
        let newTimeArr = [];



        timestampConvert.map((item) => {

            let oldTime = new Date(item.timestamp)
            console.log("oldTime", oldTime);

            let timeNow = new Date();
            console.log("timeNow", timeNow);
            // if (timeNow < oldTime) {
            //     timeNow.setDate(timeNow.getDate() + 1);
            // }
            // oldTimeArr.push(oldTime);
            // console.log("oldTimeArr", oldTimeArr);
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

            // this.setState({ hh: hh });
            // this.setState({ mm: mm });
            // this.setState({ ss: ss });

            // let timeChunk = [];
            // timeChunk = [...hh, ...mm, ...ss];
            // console.log("timeChunk", timeChunk)

            let concatTime = hh + ":" + mm + ":" + ss;
            console.log("concatTime", concatTime)
            newTimeArr.push(concatTime);
            console.log("newTimeArr", newTimeArr)
            this.setState({ newTimeArr: newTimeArr })

            if (timestampConvert.length === newTimeArr.length) {

                setTimeout(() => {
                    this.timeRunner()
                }, 2000)
                // this.timeFrames()
            }

        })

        // this.state.timeStock.map((content) => ({ url: content, songName: "TempSong_" + songNumber++ }));


        // if (timestampConvert.length === newTimeArr.length) {
        //     let ProgressListArray = this.state.ProgressListArray

        //     ProgressListArray.forEach((element, i) => {
        //         element.timestamp = newTimeArr[i];
        //         // this.setState({ ProgressListArray: ProgressListArray })

        //         console.log("ProgressListArray", ProgressListArray);

        //         // if (ProgressListArray.length === newTimeArr.length) {
        //         //     this.timeRunner();
        //         // }

        //     })

        // console.log("HHEEELLOO")
        // }


    }

    searchClick = () => {
        console.log("Hello", this.state.searchID)
    }

    timeFrames = () => {

        let hh = this.state.hh;
        let mm = this.state.mm;
        let ss = this.state.ss;
    }

    timeRunner = () => {

        let ProgressListArray = this.state.ProgressListArray
        let newTimeArr = this.state.newTimeArr

        ProgressListArray.forEach((element, i) => {
            element.timestamp = newTimeArr[i];
            this.setState({ ProgressListArray: ProgressListArray })
            console.log("ProgressListArray", ProgressListArray);
        })
    }

    getCradID = () => {
        console.log("value", this.state.clickedID);
        let cardID = this.state.clickedID;
        localStorage.setItem('cardID', cardID);
        console.log("routeChange");
        this.props.navigate('/homepage')
    }

    functionSwapped = () => {
        console.log("Swapped")
    }

    functionProgress = () => {
        console.log("In-Progress",);
    }

    render() {
        return (
            // navbar 
            <div class="cardPage">

                <div class="progressBarDiv">
                    <div class="mainLogo">

                        <div className='LocationDiv1'>
                            <li><Link className="linkTag" to="/homepage"><img className='logoImg' src={"logo.jpg"}></img></Link></li>

                        </div>

                        <div className='LocationDiv'>
                            <span className='LocationName'>{this.state.location}</span>
                        </div>

                    </div>


                    <nav className='homeNavbar'>
                        {/* <div className='logoImg'></div> */}
                        <div className='HomeBtn'>
                            <ul className='NavUl'>

                            </ul>

                        </div>

                        <div className='NavRight'>
                            <ul className='NavUl' >
                                <Notifications
                                    data={this.state.dataNotification}
                                // renderItem={ }
                                // classNamePrefix='okrjoy'
                                // headerBackgroundColor='#00A699'
                                />

                                {/* <li><Button className='NotifBtn' color="success"><img src={''} /></Button></li> */}
                                <li><Link className={this.state.isactive ? "LinkActive" : "linkTag"} to="/todaysorders">Today's Orders</Link></li>
                                <li><Link className={this.state.isactive ? "LinkActive" : "linkTag"} to="/history">History</Link></li>
                                <li><Link className={this.state.isactive ? "LinkActive" : "linkTag"} to="/">Log Out</Link></li>
                            </ul>
                        </div>


                        {/* View Notifications page */}
                        <Modal >
                            <ModalHeader>Notifications</ModalHeader>
                            <ModalBody>
                                <div>
                                    <ul>
                                        <li>New Order Received, Order ID XXXX</li>
                                        <li>New Order Received, Order ID XXXX</li>
                                        <li>New Order Received, Order ID XXXX</li>
                                        <li>New Order Received, Order ID XXXX</li>
                                    </ul>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
<Button color="secondary" onClick={toggle}>Cancel</Button> */}
                            </ModalFooter>
                        </Modal>



                    </nav>


                    {/* Searchbar for ID  */}
                    <div className=''>
                        {/* <h3>Search order ID</h3> */}
                        <nav className="SearchNav navbar navbar-light bg-light">
                            <div className="form-inline">
                                <label className="LabelName">Order&nbsp;ID</label>
                                <input
                                    onChange={(e) => this.setState({ searchID: e.target.value }, () => { this.handleFilter() })} className="barSearch" type="search" aria-label="Search" />
                                {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                                {this.state.filteredData.length != 0 && (
                                    <div className="dataResult">
                                        {this.state.filterID.map((value, key) => {
                                            return (
                                                <a className="dataItem">
                                                    <p>{value.order_id}</p></a>)
                                        })}
                                    </div>
                                )}

                                {/* <button className="Srhbtn" onClick={this.searchClick}>search</button> */}

                            </div>

                        </nav>
                    </div>
                </div>




                {/* <button value={APIObj.order_id} to="/carddetails" onClick={(e) => this.setState({ clickedID: e.target.value }, () => {
                                this.functionAPI()
                            })}></button> */}

                {/* CARDS */}
                <div className='card-List-Progress'>

                    <>
                        <button className='card-container-API-Add'>
                            {/* <h3 className="nameOne-API">Add Order</h3> */}
                            <Link className="OrderLink" to="/newentry"><AddIcon className="svg_icons" /></Link>

                        </button>
                    </>


                    {/* Div for API cards */}
                    {this.state.showAPI ? (
                        <>
                            {this.state.APIListArray.length && this.state.APIListArray.map((APIObj) =>
                                <button value={APIObj.order_id} className='card-container-API' onClick={(e) => this.setState({ clickedID: e.target.value }, () => { this.routeChange1() })} APIObj={APIObj}>
                                    <h3 onclick="return false" className="nameOne-API">Order ID</h3>
                                    <p onclick="return false" className="API-Content" value={APIObj.order_id}>{APIObj.order_id}</p>

                                    <h3 onclick="return false" className="nameOne-API">Order Status</h3>
                                    <span onclick="return false" className="API-Content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                                    {/* <h6 className="bottom-left-API">{this.setState.cardTimeStamp}</h6> */}

                                    {/* <Link className="lnkAPI-Api" to="/restCards">View Order</Link> */}
                                    <h8 onclick="return false" className="sTagApi">API</h8>
                                </button>
                            )}
                        </>
                    ) : (
                        <></>
                    )}



                    {/* Div for SWAPPED cards */}
                    {this.state.showSwapped ? (
                        <>
                            {this.state.swappedListArray.length && this.state.swappedListArray.map((swappedObj) =>
                                <button value={swappedObj.order_id} className='card-container-Swapped' onClick={(e) => this.setState({ clickedID: e.target.value }, () => { this.routeChange1() })} swappedObj={swappedObj}>

                                    <h3 onclick="return false" className="nameOne-Swapped">Order ID</h3>
                                    <span onclick="return false" className="swapped-Content" value={swappedObj.order_id}>{swappedObj.order_id}</span>

                                    <h3 onclick="return false" className="nameOne-Swapped">Order Status</h3>
                                    <span onclick="return false" className="swapped-Content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                                    {/* <h6 className="bottom-left-Swapped">{this.setState.cardTimeStamp}</h6> */}
                                    {/* <Link className="lnkAPI-SWP" to="/restCards">View Order</Link> */}
                                    <h8 onclick="return false" className="sTagSwap">SWAPPED</h8>

                                </button>
                            )}
                        </>
                    ) : (
                        <></>
                    )}


                    {/* Div for IN-PROGRESS cards */}
                    {this.state.showProgress ? (
                        <>
                            {this.state.ProgressListArray.length && this.state.ProgressListArray.map((ProgressObj) =>
                                <button value={ProgressObj.order_id} className='card-container-Progress' onClick={(e) => this.setState({ clickedID: e.target.value }, () => { this.routeChange() })} ProgressObj={ProgressObj}>

                                    <h3 onclick="return false" className="nameOne">Order ID</h3>
                                    <span onclick="return false" className="progress-Content" value={ProgressObj.order_id}>{ProgressObj.order_id}</span>

                                    <h3 onclick="return false" className="nameOne">Order Status</h3>
                                    <span onclick="return false" className="progress-Content">{ProgressObj.order_status}</span>

                                    <h6 onclick="return false" className="bottom-left-time">{ProgressObj.timestamp}</h6>
                                    <div onclick="return false">
                                        {/* <Link className="lnkAPI-Prog" to="/carddetails">View Order</Link> */}
                                    </div>
                                    <h8 onclick="return false" className="sTagProc">IN PROCESS</h8>

                                </button>
                            )}
                        </>
                    ) : (
                        <></>
                    )}

                </div>
            </div>
        )
    }
}

export default withRouter(HomeScreen);







