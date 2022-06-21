import BootstrapTable from 'react-bootstrap-table-next'; 
import paginationFactory from 'react-bootstrap-table2-paginator';  

export default function BuyerSearchResult(props) {
    
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
          console.log(row);
          console.log(props.data.updateBid);
          props.data.updateBid(row);
        }
      };
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
                rowEvents={rowEvents}
                >
            </BootstrapTable>
        </div>
    );
}