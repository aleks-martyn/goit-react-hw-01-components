import styled from '@emotion/styled';

export const Table = styled.table`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TableHeader = styled.thead`
  color: #fff;
  background-color: #5dade2;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const TableHeaderData = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const TableRow = styled.tr`
  padding-top: 0;
`;

export const TableData = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
`;