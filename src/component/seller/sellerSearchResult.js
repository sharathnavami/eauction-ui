import './sellerSearchResult.css';
import React from 'react'  
import BootstrapTable from 'react-bootstrap-table-next'; 
import paginationFactory from 'react-bootstrap-table2-paginator';  


export default function SellerSearchResult(props) {

    return (
        <div>
            <h2>Search Result</h2>
            <BootstrapTable
                striped
                hover
                keyField='name'
                data={props.data.data}
                columns={props.data.columns} 
                pagination={ paginationFactory() }
                >
            </BootstrapTable>
        </div>
    );
}
