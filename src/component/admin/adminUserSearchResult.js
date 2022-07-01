import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


export default function AdminSearchResult(props) {

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            props.data.clickRow(row);
        }
    };
    console.log(props.data?.columns)
    return (
        <div>
            <h3>Search Result</h3>
            <BootstrapTable
                striped
                hover
                keyField='email'
                data={props.data?.data}
                columns={props.data?.columns}
                pagination={paginationFactory()}
                rowEvents={rowEvents}
            >
            </BootstrapTable>
        </div>
    );
}


