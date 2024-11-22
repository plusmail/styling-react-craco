import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import {useCallback, useRef, useState} from "react";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '스프링 boot',
            checked: true,
        },
        {
            id: 2,
            text: '컴포넌트 배오기',
            checked: true,
        },
        {
            id: 3,
            text: '일정관리 앱 만들기',
            checked: false,
        }

    ])

    const nextId = useRef(4);

    const onInsert = useCallback(
        // text 는 TodoInsert onSubmit에 있는 onInsert( value )
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            };
            setTodos(todos.concat(todo))
            nextId.current += 1
        },
        [todos],
    );


    return (
        <TodoTemplate>
            {/*App.js에서 onInsert useCallback 함수를 TodoInsert로 함수를 전달*/}
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos}/>
        </TodoTemplate>
    );
}

export default App;
