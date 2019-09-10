import React, {useState} from 'react';


const Todo =({todo, index,completeTodo, deleteTodo}) => {
    console.log(index);
    return (
        <div style={{textDecoration: todo.isCompleted? 'line-through': ''}} className={"todo"}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>complete</button>
                <button onClick={() => deleteTodo(index)}>delete</button>
            </div>
        </div>
    )
};


const TodoForm = ({addTodo}) => {
    const  [value ,setValue] = useState('')
    const handleSubmit=(e) => {
        e.preventDefault();
        if(!value) {
            return;
        }
        addTodo(value);
        setValue('')
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                className={"input"}
                type={"text"}
                placeholder={"Enter todos"}
                value={value}
                onChange={e =>setValue(e.target.value)}
            />
        </form>
    )
};


const HomePage = props => {
    const [todos, setTodos] = useState(
        [
            {
                text:'Learn react native',
                isCompleted: false
            },
            {
                text:'Learn react',
                isCompleted: false
            },
            {
                text: 'Hell world',
                isCompleted: true
            }
        ]
    );

    const addTodo = (text) => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };
    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos)
    };
    const deleteTodo =(index) => {
        const deleteTodo = [...todos];
        deleteTodo.splice(index, 1);
        setTodos(deleteTodo);
    };
    return (
        <div className={"app"}>
            <div className="todo-list">
                {todos.map((todo, index) => (


                    <Todo deleteTodo={deleteTodo} completeTodo={completeTodo} key={index} index={index} todo={todo}/>

                    )
                )}
            </div>
            <TodoForm addTodo={addTodo}/>
        </div>
    )
};

export default HomePage