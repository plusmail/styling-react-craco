import {MdAdd, MdAddAlarm} from "react-icons/md";
import '@styles/TodoInsert.scss'
import {useCallback, useState} from "react";

const TodoInsert = () => {

    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        console.log(e.target.value);
        setValue(e.target.value);
    }, [])
    // []이렇게 하는 것은 state, props,
    // 부모가 변경 되었을때 갱신(랜드링) 안하게 하는것

    return (
        <form className={"TodoInsert"}>
            <input placeholder={"할일을 입력하세요."}
                   value={value}
                   onChange={onChange}
            />
            <button type={"submit"}>
                <MdAddAlarm/>
            </button>

        </form>
    )
}

export default TodoInsert;