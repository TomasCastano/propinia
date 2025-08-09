import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import OrderTotal from "./components/OrderTotal"
import TipPercentageForm from "./components/TipPercentageForm"

import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded'
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded'

function App() {

	const { tip, setTip, order, addItem, removeItem, saveOrder } = useOrder()

	return (
		<>
			<header className="bg-gradient-to-r from-sky-500 to-sky-600 text-white py-8 px-4 shadow-lg">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-3xl md:text-4xl font-bold text-center flex items-center justify-center gap-3"><LocalAtmRoundedIcon sx={{ fontSize: 40 }} /> Calculadora de Propinas y Consumo</h1>
					<p className="text-center mt-2 text-sky-100">Selecciona tus productos y calcula la propina perfecta</p>
				</div>
			</header>

			<main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
				<div className="bg-white flex flex-col gap-6 rounded-xl p-4 md:p-6 lg:p-8 shadow-xl border-0 w-full lg:w-[60%]">
					<h2 className="text-2xl font-bold mb-5 flex items-center gap-2"><RestaurantMenuRoundedIcon sx={{ fontSize: 25 }} /> Menú</h2>
					<div className="flex flex-col gap-3">
						{menuItems.map(item => (
							<MenuItem
								key={item.id}
								item={item}
								addItem={addItem}
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col p-5 gap-3 w-full lg:w-[40%]">
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
