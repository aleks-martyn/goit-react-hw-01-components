import styled from '@emotion/styled';

export const Section = styled.section`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
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
`;

export const StatListItem = styled.li`
  display: flex;
  flex-basis: calc(100% / 5);
  flex-direction: column;
  color: #fff;
`;

export const ItemLabel = styled.span`
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const ItemPercentage = styled.span`
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 20px;
`;
