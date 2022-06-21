import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControl } from "react-bootstrap";
import BidProduct from "./bidProduct";
import BuyerSearchResult from "./buyerSearchResult";
import BuyerPopup from "./buyerPopup";
import BuyerBidUpdate from "./buyerBidUpdate";

export default function BuyerSearchAction() {
    const [selectRow, setSelectRow] = useState();

    const update= row =>{
        setSelectRow(row);
    }

    const properties = {
        data: data,
        columns: columns,
        updateBid:update
    }

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
                    <BuyerPopup></BuyerPopup>
                </div>
            </div>
            <br />
            <BuyerSearchResult data={properties} />
            <br/>
            {(selectRow!==undefined)?<BuyerBidUpdate data={selectRow}></BuyerBidUpdate>:<div></div>}
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



