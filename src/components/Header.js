import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Box>
        <Link to="/">
          <h1>Hallo</h1>
        </Link>

        <div className='inputBox'>

          <h3>login</h3>

          {/* <div>
          <label>ID<input type='text'></input></label>
        </div>
        <div>
          <label>PW<input type='text'></input></label>
        </div> */}
        </div>

      </Box>
      <hr />
    </>
  )
};

export default Home

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: black;
  }

  h1 {
    margin-left: 20px
  }

  h3 {
    margin-right: 20px;
  }
  
  .loginbtn {
    background-color: aqua;
    padding: 20px;
    margin-left: 600px;
  }

  input {
    margin: 5px;
    width: 100px;
    height: 20px;
  }

  
`;