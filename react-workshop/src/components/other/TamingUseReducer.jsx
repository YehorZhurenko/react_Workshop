import React, { useReducer } from 'react';
import styled from 'styled-components';

const MyContainer = styled.div`
  display: flex;
  justify-content: center;

  .main {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #deba59;
    width: 70%;
    border-radius: 5px;
    padding: 0 30px 30px 30px;
  }
`;

const NewTodo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 70px;
  border-radius: 5px;
  background-color: #a171b0;
  padding: 20px;
  margin: 30px 0 0 30px;

  .inp {
    border: none;
    outline: none;
    height: 60px;
    width: 70%;
    border-radius: 5px;
    font-size: 18px;
    text-align: center;
  }

  .add {
    border: none;
    width: 20%;
    height: 60px;
    color: white;
    border: 5px solid #599e52;
    background-color: #599e52;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

const Todo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 70px;
  border-radius: 5px;
  background-color: #a171b0;
  padding: 20px;
  margin: 30px 0 0 30px;
`;

const CustomButton = styled.button`
  border: none;
  width: 10%;
  height: 60px;
  color: white;

  font-size: 18px;
  font-weight: bold;
`;

const EditButton = styled(CustomButton)`
  margin-left: 10px;
  border-radius: 5px;
  border: 5px solid #adac40;
  background-color: #adac40;
`;

const DeleteButton = styled(CustomButton)`
  font-weight: bold;
  border-radius: 5px;
  border: 5px solid #b34752;
  background-color: #b34752;
`;

const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  height: 60px;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 60%;
  text-decoration: ${(props) => (props.$status === 'done' ? 'line-through' : 'none')};
`;

const TamingUseReducer = () => {
  const reducer = (tasks, action) => {
    switch (action.type) {
      case 'add': {
        return [...tasks, { id: action.id, task: action.task, done: false }];
      }
      case 'delete': {
        return tasks.filter((t) => t.id !== action.id);
      }
      case 'change': {
        tasks.map((t) => {
          if (t.id === action.task.id) {
            t = action.task;
          }
        });
      }
      default:
        throw Error('there is no such action');
    }
  };

  const initState = [
    { id: 1, task: 'prep a rocket', done: true },
    { id: 2, task: 'prep my spaceCostume', done: false },
    { id: 3, task: 'set a course', done: true },
  ];

  let nextID = 4;

  const [tasks, dispatch] = useReducer(reducer, initState);

  const handleAdd = (task) => {
    dispatch({
      type: 'add',
      id: nextID + 1,
      task: task,
      done: false,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: 'add',
      id: id,
    });
  };

  const handleChange = (task) => {
    dispatch({
      type: 'add',
      task: task,
    });
  };

  return (
    <MyContainer>
      <div className="main">
        <NewTodo>
          <input className="inp" type="text" />
          <button className="add">ADD</button>
        </NewTodo>
        <Todo>
          <EditButton>EDIT</EditButton>
          <Title status="done">
            <s>New TODO</s>
          </Title>
          <DeleteButton>DEL</DeleteButton>
        </Todo>
      </div>
    </MyContainer>
  );
};

export default TamingUseReducer;
