import { Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default function AdminSearchResult(props) {
    console.log(props)
    return (
        <div>
            <h2>User Result</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="container bg-light justify-content-start">
                        <div class="row">
                            <div class="col-md-4">
                                First Name
                            </div>
                            <div class="col-md-4">
                                : {props.data?.firstName}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                Last Name
                            </div>
                            <div class="col-md-4">
                                : {props.data?.lastName}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                Address
                            </div>
                            <div class="col-md-4">
                                : {props.data?.address}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                City
                            </div>
                            <div class="col-md-4">
                                : {props.data?.city}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                State
                            </div>
                            <div class="col-md-4">
                                : {props.data?.state}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                PIN
                            </div>
                            <div class="col-md-4">
                                : {props.data?.pin}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                Phone
                            </div>
                            <div class="col-md-4">
                                : {props.data?.phone}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                Email
                            </div>
                            <div class="col-md-4">
                                : {props.data?.email}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">

                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                {(props.data!== undefined)?<div><br/><Button variant="primary" >Activate</Button> <Button variant="primary" >Deregister</Button></div>:<div></div>}
                </div>
            </div>
        </div>
    );
}