import { useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

import SectionCard from "./SectionCard"

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
        <SectionCard title="Totales y Propina" className="bg-gradient-to-r from-sky-600 to-sky-700 text-white">
            <p className="flex items-center justify-between gap-2 border-b border-white/30 pb-2">
                Subtotal a pagar: 
                <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
            </p>
            <p className="flex items-center justify-between gap-2 border-b border-white/30 pb-2">
                Propina ({tip * 100}%): 
                <span className="font-bold">{formatCurrency(tipAmount())}</span>
            </p>
            <p className="flex items-center justify-between gap-2">
                Total a pagar: 
                <span className="font-bold">{formatCurrency(totalAmount())}</span>
            </p>
            <button 
                className="cursor-pointer w-full bg-white p-3 mt-5 text-sky-900 font-bold rounded-sm disabled:opacity-15"
                disabled={totalAmount() === 0}
                onClick={saveOrder}
            >
                Guardar Orden
            </button>
        </SectionCard>
    )
}

export default OrderTotal