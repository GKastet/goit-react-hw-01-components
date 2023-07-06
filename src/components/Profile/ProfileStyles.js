import styled from 'styled-components';

export const ProfileStyled = styled.div`
  outline: 1px solid green;
  box-sizing: border-box;
  width: 600px;
  margin: 20px auto;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 20px;
  color: grey;
  font-size: 24px;
  overflow: hidden;
  img {
    outline: 1px solid blue;
    display: block;
    margin: 50px auto;
    width: 200px;
    border-radius: 50%;
  }
 
`;
export const NameStyled = styled.p`
  color: black;
  font-size: 50px;
  font-weight: 700;
  margin-top:0;
  margin-bottom:20px;
`;

export const Stats = styled.ul`
  box-sizing: border-box;
  list-style: none;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: lightgrey;
  color: black;
  li {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    width: 100%;
    border: 1px solid grey;
  }
`;
export const StatsNumber = styled.span`
  font-weight: bold;
`;
