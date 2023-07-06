import styled from 'styled-components';

export const StatisticsStyled = styled.section`
  outline: 1px solid blue;
  width: 600px;
  text-align: center;
  margin: 0px auto;
  margin-bottom: 70px;
  border-radius: 8px;
  overflow: hidden;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    padding-top: 30px;
    font-size: 36px;
    font-weight: 700;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    border: 1px solid grey;
    color: white;
    display: flex;
    flex-direction: column;
    width: 120px;
    padding: 10px;
    font-size: 24px;
  }
`;
export const StatisticsLi = styled.li`
  background-color: ${({ color }) => color};
`;
