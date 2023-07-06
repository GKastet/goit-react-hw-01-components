import PropTypes from "prop-types";
const TransactionHistory = (props) =>{
    //console.log(props.items);
    return <table className="transaction-history">
    <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>        
        {props.items.map(({id, type, amount, currency})=>{
            return(<tbody key={id}>
              <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>          
            </tbody>
          )})}
        </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}

export default TransactionHistory;