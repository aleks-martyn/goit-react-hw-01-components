import styled from '@emotion/styled';

export const UserCard = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
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
  gap: 20px;
  padding: 0;
  justify-content: center;
  list-style-type: none;
  background-color: #e5e7e9;
`;

export const StatsLabel = styled.span`
  font-size: 15px;
  color: #707b7c;
`;

export const StatsQuantity = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #1c2833;
`;
