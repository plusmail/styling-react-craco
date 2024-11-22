import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import {useCallback, useReducer, useRef, useState} from "react";

// const complexObject = {
//     id:1,
//     object: {
//         k:11,
//         m:21
//     },
//     name : "홍길동"
// }
//
// const nextComplexObject = {
//     ...complexObject,
//     object : {
//         ...complexObject.k,
//         k:100
//     }
// }

function  createBulkTodos(){
    const array = [];
    for(let i=1; i<=2500; i++){
        array.push({
            id:i,
            text: `할 일.... ${i}`,
            checked: false
        })
    }
    return array;
}

function todoReducer(todos, action){
    switch (action.type) {
        case 'INSERT':
            return todos.concat(action.todo);
        case 'REMOVE':
            return  todos.filter( todo => todo.id !== action.id);
        case 'TOGGLE':
            return todos.map( todo =>
                todo.id === action.id ? {...todo, checked: !todo.checked} : todo,
            );
        default:
            return  todos;
    }
}

function App() {
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         text: '스프링 boot',
    //         checked: true,
    //     },
    //     {
    //         id: 2,
    //         text: '컴포넌트 배오기',
    //         checked: true,
    //     },
    //     {
    //         id: 3,
    //         text: '일정관리 앱 만들기',
    //         checked: false,
    //     }
    //
    // ])

    // const [todos, setTodos] = useState(createBulkTodos)

    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

    const nextId = useRef(2501);

    const onInsert = useCallback(
        // text 는 TodoInsert onSubmit에 있는 onInsert( value )
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            };
            // setTodos(todos.concat(todo))
            dispatch( {type: 'INSERT', todo});
            nextId.current += 1
        },
        [],
    );

    const onRemove = useCallback(
        id=>{
            // setTodos(todos.filter(
            //     todo=> todo.id !== id
            // ))
            dispatch({type:'REMOVE', id});
        },[]
    )

    const onToggle = useCallback(
        id=>{
            // setTodos(
            //     todos.map(todo =>
            //         todo.id === id ? {...todo, checked : !todo.checked } : todo
            //     )
            // )
            dispatch({type:'TOGGLE', id})
        }, []
    )

    return (
        <TodoTemplate>
            {/*App.js에서 onInsert useCallback 함수를 TodoInsert로 함수를 전달*/}
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    );
}

export default App;
