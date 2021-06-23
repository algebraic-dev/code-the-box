import styled from 'styled-components';

export const Container = styled.div`
  top: 90px;
  position : relative;
  max-width:1150px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1150px){
    margin-left: 10px;
    margin-right: 10px;
    width: calc(100% - 20px) !important;
  }
`