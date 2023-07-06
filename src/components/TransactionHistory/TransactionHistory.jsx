import PropTypes from "prop-types";
import { TransactionHistoryStyled } from "./TransactionHistoryStyles";
const TransactionHistory = (props) =>{    
    return <TransactionHistoryStyled>
    <thead>
          <tr>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
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
        </TransactionHistoryStyled>
}

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired
}

export default TransactionHistory;