import React, {useState} from 'react';

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddToDo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleRemoveToDo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Jegyzettömb</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddToDo}>Hozzáadás</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleRemoveToDo(index)}>Törlés</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;