import './CreateTodoButton.css';

function CreateTodoButton(props) {
  return (
    <button 
      onClick={props.onCreate}
      className="CreateTodoButton"
    >+</button>
  );
}

export { CreateTodoButton };