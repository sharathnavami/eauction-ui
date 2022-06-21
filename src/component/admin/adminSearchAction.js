import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, FormControl } from "react-bootstrap";
import AdminPopup from "./adminPopup";
import AdminSearchResult from "./adminSearchResult";



export default function AdminSearchAction() {
    const [searchInput, setSearchInput] = useState();
    const [searchData, setSearchData] = useState();

    function submit() {
        console.log("searchInput:" + searchInput);
        setSearchData(data)
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Search User</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={e => setSearchInput(e.target.value)}
                        />
                        <Button variant="primary" onClick={submit}>
                        Search
                    </Button>
                    </InputGroup>
                    
                </div>
                <div className="col-md-4">
                    <AdminPopup />
                </div>
            </div>
            <br />
            {(searchData!==undefined)?<AdminSearchResult data={searchData} />:<div></div>}
        </div>
    );
}

const data =
    { firstName: "Steve", lastName: "Harvey", address: "4 Street", city: "NY", state: "NY", pin: "600001", phone: "1234567890", email: "steve@gmail.com", userType: "buyer" }

    