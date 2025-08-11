import SectionCard from './SectionCard'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const EmptyOrder = () => {
    return (
        <SectionCard title="Consumo ( 0 artículos )">
            <div className="flex flex-col items-center justify-center gap-3 p-10 text-gray-500">
                <ShoppingCartOutlinedIcon sx={{ fontSize: 60, color: '#bbb' }} />
                <div>
                    <p className="text-center">No hay ningún artículo en la orden</p>
                    <p className="text-center text-sm">Selecciona productos del menú para comenzar</p>
                </div>
            </div>
        </SectionCard>
    )
}

export default EmptyOrder