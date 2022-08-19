// import React from 'react';


import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';



// JS for modal
const NewEntry = ({ direction, ...args }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // for first dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle2 = () => setDropdownOpen(prevState => !prevState);

    // for second dropdown
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const toggle3 = () => setDropdownOpen2(prevState => !prevState);





    // Homepage design

    return (
        // navbar 
        <>
            <div className='LocationDiv'>
                <span className='LocationName'>SAKINAKA</span>
            </div>
            <nav className='homeNavbar'>
                <div className='HomeBtn'>
                    <ul className='NavUl'>
                        <li><Link to="/homepage">Home</Link></li>
                    </ul>

                </div>

                <div className='NavRight'>
                    <ul className='NavUl'>
                        <li><Button className='NotifBtn' color="success" onClick={toggle}>N</Button></li>
                        <li><Link to="/todaysorders">Today's Orders</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/">Log Out</Link></li>
                    </ul>
                </div>


                {/* View Notifications page */}


                <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>Notifications</ModalHeader>
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


            {/* Searchbar for ID  */}
            {/* <div className='header text-center'>
                <nav className="SearchNav navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search By Order ID" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div> */}


            {/* Div for cards */}
            <div className='CardHolder'>
                <div className='NewEntryCardContainer'>
                    <div className='DropdownDiv1'>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle2} direction={direction}>
                            <DropdownToggle className='DropdownBtn' caret>
                                Order Type
                            </DropdownToggle>
                            <DropdownMenu {...args}>
                                <DropdownItem>Normal</DropdownItem>
                                <DropdownItem>STN</DropdownItem>
                                <DropdownItem>FOC</DropdownItem>
                                <DropdownItem>Replacement</DropdownItem>
                                {/* <DropdownItem text>Dropdown Item Text</DropdownItem> */}
                            </DropdownMenu>
                        </Dropdown>
                    </div>

                    <div className="EnterID">
                        <input className='IDInput' type="number" placeholder='Order ID' />
                    </div>

                    <div className='DropdownDiv2'>
                        <Dropdown isOpen={dropdownOpen2} toggle={toggle3} direction={direction}>
                            <DropdownToggle className='DropdownBtn' caret>
                                Order Status
                            </DropdownToggle>
                            <DropdownMenu {...args}>
                                <DropdownItem>In Progress</DropdownItem>
                                <DropdownItem>STN</DropdownItem>
                                <DropdownItem>Swapped</DropdownItem>
                                {/* <DropdownItem text>Dropdown Item Text</DropdownItem> */}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className='TimerAndCheckboxBg'>
                <div className='TimerAndCheckboxContainer'>







                    <div className='HideUIContainer'>

                        <div className='TimerDiv'>
                            <span className="TimerSpan">
                                00:00:00
                            </span>
                        </div>



                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Ready For Dispatch
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Out For Delivery
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Delivered
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Cancelled
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Returned
                            </label>
                        </div>


                    </div>






                    {/* <div className='HideUIContainer'>

                        <div className='TimerDiv'>
                            <span className="TimerSpan">
                                00:00:00
                            </span>
                        </div>



                        <div className="STNdiv">
                            <div className="STNFrom">
                                <div className="STNFromText">
                                    <p>STN From</p>
                                </div>
                                <div className="STNFromDropdown">
                                    <select name="" id="">
                                        <option value="all" selected disabled>Location</option>
                                        <option value="all">Bandra</option>
                                        <option value="new">Kandivali</option>
                                        <option value="all">Lower Parel</option>
                                        <option value="all">Sakinaka</option>
                                        <option value="all">Thane</option>
                                        <option value="all">Turbhe</option>
                                    </select>
                                </div>
                            </div>
                            <div class="PartialSTN">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" for="exampleRadios2">
                                    Partial STN
                                </label>
                            </div>
                            <div class="FullSTN">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" for="exampleRadios2">
                                    Full STN
                                </label>
                            </div>
                        </div>



                        <div class="firstFormCheck2 form-check2">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                STN Received
                            </label>
                        </div>
                        <div class="form-check2">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Ready For Dispatch
                            </label>
                        </div>
                        <div class="form-check2">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Out For Delivery
                            </label>
                        </div>
                        <div class="form-check2">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Delivered
                            </label>
                        </div>
                        <div class="form-check2">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Cancelled
                            </label>
                        </div>
                        <div class="form-check2">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Returned
                            </label>
                        </div>


                    </div> */}













                    {/* <div className='HideUIContainer'>

                        <div className='TimerDiv'>
                            <span className="TimerSpan">
                                00:00:00
                            </span>
                        </div>



                        <div className="STNdiv">

                            <div className="STNFrom">
                                <div className="STNFromText">
                                    <p>Swapped To</p>
                                </div>
                                <div className="STNFromDropdown">
                                    <select name="" id="">
                                        <option value="all" selected disabled>Location</option>
                                        <option value="all">Bandra</option>
                                        <option value="new">Kandivali</option>
                                        <option value="all">Lower Parel</option>
                                        <option value="all">Sakinaka</option>
                                        <option value="all">Thane</option>
                                        <option value="all">Turbhe</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div> */}


















                </div>
            </div>
        </>
    );
};

export default NewEntry;