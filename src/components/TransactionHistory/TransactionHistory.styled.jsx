import styled from '@emotion/styled';

export const Table = styled.table`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TableHeader = styled.thead`
  color: #fff;
  background-color: #5dade2;
`;

export const TableHeaderData = styled.th`
  font-size: 15px;
  font-weight: normal;
  text-transform: uppercase;
  padding-top: 10px;
  padding-bottom: 10px;
  &:not(:last-child) {
    border-right: 1px solid #d5dbdb;
  }
`;

export const TableBody = styled.tbody`
  color: grey;
  background-color: #fff;
  text-align: center;
`;

export const TableRow = styled.tr`
  &:nth-of-type(2n) {
    background-color: #e5e7e9;
  }
`;

export const TableData = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  &:not(:last-child) {
    border-right: 1px solid #d5dbdb;
  }
`;
