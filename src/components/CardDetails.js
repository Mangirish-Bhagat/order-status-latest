// import React from 'react';


import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import { withRouter } from './Redirect';
// CardDetails

// import React from 'react';
// JS for modal
class CardDetails extends React.Component {

    state = {
        showNothing: true,
        progressForm: false,
        stnForm: false,
        swappedForm: false,

        stnProcess: true,
        newTimeArr: [],
        timestampConvert: [],
        // valueCheckedProgress1: "",
        // valueCheckedProgress2: "",
        // valueCheckedProgress3: "",
        // valueCheckedProgress4: "",
        // valueCheckedProgress5: "",

        // valueCheckedSTN_1: "",
        // valueCheckedSTN_2: "",
        // valueCheckedSTN_3: "",
        // valueCheckedSTN_4: "",
        // valueCheckedSTN_5: "",
        // valueCheckedSTN_6: "",
        // valueCheckedSTN_7: "",
        // valueCheckedSTN_8: "",

        // valueCheckedSwapped: "",
    }

    // const [modal, setModal] = useState(false);

    // const toggle = () => setModal(!modal);

    // // for first dropdown
    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // const toggle2 = () => setDropdownOpen(prevState => !prevState);

    // // for second dropdown
    // const [dropdownOpen2, setDropdownOpen2] = useState(false);

    // const toggle3 = () => setDropdownOpen2(prevState => !prevState);

    constructor() {
        super()
        this.routeChange = this.routeChange.bind(this);
    }

    componentDidMount = () => {

        setTimeout(() => {
            let location = localStorage.getItem('AuthLocation')
            this.setState({ location: location });

            let cardID = localStorage.getItem('cardID')
            this.setState({ cardID: cardID });
            console.log("cardID", cardID);
        }, 1000)

        // if(this.state.cardID.length >= 1){

        // }
        setTimeout(() => {

            axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/get_order_detail.php', {
                order_id: this.state.cardID

            }).then((response) => {
                console.log(response);

                if (response.data[0].error_code === '2') {
                    alert(response.data[0].error)
                }

                let newCurrentStatus = response.data[0].current_status;
                this.setState({ newCurrentStatus: newCurrentStatus });

                let cardTimeStamp = response.data;
                this.setState({ cardTimeStamp: cardTimeStamp });

                let newOrderID = response.data[0].order_id;
                this.setState({ newOrderID: newOrderID });

                let orderIdNew = newOrderID;
                this.setState({ orderIdNew: orderIdNew })

                let newOrderStatus = response.data[0].order_status;
                this.setState({ newOrderStatus: newOrderStatus });
                console.log("newOrderStatus", newOrderStatus);

                let newOrderType = response.data[0].order_type;
                this.setState({ newOrderType: newOrderType });

                let newTimer = response.data[0].timer_start;
                this.setState({ newTimer: newTimer });

                let newSTNType = response.data[0].stn_type;
                this.setState({ newSTNType: newSTNType });

                let newSTNFrom = response.data[0].stn_from;
                this.setState({ newSTNFrom: newSTNFrom }, () => {
                    console.log(newCurrentStatus, newOrderID, newOrderStatus, newOrderType, newTimer)

                    setTimeout(() => {
                        this.handleType();
                    }, 2000)

                });
                // if (this.state.ordertype === undefined || this.state.ordertype === null ||
                //     this.state.orderIdNew === undefined || this.state.orderIdNew === null) {
                //     alert("Please Select Order Type or Order ID")

                // }

            }).catch((error) => {
                console.log(error);
            })

        }, 2000)
    }

    handleType = () => {
        // console.log("Hello", this.state.ordertype)

        if (this.state.newOrderStatus === "in-progress") {
            this.setState({ showNothing: false })
            this.setState({ progressForm: true })
            this.setState({ swappedForm: false })
            this.setState({ stnForm: false })


            // if (this.state.ordertype === undefined || this.state.ordertype === null ||
            //     this.state.orderIdNew === undefined || this.state.orderIdNew === null) {
            //     alert("Please Select Order Type or Order ID")

            // }
            if (this.state.newCurrentStatus === '') {
                // this.setState({ valueCheckedProgress1: "" })
                console.log("Empty")

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)

            } else if (this.state.newCurrentStatus === 'ready-for-dispatch') {
                this.setState({ valueCheckedProgress1: "checked" })

                this.setState({ disabledDispatch1: "disabled" })
                // this.setState({ disabledDispatch2: "disabled" })
                // this.setState({ disabledDispatch3: "disabled" })
                // this.setState({ disabledDispatch4: "disabled" })
                // this.setState({ disabledDispatch5: "disabled" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)

            } else if (this.state.newCurrentStatus === 'out for delivery') {
                this.setState({ valueCheckedProgress1: "checked" })
                this.setState({ valueCheckedProgress2: "checked" })

                this.setState({ disabledDispatch1: "disabled" })
                this.setState({ disabledDispatch2: "disabled" })
                // this.setState({ disabledDispatch3: "disabled" })
                // this.setState({ disabledDispatch4: "disabled" })
                // this.setState({ disabledDispatch5: "disabled" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)

            } else if (this.state.newCurrentStatus === 'delivered') {
                this.setState({ valueCheckedProgress1: "checked" })
                this.setState({ valueCheckedProgress2: "checked" })
                this.setState({ valueCheckedProgress3: "checked" })

                this.setState({ disabledDispatch1: "disabled" })
                this.setState({ disabledDispatch2: "disabled" })
                this.setState({ disabledDispatch3: "disabled" })
                // this.setState({ disabledDispatch4: "disabled" })
                // this.setState({ disabledDispatch5: "disabled" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)

            } else if (this.state.newCurrentStatus === 'cancelled') {
                this.setState({ valueCheckedProgress1: "checked" })
                this.setState({ valueCheckedProgress2: "checked" })
                this.setState({ valueCheckedProgress3: "checked" })
                this.setState({ valueCheckedProgress4: "checked" })

                this.setState({ disabledDispatch1: "disabled" })
                this.setState({ disabledDispatch2: "disabled" })
                this.setState({ disabledDispatch3: "disabled" })
                this.setState({ disabledDispatch4: "disabled" })
                // this.setState({ disabledDispatch5: "disabled" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)

            } else if (this.state.newCurrentStatus === 'returned') {
                this.setState({ valueCheckedProgress1: "checked" })
                this.setState({ valueCheckedProgress2: "checked" })
                this.setState({ valueCheckedProgress3: "checked" })
                this.setState({ valueCheckedProgress4: "checked" })
                this.setState({ valueCheckedProgress5: "checked" })

                this.setState({ disabledDispatch1: "disabled" })
                this.setState({ disabledDispatch2: "disabled" })
                this.setState({ disabledDispatch3: "disabled" })
                this.setState({ disabledDispatch4: "disabled" })
                this.setState({ disabledDispatch5: "disabled" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)
            }


        } else if (this.state.newOrderStatus === "stn") {
            this.setState({ showNothing: false })
            this.setState({ progressForm: false })
            this.setState({ stnForm: true })
            this.setState({ swappedForm: false })
            this.setState({ stnProcess: true })
            setTimeout(() => {
                this.timeCalculate();
            }, 2000)

            // if (this.state.ordertype === undefined || this.state.ordertype === null ||
            //     this.state.orderIdNew === undefined || this.state.orderIdNew === null) {
            //     alert("Please Select Order Type or Order ID")

            // }
            if (this.state.newSTNType === 'full') {
                this.setState({ valueCheckedSTN_1: "checked" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)

            } else {
                // (this.state.newSTNType === 'partial')
                // this.setState({ valueCheckedSTN_1: "checked" })
                this.setState({ valueCheckedSTN_2: "checked" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)
            }

            if (this.state.newCurrentStatus === 'STN Received') {
                // this.setState({ valueCheckedSTN_1: "checked" })
                // this.setState({ valueCheckedSTN_2: "checked" })
                this.setState({ valueCheckedSTN_3: "checked" })

                this.setState({ disabledSTN3: "disabled" })
                // this.setState({ disabledSTN4: "disabled" })
                // this.setState({ disabledSTN5: "disabled" })
                // this.setState({ disabledSTN6: "disabled" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)


            } else if (this.state.newCurrentStatus === 'ready-for-dispatch' || this.state.newCurrentStatus === 'ready for dispatch') {
                // this.setState({ valueCheckedSTN_1: "checked" })
                // this.setState({ valueCheckedSTN_2: "checked" })
                this.setState({ valueCheckedSTN_3: "checked" })
                this.setState({ valueCheckedSTN_4: "checked" })

                this.setState({ disabledSTN3: "disabled" })
                this.setState({ disabledSTN4: "disabled" })
                // this.setState({ disabledSTN5: "disabled" })
                // this.setState({ disabledSTN6: "disabled" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)


            } else if (this.state.newCurrentStatus === 'out for delivery') {
                // this.setState({ valueCheckedSTN_1: "checked" })
                // this.setState({ valueCheckedSTN_2: "checked" })
                this.setState({ valueCheckedSTN_3: "checked" })
                this.setState({ valueCheckedSTN_4: "checked" })
                this.setState({ valueCheckedSTN_5: "checked" })

                this.setState({ disabledSTN3: "disabled" })
                this.setState({ disabledSTN4: "disabled" })
                this.setState({ disabledSTN5: "disabled" })
                // this.setState({ disabledSTN6: "disabled" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)


            } else if (this.state.newCurrentStatus === 'delivered') {
                // this.setState({ valueCheckedSTN_1: "checked" })
                // this.setState({ valueCheckedSTN_2: "checked" })
                this.setState({ valueCheckedSTN_3: "checked" })
                this.setState({ valueCheckedSTN_4: "checked" })
                this.setState({ valueCheckedSTN_5: "checked" })
                this.setState({ valueCheckedSTN_6: "checked" })

                this.setState({ disabledSTN3: "disabled" })
                this.setState({ disabledSTN4: "disabled" })
                this.setState({ disabledSTN5: "disabled" })
                this.setState({ disabledSTN6: "disabled" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)


            } else if (this.state.newCurrentStatus === 'cancelled') {
                // this.setState({ valueCheckedSTN_1: "checked" })
                // this.setState({ valueCheckedSTN_2: "checked" })
                this.setState({ valueCheckedSTN_3: "checked" })
                this.setState({ valueCheckedSTN_4: "checked" })
                this.setState({ valueCheckedSTN_5: "checked" })
                this.setState({ valueCheckedSTN_6: "checked" })
                this.setState({ valueCheckedSTN_7: "checked" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)


            } else if (this.state.newCurrentStatus === 'returned') {
                // this.setState({ valueCheckedSTN_1: "checked" })
                // this.setState({ valueCheckedSTN_2: "checked" })
                this.setState({ valueCheckedSTN_3: "checked" })
                this.setState({ valueCheckedSTN_4: "checked" })
                this.setState({ valueCheckedSTN_5: "checked" })
                this.setState({ valueCheckedSTN_6: "checked" })
                this.setState({ valueCheckedSTN_7: "checked" })
                this.setState({ valueCheckedSTN_8: "checked" })

                setTimeout(() => {
                    this.timeCalculate();
                }, 2000)
            }

        } else if (this.state.newOrderStatus === "Swapped") {
            this.setState({ showNothing: false })
            this.setState({ progressForm: false })
            this.setState({ swappedForm: true })

            setTimeout(() => {
                this.timeCalculate();
            }, 2000)
        }
    }

    timeCalculate = () => {

        let timestampConvert = this.state.newTimer
        let newTimeArr = [];

        console.log("timestampConvert", timestampConvert)
        // timestampConvert.map((item) => {

        let oldTime = new Date(timestampConvert)
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

        let concatTime = hh + ":" + mm + ":" + ss;
        console.log("concatTime", concatTime)
        newTimeArr.push(concatTime);
        console.log("newTimeArr", newTimeArr)
        this.setState({ newTimeArr: newTimeArr }, () => {
            if (timestampConvert.length === newTimeArr.length) {
                // this.timeRunner()
            }
        })
        // })
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

        })
    }

    handleDispatch = () => {
        console.log("orderDispatched", this.state.orderDispatched);
        console.log("orderStatus", this.state.newOrderStatus);
        console.log("orderIdNew", this.state.orderIdNew);

        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_id: this.state.orderIdNew,
            order_status: this.state.newOrderStatus,
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
        console.log("orderStatus", this.state.newOrderStatus);
        console.log("orderIdNew", this.state.orderIdNew);

        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_id: this.state.orderIdNew,
            order_status: this.state.newOrderStatus,
            current_status: this.state.orderDispatched


        }).then((response) => {
            console.log("handleDispatch", response.data);
            this.routeChange();

        }).catch((error) => {
            console.log(error);
        })

    }

    handleDispatch2 = () => {
        console.log("orderDispatched", this.state.orderDispatched);
        console.log("orderStatus", this.state.newOrderStatus);
        console.log("orderIdNew", this.state.orderIdNew);

        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_id: this.state.orderIdNew,
            order_status: this.state.newOrderStatus,
            current_status: this.state.orderDispatched


        }).then((response) => {
            console.log("handleDispatch", response.data);
            this.routeChange();

        }).catch((error) => {
            console.log(error);
        })

    }

    handleDispatch3 = () => {
        console.log("orderDispatched", this.state.orderDispatched);
        console.log("orderStatus", this.state.newOrderStatus);
        console.log("orderIdNew", this.state.orderIdNew);

        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_id: this.state.orderIdNew,
            order_status: this.state.newOrderStatus,
            current_status: this.state.orderDispatched


        }).then((response) => {
            console.log("handleDispatch", response.data);
            this.routeChange();

        }).catch((error) => {
            console.log(error);
        })

    }



    handleSwappedLocation = () => {
        console.log("Swapped location", this.state.swappedLocation, this.state.newOrderStatus)

        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_id: this.state.orderIdNew,
            order_status: this.state.newOrderStatus,
            current_status: this.state.swappedLocation

            // "order_id": "1322456895",
            // "order_status": "swapped",
            // "swapped_to": "bandra"



        }).then((response) => {
            console.log("handleSwappedLocation", response.data);

        }).catch((error) => {
            console.log(error);
        })
    }

    handleSTNLocation = () => {
        console.log("Swapped location", this.state.STNLocation);
        this.setState({ disabledLocation: "disabled" })

    }

    handleSTNType = () => {
        console.log("STNType", this.state.STNType)
        this.setState({ stnProcess: true })
        console.log("stnProcess", this.state.stnProcess)
        // this.setState({ stnForm: false })
    }

    hadleSTNDispatch = () => {
        console.log("StnStatus", this.state.StnStatus)

        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_type: this.state.newOrderType,
            order_id: this.state.orderIdNew,
            order_status: this.state.newOrderStatus,
            current_status: this.state.StnStatus

            // "order_type": "normal",
            // "order_id": "1322456796",
            // "order_status": "stn",
            // "location": "bandra"

        }).then((response) => {
            console.log("handleDispatch", response.data);

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
            order_type: this.state.newOrderType,
            order_id: this.state.orderIdNew,
            order_status: this.state.newOrderStatus,
            current_status: this.state.StnStatus

            // "order_type": "normal",
            // "order_id": "1322456796",
            // "order_status": "stn",
            // "location": "bandra"

        }).then((response) => {
            console.log("hadleSTNDispatch1", response.data);
            this.routeChange();

        }).catch((error) => {
            console.log(error);
        })

    }

    hadleSTNDispatch2 = () => {
        console.log("StnStatus", this.state.StnStatus)

        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_type: this.state.newOrderType,
            order_id: this.state.orderIdNew,
            order_status: this.state.newOrderStatus,
            current_status: this.state.StnStatus

            // "order_type": "normal",
            // "order_id": "1322456796",
            // "order_status": "stn",
            // "location": "bandra"

        }).then((response) => {
            console.log("hadleSTNDispatch2", response.data);
            this.routeChange();


        }).catch((error) => {
            console.log(error);
        })

    }

    hadleSTNDispatch3 = () => {
        console.log("StnStatus", this.state.StnStatus)

        axios.post('https://kaushalskillacademy.in/test/orders_ops/user/status_update.php', {
            order_type: this.state.newOrderType,
            order_id: this.state.orderIdNew,
            order_status: this.state.newOrderStatus,
            current_status: this.state.StnStatus

            // "order_type": "normal",
            // "order_id": "1322456796",
            // "order_status": "stn",
            // "location": "bandra"

        }).then((response) => {
            console.log("hadleSTNDispatch3", response.data);
            this.routeChange();


        }).catch((error) => {
            console.log(error);
        })

    }

    handleStatus = () => {
        console.log("Hello", this.state.orderStatus)
        console.log("Hello", this.state.ordertype)
        console.log("ID", this.state.orderIdNew)
        console.log("location", this.state.location)

        if (this.state.orderStatus === "in-progress") {
            this.setState({ showNothing: false })
            this.setState({ progressForm: true })
            this.setState({ swappedForm: false })
            this.setState({ stnForm: false })
            // this.setState({ stnProcess: false })

            if (this.state.ordertype === undefined || this.state.ordertype === null ||
                this.state.orderIdNew === undefined || this.state.orderIdNew === null) {
                alert("Please Select Order Type or Order ID");
                window.location.reload();

            }
            // else {

            //     axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/create_order.php', {
            //         order_type: this.state.ordertype,
            //         order_id: this.state.orderIdNew,
            //         order_status: this.state.orderStatus,
            //         location: this.state.location
            //         // order_type: "normal",
            //         // order_id: "1322456796",
            //         // order_status: "in-progress",
            //         // location: "bandra"


            //     }).then((response) => {
            //         console.log(response.data);

            //     }).catch((error) => {
            //         console.log(error);
            //     })

            // }

        } else if (this.state.orderStatus === "STN") {
            this.setState({ showNothing: false })
            this.setState({ stnProcess: true })
            this.setState({ progressForm: false })
            this.setState({ stnForm: true })
            this.setState({ swappedForm: false })
            this.setState({ stnProcess: true })

            if (this.state.ordertype === undefined || this.state.ordertype === null ||
                this.state.orderIdNew === undefined || this.state.orderIdNew === null) {
                alert("Please Select Order Type or Order ID");
                window.location.reload();

            }
            // else {

            //     axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/create_order.php', {
            //         order_type: this.state.ordertype,
            //         order_id: this.state.orderIdNew,
            //         order_status: this.state.orderStatus,
            //         location: this.state.location


            //     }).then((response) => {
            //         console.log(response.data);
            //     })
            // }

        } else if (this.state.orderStatus === "Swapped") {
            this.setState({ showNothing: false })
            this.setState({ progressForm: false })
            this.setState({ swappedForm: true })
            // this.setState({ stnProcess: false })

            if (this.state.ordertype === undefined || this.state.ordertype === null ||
                this.state.orderIdNew === undefined || this.state.orderIdNew === null) {
                alert("Please Select Order Type or Order ID");
                window.location.reload();

            }
            // else {

            //     axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/create_order.php', {
            //         order_type: this.state.ordertype,
            //         order_id: this.state.orderIdNew,
            //         order_status: this.state.orderStatus,
            //         location: this.state.location


            //     }).then((response) => {
            //         console.log(response.data);
            //     })
            // }

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
                            {/* <Notifications
                            data={this.state.dataNotification}
                        /> */}
                            {/* <li><Button className='NotifBtn' color="success"><img src={''} /></Button></li> */}
                            <li><Link className="linkTag" to="/todaysorders">Today's Orders</Link></li>
                            <li><Link className="linkTag" to="/history">History</Link></li>
                            <li><Link className="linkTag" to="/">Log Out</Link></li>
                        </ul>
                    </div>
                </nav>


                {/* Div for cards */}
                <div className='CardHolder'>
                    <div className='NewEntryCardContainer2'>
                        <div className='DropdownDiv12'>
                            <h5 className='OT'>ORDER&nbsp;TYPE</h5>
                            <h3 className='NewOTC'>{this.state.newOrderType}</h3>

                        </div>

                        <div className="DropdownDiv29">

                            <h5 className='OTID'>ODER&nbsp;ID</h5>

                            <h3 className='NewOTC'>{this.state.newOrderID}</h3>
                            {/* <input className='IDInput' type="number" placeholder='Order ID'
                                onChange={
                                    (e) => this.setState({ orderIdNew: e.target.value, })}
                            /> */}
                        </div>

                        <div className='DropdownDiv2'>

                            <h5 className='OST'>ORDER&nbsp;STATUS</h5>

                            <h3 className='NewOTC'>{this.state.newOrderStatus}</h3>
                            {/* <select value={this.state.orderStatus}
                                onChange={(e) => this.setState({ orderStatus: e.target.value }, () => {
                                    this.handleStatus();
                                })}>
                                <option value="Select Order Status">Select Order Status</option>
                                <option value="in-progress">1. In Progress</option>
                                <option value="STN">2. STN</option>
                                <option value="Swapped">3. Swapped</option>
                            </select> */}
                        </div>
                    </div>
                </div>

                <div className='TimerDiv'>
                    <span className="TimerSpan">
                        {this.state.newTimeArr}
                    </span>
                </div>

                <div className='TimerAndCheckboxBg'>
                    {this.state.showNothing ? (

                        <></>

                    ) : this.state.progressForm ? (
                        <div className='TimerAndCheckboxContainer'>

                            <div className='HideUIContainer'>

                                <div class="form-check">
                                    <input onChange={(e) => this.setState({ orderDispatched: e.target.value }, () => {
                                        this.handleDispatch();
                                    })} disabled={this.state.disabledDispatch1} checked={this.state.valueCheckedProgress1} class="form-check-input" type="checkbox" value="Ready-For-Dispatch" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Ready For Dispatch
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input onChange={(e) => this.setState({ orderDispatched: e.target.value }, () => {
                                        this.handleDispatch();
                                    })} disabled={this.state.disabledDispatch2} checked={this.state.valueCheckedProgress2} class="form-check-input" type="checkbox" value="Out For Delivery" id="defaultCheck1" />
                                    <label checked={true} class="form-check-label" for="defaultCheck1">
                                        Out For Delivery
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input onChange={(e) => this.setState({ orderDispatched: e.target.value }, () => {
                                        this.handleDispatch1();
                                    })} disabled={this.state.disabledDispatch3} checked={this.state.valueCheckedProgress3} class="form-check-input" type="checkbox" value="Delivered" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Delivered
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input onChange={(e) => this.setState({ orderDispatched: e.target.value }, () => {
                                        this.handleDispatch2();
                                    })} disabled={this.state.disabledDispatch4} checked={this.state.valueCheckedProgress4} class="form-check-input" type="checkbox" value="Cancelled" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Cancelled
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input onChange={(e) => this.setState({ orderDispatched: e.target.value }, () => {
                                        this.handleDispatch3();
                                    })} disabled={this.state.disabledDispatch5} checked={this.state.valueCheckedProgress5} class="form-check-input" type="checkbox" value="Returned" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Returned
                                    </label>
                                </div>


                            </div>

                        </div>
                    ) : this.state.swappedForm ? (
                        <div>
                            <div className='DropdownDiv1'>
                                <select value={this.state.swappedLocation}
                                    onChange={(e) => this.setState({ swappedLocation: e.target.value }, () => {
                                        this.handleSwappedLocation();
                                    })}>
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
                                    <label>STN From</label>
                                    <select value={this.state.STNLocation}
                                        onChange={(e) => this.setState({ STNLocation: e.target.value }, () => {
                                            this.handleSTNLocation();
                                        })} disabled={this.state.disabledLocation} >
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
                                        })} checked={this.state.valueCheckedSTN_1} class="form-check-input" type="radio" name="radio_name" value="Partial STN" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Partial STN
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ STNType: e.target.value }, () => {
                                            this.handleSTNType();
                                        })} checked={this.state.valueCheckedSTN_2} class="form-check-input" type="radio" name="radio_name" value="Full STN" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Full STN
                                        </label>
                                    </div>
                                </div>

                                <div className='HideUIContainer'>

                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} disabled={this.state.disabledSTN3} checked={this.state.valueCheckedSTN_3} class="form-check-input" type="checkbox" value="STN Received" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            STN Received
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} disabled={this.state.disabledSTN4} checked={this.state.valueCheckedSTN_4} class="form-check-input" type="checkbox" value="Ready for Dispatch" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Ready for Dispatch
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch();
                                        })} disabled={this.state.disabledSTN5} checked={this.state.valueCheckedSTN_5} class="form-check-input" type="checkbox" value="Out For Delivery" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Out For Delivery
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch1();
                                        })} checked={this.state.valueCheckedSTN_6} class="form-check-input" type="checkbox" value="Delivered" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Delivered
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch2();
                                        })} disabled={this.state.disabledSTN6} checked={this.state.valueCheckedSTN_7} class="form-check-input" type="checkbox" value="Cancelled" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Cancelled
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={(e) => this.setState({ StnStatus: e.target.value }, () => {
                                            this.hadleSTNDispatch3();
                                        })} checked={this.state.valueCheckedSTN_7} class="form-check-input" type="checkbox" value="Returned" id="defaultCheck1" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            Returned
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ) :
                        {/* this.state.stnProcess ? (


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
                                </div>

                            </div>


                        ) : */}
                            (
                                <div>
                                    <h1>Nothing</h1>
                                </div>
                            )}

                </div>

            </>
        )
    }
};

export default withRouter(CardDetails);