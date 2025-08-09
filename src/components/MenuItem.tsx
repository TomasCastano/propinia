import type { MenuItem } from "../types"
import { formatCurrency } from "../helpers"

import AddRoundedIcon from '@mui/icons-material/AddRounded'

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

const MenuItem = ({ item, addItem } : MenuItemProps) => {
    return (
        <div
            className="flex items-center justify-between text-left w-full border border-neutral-200 bg-white p-5 rounded-sm hover:shadow-md hover:border-sky-300 transition-all duration-200 group"
        >
            <h4 className="text-neutral-700 text-lg font-medium group-hover:text-sky-600 transition-all duration-200">{item.name}</h4>
            <div className="flex items-center gap-5">
                <div className="flex items-center justify-center p-3 bg-neutral-100 rounded-sm">
                    <p className="text-black text-xl font-semibold">{formatCurrency(item.price)}</p>
                </div>
                <button
                    onClick={() => addItem(item)}
                    title="Agregar al consumo"
                    className="bg-sky-600 hover:bg-sky-700 cursor-pointer text-white w-10 h-10 text-2xl flex items-center justify-center rounded-sm transition-all duration-200"
                >
                    <AddRoundedIcon sx={{ fontSize: 25 }} />
                </button>
            </div>
        </div>
    )
}

export default MenuItem