import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

export default function BuyerBidUpdate(props) {
    const [searchInput, setSearchInput] = useState();

    function submit() {
        console.log("searchInput:" + searchInput);
    }
    return (
        <div>
            <h3>Update bid Amount for product: {props.data?.name}</h3>
            <div className="row">
                <div className="col-md-6">
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">Current Bid : {props.data?.age}</InputGroup.Text>
                        <InputGroup.Text id="inputGroup-sizing-default">Enter New Bid Amount : </InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={e => setSearchInput(e.target.value)}
                        />
                        <Button variant="primary" onClick={submit}>
                            Update
                        </Button>
                    </InputGroup>
                </div>
            </div>

        </div>
    );
}