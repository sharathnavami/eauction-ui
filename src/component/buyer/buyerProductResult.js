import BootstrapTable from 'react-bootstrap-table-next'; 
import paginationFactory from 'react-bootstrap-table2-paginator';  

export default function BuyerProductResult(props) {
    
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
          console.log(row);
          console.log(props.data.updateProduct);
          props.data.updateProduct(row);
        }
      };
    return (
        <div>
            <h2>Available Products for Bidding</h2>
            <BootstrapTable
                striped
                hover
                keyField='id'
                data={props.data?.data}
                columns={props.data?.columns} 
                pagination={ paginationFactory() }
                rowEvents={rowEvents}
                >
            </BootstrapTable>
        </div>
    );
}