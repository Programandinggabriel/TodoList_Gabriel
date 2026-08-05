import TodoBox from "./components/TodoBox";

function App() {
  return (
    <section className="vh-100" style={{ backgroundColor: '#e2d5de' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <TodoBox/>
        </div>
      </div>
    </section>
  );
}

export default App;
