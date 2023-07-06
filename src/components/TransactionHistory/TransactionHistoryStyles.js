import styled from 'styled-components';

export const TransactionHistoryStyled = styled.table`
 // outline: 1px solid red;
  width: 450px;
  margin: 0 auto;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
  thead {
    
    background-color: aqua;
  }
  tr{
    outline: 1px solid grey;
  }

  th {
    width: 150px;
    padding: 15px 0;
    outline: 1px solid grey;
  }
  td {
    width: 150px;
    padding: 15px 0;
    font-size: 18px;
    outline: 1px solid grey;
  }
`;

export const TableHeader = styled.tr`
  background-color: aqua;
`;
