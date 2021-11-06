import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: #3641b7;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(179, 179, 179, .7);
  z-index: 1;
  overflow: hidden;
  
  .box {
    position: absolute;
    width: 100%;
  }
  
  .upper {
    top: 0;
    height: 150px;
    background: #3641b7;
    color: #fff;
    border-radius: 0 0 80px 0;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      z-index: -1;
    }
    
    h1 {
      padding: 1rem 0 0 1.3rem;
    }
    
    h6 {
      padding: 0 1.4rem;
    }
  }
  
  .lower {
    bottom: 0;
    height: 250px;
    background: #fff;
    border-radius: 80px 0 0 0;

    .form {
      width: 100%;
      height: 100%;
      padding-top: 1.6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      
      .input {
        position: relative;
        
        input {
          width: 260px;
          height: 25px;
          outline: none;
          border: 2px solid #3641b7;
          border-radius: 3px;
          transition: .2s;
        }
        
        label {
          position: absolute;
          top: 28%;
          left: 10px;
          font-size: .9rem;
          transition: .2s;
          padding: 0 .1rem;
        }
      }
      
      .login-btn {
        width: 270px;
        height: 45px;
        margin-bottom: 1.5rem;
        border-radius: 3px;
        color: white;
        background-color: #3641b7;
        border: #3641b7;
        font-size: 1.5rem;
        cursor: pointer;
      }
    }
  }
`;
