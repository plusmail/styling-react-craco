import './styles/TodoTemplate.scss';
//{children} props
const TodoTemplate = ({children}) => {

    return (
        <div className={"TodoTemplate"}>
            <div className={'app-title'}>일정관리</div>
            <div className={'content'}>{children}</div>
        </div>
    )
}

export default TodoTemplate;