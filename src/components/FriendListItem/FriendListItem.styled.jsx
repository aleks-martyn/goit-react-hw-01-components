import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 380px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ItemStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
`;

export const ItemImage = styled.img`
  width: 70px;
  background-color: #ececec;
  border-radius: 5px;
`;

export const ItemName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
