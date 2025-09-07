import { primitive } from '@primeuix/themes/aura/base';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const FinancelloPreset = definePreset(Aura, {
    // A seção SEMANTIC define os tokens GERAIS para o app

     primitive: {
        ...Aura.primitive, // Copiamos as cores base do Aura

        // Criamos nossa própria paleta de cores da marca
        minhasCores: {
            laranjaPrincipal: '#f59e0b',
            laranjaHover: '#d97706',
            fundoComponente: '#34D399' // O fundo escuro que você queria
        }
    },

    semantic: {
         ...(Aura.semantic?.primary || {}),

        // Sua paleta de cor primária (laranja/âmbar)
        primary: {
          color:'{minhasCores.laranjaPrincipal}',
           hover: {
                ...(Aura.semantic?.primary?.hover || {}),
                color: '{minhasCores.laranjaHover}'
            },


            // ... (outros tons se precisar)
        },

        // Sua cor GERAL para fundos de componentes
        surface: {
            ...(Aura.semantic?.surface || {}),
            card: '{minhasCores.fundoComponente}' // Um cinza escuro
        }
    },

    // AQUI ESTÁ A CORREÇÃO ESPECÍFICA PARA A GALERIA
    galleria: {
        // Copiamos as definições base da Galleria do Aura
        ...(Aura.galleria || {}),

        // Navegamos até a parte de miniaturas (thumbnail)
        thumbnail: {
            ...(Aura.galleria?.thumbnail || {}),

            // E dentro dela, o container que tem o fundo preto
            container: {
                ...(Aura.galleria?.thumbnail?.container || {}),

                // AQUI ESTÁ A MÁGICA:
                // Dizemos para o fundo do container de miniaturas usar a
                // mesma cor que definimos para o nosso 'surface.card' geral.
                background: 'transparent'
            }
        }
    }
});

export default FinancelloPreset;

