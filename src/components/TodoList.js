import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Todolist() {
  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:5000/posts");
    setTodos(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchTodos();
  }, []);

  console.log(todos)

  const deleteBtn= (e) => {
    axios.delete(`http://localhost:5000/posts/${e.target.id}`);
  };

  return (
    <div>
      <h1 style={{marginLeft: '50px'}}>내 할일</h1>
        {todos && todos.map((item, index) => (
              <TodoBox key={index.id}>
            <div className='TodoList'>
              <h2>할일: {item.title}</h2>
              <p>작성자:{item.maker}</p>
              <p>내용:{item.content}</p>
              
            </div>
            <div className='myBtn'>
              <button
              type='button'
              id={item.id}
              onClick={deleteBtn}>삭제</button>
            </div>
         </TodoBox>
        ))}
    </div>
  )
}

const TodoBox = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 90vw;
  height: 25vh;
  margin-left: 50px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;


  .TodoList > h2 {
    margin-left: 10px;
  }

  .TodoList > p {
    margin-left: 10px;
  }

  .myBtn {
    margin-top: 50px;
    margin-right: 10px;
  }
  .myBtn > button {
    background-color: yellowgreen;
    padding: 10px;
    border: none;
    border-radius: 15px;
  }
  `;