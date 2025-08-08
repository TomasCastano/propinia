import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import OrderTotal from "./components/OrderTotal"
import TipPercentageForm from "./components/TipPercentageForm"

function App() {

	const { tip, setTip, order, addItem, removeItem, saveOrder } = useOrder()

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
				<div className="border-2 border-neutral-300 p-5 rounded-sm flex flex-col gap-7">
					{order.length > 0 ? (
						<>
							<OrderContent 
								order={order}
								removeItem={removeItem}
							/>
							<TipPercentageForm 
								setTip={setTip}
								tip={tip}
							/>
							<OrderTotal 
								order={order}
								tip={tip}
								saveOrder={saveOrder}
							/>
						</>
					) : <p>No hay ninguna orden</p>}
					</div>
					
				</div>
			</main>
		</>
	)
}

export default App
