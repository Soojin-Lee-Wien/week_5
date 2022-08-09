import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Information() {
  const [todo, setTodo] = useState({
    maker: "",
    title: "",
    content: ""
  })


  const onSubmitHandler = (todo) => {
    axios.post("http://localhost:5000/posts", todo);
  };


  return (
    <InputBox>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
      
      <div className='textBox'>
        <h2>작성자</h2>
        <input type="text"
          placeholder='작성자의 이름을 입력해줘'
          onChange={(e) => {
            const { value } = e.target;
            setTodo({
              ...todo,
              maker: value,
            });
            console.log(e)

          }}
        />
      </div>

      <div className='textBox'>
        <h2>할일</h2>
        <input type="text"
          placeholder='할일을 입력해줘'
          onChange={(e) => {
            const { value } = e.target;
            setTodo({
              ...todo,
              title: value,
            });
          }} />
      </div>

      <div className='textBox'>
        <h2>내용</h2>
        <input type="text"
          placeholder='내용을 입력해줘'
          onChange={(e) => {
            const { value } = e.target;
            setTodo({
              ...todo,
              content: value,
            });
          }} />
      </div>
      <button>저장</button>
      </form>
    </InputBox>
  )
}

export default Information


const InputBox = styled.div`
  margin-left: 50px;
  
  .textBox > input{
    width: 90vw;
    height: 7vh;

  }
`;