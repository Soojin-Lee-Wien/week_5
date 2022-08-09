import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function Container() {
  return (
    <ContainerBox>
      <h1>무엇을 할깡</h1>

      <Link to="/info">
        <div className='workBox'>
          <h3>할일</h3>
        </div>
      </Link>

      <Link to="/Todo">
        <div className='workBox'>
          <h3>Todo</h3>
        </div>
      </Link>
    </ContainerBox>
  )
}

export default Container

const ContainerBox = styled.div`
margin-left: 50px;

a {
    text-decoration: none;
    color: black;
  }

.workBox {
  text-align: center;
  border: 1px solid black;
  border-radius: 15px;
  width: 90vw;
  height: 10vh;
  margin-bottom: 30px;
}

`;
