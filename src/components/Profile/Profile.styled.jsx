import styled from '@emotion/styled';

export const UserCard = styled.div`
  width: 402px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  padding-top: 20px;
  padding-bottom: 0;
  border: 1px solid #ececec;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  padding-bottom: 40px;
  text-align: center;
`;

export const UserImage = styled.img`
  width: 200px;
  margin-bottom: 30px;
  border-radius: 50%;
  background-color: #f9e79f;
`;

export const UserName = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: bold;
  color: #1c2833;
`;

export const UserTag = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 20px;
  color: #707b7c;
`;

export const UserLocation = styled.p`
  margin: 0;
  font-size: 20px;
  color: #707b7c;
`;

export const Stats = styled.ul`
  display: flex;
  border-top: 1px solid #d6dbdf;
  background-color: #e5e7e9;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-basis: calc(100% / 3);
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #d6dbdf;
`;

export const StatsLabel = styled.span`
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 15px;
  color: #707b7c;
`;

export const StatsQuantity = styled.span`
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 17px;
  font-weight: bold;
  color: #1c2833;
`;
