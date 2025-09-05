import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const FinancelloPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6', // Azul bem visível
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },
    surface:{
      0:'#3b82f6',
      50:"#eff6ff",
      100:'#3b82f6'
    },
    text: {
          color: '#1f2937'         // Texto escuro (legível no fundo branco)
        }

  }
});

export default FinancelloPreset;
