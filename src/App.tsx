import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"

function App() {

	return (
		<>
			<header className="bg-sky-700 py-10">
				<h1 className="text-4xl text-center font-extrabold text-white">Calculadora de Propinas y Consumo</h1>
			</header>

			<main className="max-w-7xl mx-auto py-20 grid sm:grid-cols-2">
				<div>
					<h2>Menú</h2>
					{menuItems.map(item => (
						<MenuItem key={item.id} />
					))}
				</div>
				<div>
					<h2>Consumo</h2>
				</div>
			</main>
		</>
	)
}

export default App
