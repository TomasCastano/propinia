import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

import SectionCard from "./SectionCard"

import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

type OrderContentProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
    addItem: (item: MenuItem) => void
    reduceItem: (item: MenuItem) => void
}

const OrderContent = ({ order, removeItem, addItem, reduceItem } : OrderContentProps) => {
    return (
        <>
            <SectionCard title={`Consumo ( ${order.length} artículos )`}>
                {order.map(item => (
                    <div
                        key={item.id}
                        className="p-5 w-full flex items-center justify-between bg-neutral-100 rounded-sm gap-2.5 border border-neutral-200 last-of-type:border-b"
                    >
                        <div className="flex flex-col items-start gap-4">
                            <h3 className="font-medium">{item.name}</h3>
                            <div className="flex items-center gap-4">
                                <button className="cursor-pointer bg-white hover:bg-neutral-100 h-8 w-8 rounded-full text-neutral-700 hover:text-black border border-neutral-200 font-medium transition-all duration-200 flex items-center justify-center" onClick={() => reduceItem(item)}><RemoveRoundedIcon sx={{ fontSize: 20 }} /></button>
                                <p className="text-neutral-700 font-medium">{item.quantity}</p>
                                <button className="cursor-pointer bg-white hover:bg-neutral-100 h-8 w-8 rounded-full text-neutral-700 hover:text-black border border-neutral-200 font-medium transition-all duration-200 flex items-center justify-center" onClick={() => addItem(item)}><AddRoundedIcon sx={{ fontSize: 20 }} /></button>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-4">
                            <button
                                className="cursor-pointer bg-red-600 hover:bg-red-700 h-8 w-8 rounded-full text-white font-medium transition-all duration-200 flex items-center justify-center"
                                onClick={() => removeItem(item.id)}
                            >
                                <CloseRoundedIcon sx={{ fontSize: 20 }} />
                            </button>
                            <div className="flex flex-col items-end gap-0">
                                <p className="text-neutral-700 text-sm">{formatCurrency(item.price)} c/u</p>
                                <p className="text-black font-semibold">{formatCurrency(item.price * item.quantity)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </SectionCard>
        </>
    )
}

export default OrderContent