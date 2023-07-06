import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  box-sizing: border-box;
  width: 300px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 70px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  li {
    border: 1px solid black;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 20px 0;
    border-radius: 4px;
  }
  span {
    padding-left: 20px;
  }
  p {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
  }
`;
