import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"

function App() {

	const { order, addItem, removeItem } = useOrder()

	return (
		<>
			<header className="bg-sky-700 py-10">
				<h1 className="text-4xl text-center font-extrabold text-white">Calculadora de Propinas y Consumo</h1>
			</header>

			<main className="max-w-7xl mx-auto py-5 grid sm:grid-cols-2">
				<div className="flex flex-col p-5 gap-3">
					<h2 className="text-2xl font-semibold mb-5">Menú</h2>
					<div className="space-y-3">
						{menuItems.map(item => (
							<MenuItem
								key={item.id}
								item={item}
								addItem={addItem}
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col p-5 gap-3">
					<OrderContent 
						order={order}
						removeItem={removeItem}
					/>
					
				</div>
			</main>
		</>
	)
}

export default App
