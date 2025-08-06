import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

const MenuItem = ({ item, addItem } : MenuItemProps) => {
    return (
        <button
            className="flex items-center justify-between text-left w-full bg-neutral-200 hover:bg-neutral-400 p-3 cursor-pointer rounded-sm"
            onClick={() => addItem(item)}
        >
            <p className="text-neutral-700">{item.name}</p>
            <p className="text-black font-medium">{item.price}</p>
        </button>
    )
}

export default MenuItem