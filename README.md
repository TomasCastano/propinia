# 💸 Propinia — Calculadora de Propinas y Consumo

Esta aplicación es **Propinia**, una calculadora de propinas desarrollada con React, TypeScript, TailwindCSS y Vite. Permite calcular fácilmente el monto de propina y el total a pagar en una cuenta según el porcentaje elegido. Incluye un sistema de consumo (menú) para agregar, incrementar, reducir y eliminar artículos, e integra iconografía con Material UI.

## ✨ Características

- **Cálculo de propina**: Selecciona el porcentaje (10%, 20%, 50%) y se calcula propina y total automáticamente.
- **Gestión de consumo (pedido)**: Agrega artículos del menú, incrementa/reduce cantidades y elimina ítems del pedido.
- **Totales en tiempo real**: Subtotal, propina y total con formato monetario.
- **Guardar orden**: Limpia el pedido y restablece el porcentaje de propina para iniciar un nuevo cálculo.
- **Interfaz amigable y responsive**: UI moderna con TailwindCSS, optimizada para desktop y móvil.

## 📖 ¿Cómo usar la app?

1. **Selecciona los artículos del menú** que consumiste y ajusta sus cantidades.
2. **Elige el porcentaje de propina** (10%, 20% o 50%).
3. Verás automáticamente:
   - Subtotal del consumo (sin propina)
   - Valor de la propina
   - Total a pagar (consumo + propina)
4. Opcional: pulsa **Guardar Orden** para limpiar el pedido y comenzar de nuevo.

## 🛠 Tecnologías utilizadas

- [React](https://es.react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Material UI Icons](https://mui.com/material-ui/material-icons/) (paquetes `@mui/icons-material` y `@mui/material`)

## 🚀 Instalación y ejecución local

1. Clona este repositorio:
   ```bash
   git clone https://github.com/TomasCastano/calculadora-de-propinas.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## 💡 Optimización y buenas prácticas

- **Custom Hook (`src/hooks/useOrder.ts`)**: Encapsula la lógica del pedido (agregar, reducir, eliminar, guardar) y el estado de propina.
- **useCallback**: Memoriza cálculos derivados en `OrderTotal` y `TipPercentageForm` para evitar trabajo innecesario.
- **Tipado fuerte**: Modelos `MenuItem` y `OrderItem` en `src/types/index.ts`.
- **Componentización**: UI dividida en componentes (`MenuItem`, `OrderContent`, `TipPercentageForm`, `OrderTotal`, `SectionCard`).

## 📂 Estructura del proyecto

```text
src/
  App.tsx
  main.tsx
  components/
    EmptyOrder.tsx
    MenuItem.tsx
    OrderContent.tsx
    OrderTotal.tsx
    TipPercentageForm.tsx
    SectionCard.tsx
  data/
    db.ts                # Lista de artículos del menú
  helpers/
    index.ts            # Utilidades (p. ej. formato de moneda)
  hooks/
    useOrder.ts         # Lógica de pedido y propina
  types/
    index.ts            # Tipos TS para MenuItem y OrderItem
```

## ⚙️ Configuración y personalización

- **Moneda/Formato**: Cambia el formateo en `src/helpers/index.ts` (por defecto `en-US` y `USD`).
- **Artículos del menú**: Edita `src/data/db.ts` para añadir/quitar productos o modificar precios.
- **Porcentajes de propina**: Ajusta el arreglo `tipOptions` en `src/components/TipPercentageForm.tsx`.
- **Estilos**: La UI usa TailwindCSS; puedes extender clases utilitarias o crear componentes de estilo.

## 🧪 Scripts disponibles

- `npm run dev`: Inicia el entorno de desarrollo con Vite.
- `npm run build`: Compila TypeScript y genera el build de producción.
- `npm run preview`: Sirve el build de producción localmente.
- `npm run lint`: Ejecuta ESLint sobre el proyecto.

## Contribución

Si tienes ideas para mejorar la calculadora, ¡no dudes en hacer un fork y enviar tu pull request!

---

Hecho por [TomasCastano](https://github.com/TomasCastano)
