import styled from "styled-components";

export const StyledNavbar=styled.div`
background-color: white;
  height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
  .logo {

    width: 120px;
    background-color: green;
    padding: 3px;
    width: fit-content;
    color: white;
    font-weight: 700;
    font-size: 35px;
    height: fit-content;
  }
  ul {
    text-transform: capitalize;
    list-style: none;
    display: flex;

    li {
      margin-right: 1rem;
      &.active {
        &::after {
          position: absolute;
          bottom: 0;
          height: 3px;
          background-color: green;
        }
      }
    }
  }
  .action .qr{
    background: #309b42;
    height: 48px;
    width: 120px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    /* margin-left: 70px;
    font-size: 17px;
    cursor: pointer;
    border: none;
    margin-right: 16px;
    outline: none; */
    font-size: 17px;
    cursor: pointer;
    border: none;
    outline: none; 
  }

  .action .basket{
    background: #309b42;
    height: 48px;
    width: 120px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    /* margin-left: 20px;
    font-size: 17px;
    cursor: pointer;
    border: none;
    margin-right: 1px;
    outline: none; */
    font-size: 17px;
    cursor: pointer;
    border: none;
    outline: none; 
  }
  .action{
    display: flex;
    margin: 0px 0px 0px 0px ;
    gap: 10px;
  }
  .lan{
    gap: 8px;
    display: flex;
    text-align: center;
    /*  */
    position: relative;
    background: #f6f8f9;
    /* padding: 11px; */
    margin-right: 16px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 48px;
    width: 99px;
  }
  .odamcha{
    background: #f6f8f9;
    display: flex;
    text-align: center;
    border-radius: 4px;
    height: 48px;
    width: 48px;
     .cok{
      margin: 12px;
     }
  }
`;