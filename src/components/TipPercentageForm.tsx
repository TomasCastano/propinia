import { Dispatch, SetStateAction, useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

import SectionCard from "./SectionCard"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    order: OrderItem[]
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

const TipPercentageForm = ({ order, setTip, tip } : TipPercentageFormProps) => {
    const subtotalAmount = useCallback(() => (
        order.reduce((total, item) => total + (item.quantity * item.price), 0)
    ), [order])

    return (
        <SectionCard title="Propina">
            <form action="" className="flex flex-col gap-2">
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <input
                            type="radio"
                            id={tipOption.id}
                            name="tip"
                            value={tipOption.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                        />
                        <label htmlFor={tipOption.id} className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 flex-1 cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-neutral-100 transition-colors">
                            <div className="flex items-center justify-between gap-2 w-full">
                                <div className="flex flex-col gap-1.5">
                                    <span className="font-semibold">{tipOption.label}</span>
                                    <span className="text-xs text-gray-500">{tipOption.id === 'tip-10' ? 'Servicio básico' : tipOption.id === 'tip-20' ? 'Buen servicio' : 'Excelente servicio'}</span>
                                </div>
                                <span className="text-sm font-semibold">{formatCurrency(subtotalAmount() * tipOption.value)}</span>
                            </div>
                        </label>
                    </div>
                ))}
            </form>
        </SectionCard>
    )
}

export default TipPercentageForm