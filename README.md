# 💰 Calculadora de Propinas y Consumo

Esta aplicación es una **calculadora de propinas** desarrollada con React, TypeScript, TailwindCSS y Vite. Permite a los usuarios calcular fácilmente el monto de propina y el total a pagar en una cuenta, según el porcentaje de propina que deseen dejar.

## ✨ Características

- **Cálculo de propina**: Ingresa el monto de la cuenta y selecciona (o escribe) el porcentaje de propina. La app calcula automáticamente el valor de la propina y el total a pagar.
- **División entre personas**: Puedes dividir la cuenta entre varias personas y ver cuánto le corresponde a cada una.
- **Interfaz amigable**: Diseño intuitivo y responsivo, fácil de usar en dispositivos móviles y de escritorio.
- **Reset rápido**: Incluye un botón para reiniciar todos los valores y comenzar un nuevo cálculo.

## 📖 ¿Cómo usar la app?

1. **Selecciona los artículos del menú consumidos** en el campo correspondiente.
2. **Selecciona o ingresa el porcentaje de propina** que deseas dejar (10%, 20%, 50%).
3. Automáticamente verás:
   - El subtotal de la cuenta (valor sin propina)
   - Valor de la propina
   - El total a pagar (cuenta + propina)

## 🛠 Tecnologías utilizadas

- [React](https://es.react.dev/)  
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)  
- [TailwindCSS](https://tailwindcss.com/) 

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

- **Custom Hook**: La lógica principal de la calculadora se encuentra encapsulada en un hook personalizado, lo que permite separar la lógica del UI y facilita escalabilidad y testing.
- **Mejor performance**: El renderizado de componentes está optimizado para evitar renders innecesarios, gracias al uso de técnicas como `React.memo` y la correcta gestión de dependencias.
- **useCallback**: Se emplea el hook `useCallback` para memorizar funciones y evitar que se generen nuevas instancias en cada render, mejorando la eficiencia de componentes hijos que reciben funciones como props.

## Contribución

Si tienes ideas para mejorar la calculadora, ¡no dudes en hacer un fork y enviar tu pull request!

---

Hecho por [TomasCastano](https://github.com/TomasCastano)
