import { Board } from "./components/board/Board"

function App() {

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center">
        <h1 className="text-3xl font-bold font-mono text-center mb-6">Jogo da velha</h1>
        <Board/>
    </div>
  )
}

export default App
