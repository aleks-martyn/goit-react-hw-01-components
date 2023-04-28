import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableHeaderData,
  TableBody,
  TableRow,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderData>Type</TableHeaderData>
          <TableHeaderData>Amount</TableHeaderData>
          <TableHeaderData>Currency</TableHeaderData>
        </TableRow>
      </TableHeader>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
