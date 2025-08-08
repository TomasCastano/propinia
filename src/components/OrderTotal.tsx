import { useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
    saveOrder: () => void
}

const OrderTotal = ({ order, tip, saveOrder } : OrderTotalProps) => {

    const subtotalAmount = useCallback(() => (
        order.reduce((total, item) => total + (item.quantity * item.price), 0)
    ), [order])

    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])

    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])

    return (
        <>
        <div className="space-y-3">
            <h2 className="font-semibold text-2xl">Totales y Propina</h2>
            <p className="flex gap-1">
                Subtotal a pagar: 
                <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
            </p>
            <p className="flex gap-1">
                Propina: 
                <span className="font-bold">{formatCurrency(tipAmount())}</span>
            </p>
            <p className="flex gap-1">
                Total a pagar: 
                <span className="font-bold">{formatCurrency(totalAmount())}</span>
            </p>
        </div>
        <button 
            className="w-full bg-black p-3 mt-10 text-white font-bold rounded-sm disabled:opacity-15"
            disabled={totalAmount() === 0}
            onClick={saveOrder}
        >
            Guardar Orden
        </button>
        </>
    )
}

export default OrderTotal