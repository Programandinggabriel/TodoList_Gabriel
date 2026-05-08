import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {  
  return (
    <input
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
      value={searchValue}
      placeholder="Cortar cebolla"
      className="TodoSearch"
    />
  );
}

export { TodoSearch };