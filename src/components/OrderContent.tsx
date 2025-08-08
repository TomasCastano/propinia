import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

const OrderContent = ({ order, removeItem } : OrderContentProps) => {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-5">Consumo</h2>
            <div className="border-2 border-neutral-300 p-5 rounded-sm">
                {order.map(item => (
                    <div
                        key={item.id}
                        className="p-3 w-full flex items-center justify-between gap-2.5 border-t border-neutral-200 last-of-type:border-b"
                    >
                        <div>
                            <h3 className="font-bold">{item.name}</h3>
                            <p className="text-neutral-700">{formatCurrency(item.price)}</p>
                            <p className="text-neutral-700 font-medium">Cantidad: {item.quantity}</p>
                            <p className="text-neutral-700 font-bold">Total: {formatCurrency(item.price * item.quantity)}</p>
                        </div>
                        <button
                            className="bg-red-700 h-10 w-10 rounded-md text-white font-medium"
                            onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default OrderContent