import styled from 'styled-components';

const center = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCard = styled.div`
  ${center};
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  
  .center {
    ${center}
  }
  
  .box {
    width: 250px;
    height: 250px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.288);
    border-radius: 23px;
    flex-direction: column;
    color: white;
    position: relative;
    overflow: hidden;
    
    img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }
  }
  
  .user_name {
    margin-bottom: 5px;
    font-size: 2rem;
  }
  
  .skill {
    color: rgba(255, 255, 255, 0,555);
  }
  
  //arrow
  .arr_container, .cancel {
    position: absolute;
    width: 50px;
    height: 50px;
    background: white;
    bottom: 0;
    right: 0;
    border-radius: 23px 0 23px 0;
    color: rgb(70, 70, 70);
    font-size: 1.6rem;
    cursor: pointer;
    transition: all .4s;
  }
  
  .arr_container {
    i {
     transform: rotate(45deg);
    }
  }
  
  .active_arr {
    transform: translate(80%, 80%);
  }
  
  .left_container {
    position: absolute;
    background: #0f2027;
    width: 100%;
    height: 100%;
    border-radius: 23px;
    //padding: 40px 0 0 20px;
    transition: all .4s;

    p {
      margin-left: 20px;
      margin-bottom: 15px;
      font-size: 1.2rem;
    }

    .skills {
      margin-left: 20px;
      
      div {
        display: inline-block;
        color: rgb(155, 155, 155);
        border: 1px solid rgb(155, 155, 155);
        padding: 5px 10px;
        font-size: .9rem;
        margin: 4px 4px 4px 0;
      }
    }

    .icons {
      font-size: 1.6rem;
      margin-top: 10px;
      margin-left: 20px;
      
      a {
        color: #cfcfcf;
        cursor: pointer;
        margin-right: 10px;
        transition: all .4s;
        
        &:hover {
          color: #2c5364;
        }
      }
    }
  }
  
  .off {
    transform: translate(-80%, -80%) rotate(90deg);
  }
  
  .active {
    transform: translate(0) rotate(0);
  }
`;
