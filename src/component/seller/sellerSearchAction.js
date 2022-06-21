import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from "react-bootstrap";
import SellerSearchResult from "./sellerSearchResult";
import SellerAddPopup from "./sellerAddPopup";

export default function SellersearchAction() {
    return (
        <div>
            <div class="row">
                <div class="col">
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            </div>
            <div class="col">
            <SellerAddPopup></SellerAddPopup>
            </div>
            </div>
            <SellerSearchResult data={properties}></SellerSearchResult>
        </div>
    );
}

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
];

const columns = [{
    dataField: 'name',
    text: 'Name',
    sort: true
},
{
    dataField: 'age',
    text: 'Age',
    sort: true
},
{
    dataField: 'gender',
    text: 'Gender',
    sort: true
}];

const properties= {
    data: data,
    columns: columns
}