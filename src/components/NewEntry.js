// import React from 'react';


import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import TimerIcon from '@material-ui/icons/Timer';
import { withRouter } from './Redirect';

// JS for modal
class LoginComponent extends React.Component {

    state = {
        showNothing: true,
        showTimer: true,
        progressForm: false,
        stnForm: false,
        swappedForm: false,

        stnProcess: false,

        hr: 0,
        min: 0,
        sec: 0,
        msec: 0,

        running: false,
    }

    constructor() {
        super()
        this.routeChange = this.routeChange.bind(this);
    }

    // const [modal, setModal] = useState(false);

    // const toggle = () => setModal(!modal);

    // // for first dropdown
    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // const toggle2 = () => setDropdownOpen(prevState => !prevState);

    // // for second dropdown
    // const [dropdownOpen2, setDropdownOpen2] = useState(false);

    // const toggle3 = () => setDropdownOpen2(prevState => !prevState);

    componentDidMount = () => {
        let location = localStorage.getItem('AuthLocation')
        this.setState({ location: location });
    }

    handleType = () => {
        console.log("Hello", this.state.ordertype)
        this.setState({ disabledType: "disabled" })

    }

    handleDispatch = () => {
        console.log("orderDispatched", this.state.orderDispatched);
        console.log("orderStatus", this.state.orderStatus);


        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_id: this.state.orderIdNew,
            order_status: this.state.orderStatus,
            current_status: this.state.orderDispatched


        }).then((response) => {
            console.log("handleDispatch", response.data);

            if (this.state.orderDispatched === "Ready-For-Dispatch") {
                this.setState({ disabledDispatch1: "disabled" })

            } else if (this.state.orderDispatched === "Out For Delivery") {
                this.setState({ disabledDispatch1: "disabled" })
                this.setState({ disabledDispatch2: "disabled" })

            } else if (this.state.orderDispatched === "Delivered") {
                this.setState({ disabledDispatch1: "disabled" })
                this.setState({ disabledDispatch2: "disabled" })
                this.setState({ disabledDispatch3: "disabled" })


            } else if (this.state.orderDispatched === "Delivered") {
                this.setState({ disabledDispatch1: "disabled" })
                this.setState({ disabledDispatch2: "disabled" })
                this.setState({ disabledDispatch3: "disabled" })
                this.setState({ disabledDispatch4: "disabled" })

            } else if (this.state.orderDispatched === "Delivered") {
                this.setState({ disabledDispatch1: "disabled" })
                this.setState({ disabledDispatch2: "disabled" })
                this.setState({ disabledDispatch3: "disabled" })
                this.setState({ disabledDispatch4: "disabled" })
                this.setState({ disabledDispatch5: "disabled" })

            }

        }).catch((error) => {
            console.log(error);
        })

    }

    handleDispatch1 = () => {
        console.log("orderDispatched", this.state.orderDispatched);
        console.log("orderStatus", this.state.orderStatus);


        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_id: this.state.orderIdNew,
            order_status: this.state.orderStatus,
            current_status: this.state.orderDispatched


        }).then((response) => {
            console.log("handleDispatch", response.data);
            this.routeChange();

        }).catch((error) => {
            console.log(error);
        })

    }

    handleSwappedLocation = () => {
        console.log("Swapped location", this.state.swappedLocation);
        // hr: 0,
        // min: 0,
        // sec: 0,
        // msec: 0,
        this.setState({ hr: " " });
        this.setState({ min: " " });
        this.setState({ sec: " " });
        this.setState({ msec: " " });

        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_id: this.state.orderIdNew,
            order_status: this.state.orderStatus,
            current_status: this.state.swappedLocation

            // "order_id": "1322456895",
            // "order_status": "swapped",
            // "swapped_to": "bandra"



        }).then((response) => {
            console.log("handleSwappedLocation", response.data);
            this.setState({ disabledSwappedTo: "disabled" })
            this.routeChange();

        }).catch((error) => {
            console.log(error);
        })
    }

    handleSTNLocation = () => {
        console.log("Swapped location", this.state.STNLocation)
        this.setState({ disabledLocation: "disabled" })
    }

    handleSTNType = () => {
        console.log("STNType", this.state.STNType)
        this.setState({ stnProcess: true })
        console.log("stnProcess", this.state.stnProcess)
        this.setState({ stnForm: false })
    }

    hadleSTNDispatch = () => {
        console.log("StnStatus", this.state.StnStatus)

        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_type: this.state.ordertype,
            order_id: this.state.orderIdNew,
            order_status: this.state.orderStatus,
            current_status: this.state.StnStatus

            // "order_type": "normal",
            // "order_id": "1322456796",
            // "order_status": "stn",
            // "location": "bandra"

        }).then((response) => {
            console.log("hadleSTNDispatch", response.data);

            if (this.state.StnStatus === "STN Received") {
                this.setState({ disabledSTN3: "disabled" })

            } else if (this.state.StnStatus === "Ready for Dispatch") {
                this.setState({ disabledSTN3: "disabled" })
                this.setState({ disabledSTN4: "disabled" })

            } else if (this.state.StnStatus === "Out For Delivery") {
                this.setState({ disabledSTN3: "disabled" })
                this.setState({ disabledSTN4: "disabled" })
                this.setState({ disabledSTN5: "disabled" })


            } else if (this.state.StnStatus === "Delivered") {
                this.setState({ disabledSTN3: "disabled" })
                this.setState({ disabledSTN4: "disabled" })
                this.setState({ disabledSTN5: "disabled" })
                this.setState({ disabledSTN6: "disabled" })

            }

        }).catch((error) => {
            console.log(error);
        })

    }

    routeChange = () => {
        console.log("routeChange");
        this.props.navigate('/homepage')
    }

    hadleSTNDispatch1 = () => {
        console.log("StnStatus", this.state.StnStatus)

        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_type: this.state.ordertype,
            order_id: this.state.orderIdNew,
            order_status: this.state.orderStatus,
            current_status: this.state.StnStatus

            // "order_type": "normal",
            // "order_id": "1322456796",
            // "order_status": "stn",
            // "location": "bandra"

        }).then((response) => {
            console.log("hadleSTNDispatch", response.data);
            // disabled={this.state.disabledSTN1}

            // if (this.state.StnStatus === "STN Received") {
            //     this.setState({ disabledSTN3: "disabled" })

            // } else if (this.state.StnStatus === "Ready for Dispatch") {
            //     this.setState({ disabledSTN3: "disabled" })
            //     this.setState({ disabledSTN4: "disabled" })

            // } else if (this.state.StnStatus === "Out For Delivery") {
            //     this.setState({ disabledSTN3: "disabled" })
            //     this.setState({ disabledSTN4: "disabled" })
            //     this.setState({ disabledSTN5: "disabled" })


            // } else if (this.state.StnStatus === "Delivered") {
            //     this.setState({ disabledSTN3: "disabled" })
            //     this.setState({ disabledSTN4: "disabled" })
            //     this.setState({ disabledSTN5: "disabled" })
            //     this.setState({ disabledSTN6: "disabled" })

            // }

            this.routeChange();

        }).catch((error) => {
            console.log(error);
        })

    }

    pace = () => {
        this.setState({ msec: this.state.msec + 10 });
        if (this.state.msec >= 1000) {
            this.setState({ sec: this.state.sec + 1 });
            this.setState({ msec: 0 });
        }
        if (this.state.sec >= 60) {
            this.setState({ min: this.state.min + 1 });
            this.setState({ sec: 0 });
        }
    };

    handleStatus = () => {
        if (this.state.orderStatus === "Swapped") {
            this.setState({ showTimer: false });
        }
        console.log("Hello", this.state.orderStatus)
        console.log("Hello", this.state.ordertype)
        console.log("ID", this.state.orderIdNew)
        console.log("location", this.state.location)
        if (!this.state.running && this.state.orderStatus != "Swapped") {
            this.setState({ showTimer: true });
            console.log("No Timer")
            this.setState({ running: true });
            this.watch = setInterval(() => this.pace(), 10);
        }

        // var date = new Date();
        // var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        // var am_pm = date.getHours() >= 12 ? "PM" : "AM";
        // hours = hours < 10 ? "0" + hours : hours;
        // var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        // var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        // let time = hours + ":" + minutes + ":" + seconds + " ";
        // this.setState({ time: time });

        // let timeDate = new Date('7/10/2013 20:12:34').toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
        // console.log("timeDate", time)

        if (this.state.orderStatus === "in-progress") {
            this.setState({ showNothing: false });
            this.setState({ progressForm: true })
            this.setState({ swappedForm: false })
            this.setState({ stnForm: false })

            if (this.state.ordertype === undefined || this.state.ordertype === null ||
                this.state.orderIdNew === undefined || this.state.orderIdNew === null) {
                alert("Please Select Order Type or Order ID");
                window.location.reload();

            } else {

                axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/create_order.php', {
                    order_type: this.state.ordertype,
                    order_id: this.state.orderIdNew,
                    order_status: this.state.orderStatus,
                    location: this.state.location
                    // order_type: "normal",
                    // order_id: "1322456796",
                    // order_status: "in-progress",
                    // location: "bandra"


                }).then((response) => {
                    console.log(response.data);
                    this.setState({ disabledStatus: "disabled" })

                }).catch((error) => {
                    console.log(error);
                })

            }

        } else if (this.state.orderStatus === "STN") {
            this.setState({ showNothing: false });
            this.setState({ progressForm: false })
            this.setState({ stnForm: true })
            this.setState({ swappedForm: false })

            if (this.state.ordertype === undefined || this.state.ordertype === null ||
                this.state.orderIdNew === undefined || this.state.orderIdNew === null) {
                alert("Please Select Order Type or Order ID");
                window.location.reload();

            } else {

                axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/create_order.php', {
                    order_type: this.state.ordertype,
                    order_id: this.state.orderIdNew,
                    order_status: this.state.orderStatus,
                    location: this.state.location


                }).then((response) => {
                    console.log(response.data);
                })
            }

        } else if (this.state.orderStatus === "Swapped") {
            this.setState({ showNothing: false });
            this.setState({ progressForm: false })
            this.setState({ swappedForm: true })

            if (this.state.ordertype === undefined || this.state.ordertype === null ||
                this.state.orderIdNew === undefined || this.state.orderIdNew === null) {
                alert("Please Select Order Type or Order ID");
                window.location.reload();

            } else {

                axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/create_order.php', {
                    order_type: this.state.ordertype,
                    order_id: this.state.orderIdNew,
                    order_status: this.state.orderStatus,
                    location: this.state.location


                }).then((response) => {
                    console.log(response.data);
                })
            }

        }
    }


    // Homepage design
    render() {
        return (
            <>
                <div class="mainLogo">

                    <div className='LocationDiv1'>
                        <li><Link className="linkTag" to="/homepage"><img className='logoImg' src={"logo.jpg"}></img></Link></li>

                    </div>

                    <div className='LocationDiv'>
                        <span className='LocationName'>{this.state.location}</span>
                    </div>

                </div>

                <nav className='homeNavbar'>
                    <div className='HomeBtn'>
                        {/* <li>
                            <Link className="linkTag" to="/homepage"><img className='logoImg' src={"logo.jpg"}></img></Link>
                        </li> */}


                    </div>

                    <div className='NavRight'>
                        <ul className='NavUl'>
                            {/* <li><Button className='NotifBtn' color="success">N</Button></li> */}
                            <li><Link className="linkTag" to="/todaysorders">Today's Orders</Link></li>
                            <li><Link className="linkTag" to="/history">History</Link></li>
                            <li><Link className="linkTag" to="/">Log Out</Link></li>
                        </ul>
                    </div>
                </nav>


                {/* Div for cards */}
                <div className='CardHolder'>
                    <div className='NewEntryCardContainer1'>
                        <div className='DropdownDiv12'>
                            <h5 className='OT'>ORDER&nbsp;TYPE</h5>
                            <select className='drpSle' value={this.state.ordertype}
                                onChange={(e) => this.setState({ ordertype: e.target.value }, () => {
                                    this.handleType();
                                })} disabled={this.state.disabledType}>
                                <option value="Select Order Type">Select Order Type</option>
                                <option value="Normal"> Normal</option>
                                <option value="FOC"> FOC</option>
                                <option value="Replacement"> Replacement</option>
                            </select>
                        </div>

                        <div className="EnterID">
                            <h5 className='OTID'>ORDER&nbsp;ID</h5>
                            <input className='IDInput' type="number" placeholder='Order ID'
                                onChange={
                                    (e) => this.setState({ orderIdNew: e.target.value, })}
                                required />
                        </div>

                        <div className='DropdownDiv2'>
                            <h5 className='OST'>ORDER&nbsp;STATUS</h5>
                            <select className='drpSle' value={this.state.orderStatus}
                                onChange={(e) => this.setState({ orderStatus: e.target.value }, () => {
                                    this.handleStatus();
                                })} disabled={this.state.disabledStatus}>
                                <option value="Select Order Status">Select Order Status</option>
                                <option value="in-progress"> In Progress</option>
                                <option value="STN"> STN</option>
                                <option value="Swapped"> Swapped</option>
                            </select>
                        </div>

                        {/* <div className='time-Label'>Add Order</div> */}


                    </div>
                </div>
                {this.state.showTimer ? (
                    <div className='TimerDiv'>
                        <span className="TimerSpan">{this.state.hr} : {this.state.min} : {this.state.sec} : {this.state.msec}</span>
                    </div>
                ) : (
                    <div className='TimerDiv'>
                        {/* <span className="TimerSpan">{this.state.hr} : {this.state.min} : {this.state.sec} : {this.state.msec}</span> */}
                    </div>
                )
                }


                <div className='TimerAndCheckboxBg'>
                    {this.state.showNothing ? (

                        <></>

                    ) : this.state.progressForm ? (

                        <div className='TimerAndCheckboxContainer'>

                            <div className='HideUIContainer'>

                                <div class="form-check">
                                    <input onChange={(e) => this.setState({ orderDispatched: e.target.value }, () => {
                                        this.handleDispatch();
                                    })} class="form-check-input" type="checkbox" value="Ready-For-Dispatch" id="defaultCheck1" disabled={this.state.disabledDispatch1} />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Ready For Dispatch
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input onChange={(e) => this.setState({ orderDispatched: e.target.value }, () => {
                                        this.handleDispatch();
                                    })} checked={this.valurchecked} class="form-check-input" type="checkbox" value="Out For Delivery" id="defaultCheck1" disabled={this.state.disabledDispatch2} />
                                    <label checked={true} class="form-check-label" for="defaultCheck1">
                                        Out For Delivery
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input onChange={(e) => this.setState({ orderDispatched: e.target.value }, () => {
                                        this.handleDispatch1();
                                    })} class="form-check-input" type="checkbox" value="Delivered" id="defaultCheck1" disabled={this.state.disabledDispatch3} />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Delivered
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input onChange={(e) => this.setState({ orderDispatched: e.target.value }, () => {
                                        this.handleDispatch1();
                                    })} class="form-check-input" type="checkbox" value="Cancelled" id="defaultCheck1" disabled={this.state.disabledDispatch4} />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Cancelled
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input onChange={(e) => this.setState({ orderDispatched: e.target.value }, () => {
                                        this.handleDispatch1();
                                    })} class="form-check-input" type="checkbox" value="Returned" id="defaultCheck1" disabled={this.state.disabledDispatch5} />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Returned
                                    </label>
                                </div>


                            </div>

                        </div>
                    ) : this.state.swappedForm ? (
                        <div>
                            <div className='DropdownDiv1'>
                                <select value={this.state.swappedLocation} className='drpSle'
                                    onChange={(e) => this.setState({ swappedLocation: e.target.value }, () => {
                                        this.handleSwappedLocation();
                                    })} disabled={this.state.disabledSwappedTo}>
                                    <option value="Swapped To">Swapped To</option>
                                    <option value="Bandra"> Bandra</option>
                                    <option value="Lower parel"> Lower parel</option>
                                    <option value="Sakinaka"> Sakinaka</option>
                                    <option value="Thane"> Thane</option>
                                    <option value="Turbhe"> Turbhe</option>
                                </select>

                            </div>
                        </div>
                    ) : this.state.stnForm ? (

                        <div>

                            <div className='TimerAndCheckboxContainer'>

                                <div className='DropdownDiv1'>
                                    <select value={this.state.STNLocation}
                                        onChange={(e) => this.setState({ STNLocation: e.target.value }, () => {
                                            this.handleSTNLocation();
                                        })} disabled={this.state.disabledLocation}>
                                        <option value="Swapped To">STN From</option>
                                        <option value="Bandra"> Bandra</option>
                                        <option value="Lower parel"> Lower parel</option>
                                        <option value="Sakinaka"> Sakinaka</option>
                                        <option value="Thane"> Thane</option>
                                        <option value="Turbhe"> Turbhe</option>
                                    </select>

                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ STNType: e.target.value }, () => {
                                            this.handleSTNType();
                                        })} class="form-check-input" type="radio" name="radio_name" value="Partial" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Partial STN
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ STNType: e.target.value }, () => {
                                            this.handleSTNType();
                                        })} class="form-check-input" type="radio" name="radio_name" value="Full" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Full STN
                                        </label>
                                    </div>

                                </div>

                                {/* <div className='HideUIContainer'>

                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} class="form-check-input" type="checkbox" value="STN Received" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            STN Received
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} class="form-check-input" type="checkbox" value="Ready for Dispatch" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Ready for Dispatch
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} class="form-check-input" type="checkbox" value="Out For Delivery" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Out For Delivery
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} class="form-check-input" type="checkbox" value="Delivered" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Delivered
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} class="form-check-input" type="checkbox" value="Cancelled" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Cancelled
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} class="form-check-input" type="checkbox" value="Returned" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Returned
                                        </label>
                                    </div>


                                </div> */}

                            </div>
                        </div>

                    ) : this.state.stnProcess ? (
                        <div>

                            <div className='TimerAndCheckboxContainer'>

                                <div className='DropdownDiv1'>
                                    <select value={this.state.STNLocation}
                                        onChange={(e) => this.setState({ STNLocation: e.target.value }, () => {
                                            this.handleSTNLocation();
                                        })}>
                                        <option value="Swapped To">STN From</option>
                                        <option value="Bandra"> Bandra</option>
                                        <option value="Lower parel"> Lower parel</option>
                                        <option value="Sakinaka"> Sakinaka</option>
                                        <option value="Thane"> Thane</option>
                                        <option value="Turbhe"> Turbhe</option>
                                    </select>

                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ STNType: e.target.value }, () => {
                                            this.handleSTNType();
                                        })} class="form-check-input" type="radio" name="radio_name" value="Partial" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Partial STN
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ STNType: e.target.value }, () => {
                                            this.handleSTNType();
                                        })} class="form-check-input" type="radio" name="radio_name" value="Full" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Full STN
                                        </label>
                                    </div>

                                </div>

                                <div className='HideUIContainer'>

                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} disabled={this.state.disabledSTN3} class="form-check-input" type="checkbox" value="STN Received" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            STN Received
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} disabled={this.state.disabledSTN4} class="form-check-input" type="checkbox" value="Ready for Dispatch" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Ready for Dispatch
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} disabled={this.state.disabledSTN5} class="form-check-input" type="checkbox" value="Out For Delivery" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Out For Delivery
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch1();
                                        })} disabled={this.state.disabledSTN6} class="form-check-input" type="checkbox" value="Delivered" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Delivered
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch1();
                                        })} class="form-check-input" type="checkbox" value="Cancelled" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Cancelled
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch1();
                                        })} disabled={this.state.disabledSTN7} class="form-check-input" type="checkbox" value="Returned" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Returned
                                        </label>
                                    </div>


                                </div>

                            </div>
                        </div>

                    ) : (
                        <div>
                            <h1>Nothing</h1>
                        </div>
                    )}

                </div>

            </>
        )
    }
};

export default withRouter(LoginComponent);