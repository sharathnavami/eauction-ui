import './sellerSearchResult.css';
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


export default function SellerSearchResult(props) {

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            props.data.updateBid(row);
        }
    };
    console.log(props)
    return (
        <div>
            <h3>Search Result</h3>
            <BootstrapTable
                striped
                hover
                keyField='id'
                data={props.data?.data}
                columns={props.data?.columns}
                pagination={paginationFactory()}
                rowEvents={rowEvents}
            >
            </BootstrapTable>
        </div>
    );
}


