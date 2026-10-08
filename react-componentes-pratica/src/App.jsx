import Titulo from './components/Titulo.jsx';
import Aluno from './components/Aluno.jsx';

function App() {
  return (
    <>
      <div className="titulo">
        <Titulo />
      </div>
      
      <div className="AlunosInfo">
        <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
        <Aluno nome="Ana" turma="Desenvolvimento de Sistemas" />
        <Aluno nome="Pedro" turma="Desenvolvimento de Sistemas" />
      </div>
    </>
  );
}

export default App;
