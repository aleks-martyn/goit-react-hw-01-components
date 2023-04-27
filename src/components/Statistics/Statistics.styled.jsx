import styled from '@emotion/styled';

export const Section = styled.section`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  text-align: center;
  background-color: #fff;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  text-transform: uppercase;
  color: #424949;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const StatListItem = styled.li`
  display: flex;
  width: 80px;
  flex-direction: column;
`;

export const ItemLabel = styled.span`
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const ItemPercentage = styled.span`
  padding-top: 10px;
  padding-bottom: 20px;
`;
