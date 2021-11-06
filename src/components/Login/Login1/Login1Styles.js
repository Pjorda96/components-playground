import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 460px;
  //height: 500px;
  //position: relative;
  padding: 20px;
  background: #f1f3f6;
  overflow: hidden;
  color: rgb(44, 62, 80);
  border-radius: 18px;
  box-shadow: 0 11px 35px 2px rgba(0, 0, 0, 0.24);
  
  .title {
    font-weight: normal;
    font-size: 1.8rem;
  }

  .inputs-section {
    padding-bottom: 20px;
    width: 100%;
    
    .input {
      margin-top: 10px;

      label {
        display: block;
        padding-left: 0;
      }

      input {
        width: 100%;
        padding: 14px 0;
        background: #f1f3f6;
        border-radius: 18px;
        border: 2px solid rgb(44, 62, 80);
        transition: all .25s ease;
        opacity: .2;
        box-shadow: 0 11px 35px 2px rgba(0, 0, 0, 0.24);

        &:focus {
          opacity: 1;
        }
      }
    }
    
    .forgot {
      width: 100%;
      text-align: right;
      padding: 5px;

      a {
        text-decoration: none;
        color: rgb(44, 62, 80);
        font-size: .9rem;
      }
    }
  }

  .footer {
    background: rgb(146, 37, 218);
    color: #fff;
    border: 0;
    padding: 14px 20px;
    border-radius: 18px;
    width: 100%;
    display: block;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all .25s ease;
  }
`;
