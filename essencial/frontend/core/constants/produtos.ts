import Produto from "../produto/Produto"

const produtos: Produto[] = [
    {
        id: 1,
        nome: 'A1 - Base Giratória de montagem/modelagem/pintura',
        descricao: 
            'Base giratória A1 para aviação R$ 145,00 reforçada, em plástico ABS, pintura e montagem Atende à escalas de 1/144 (grandes) a 1/32 (pequenos) Possui ventosas para fixação Feita em Plástico ABS + resistente a temperaturas, não quebra nem enverga como PLA Possui 4 tipos de Suporte Mais avançada que a equivalente importada!',
        precoBase: 150,
        precoPromocional: 145,
        tags: ['A1', 'A2', 'M1', 'M3'],
        modelo: 'A1',
        especificacoes: {
            material: 'Plastico ABS',
        },
    },
    {
        id: 2,
        nome: 'A2 - Base Giratória Big Brother de montagem/modelagem/pintura',
        descricao: 
            'Base giratória A2 para aviação R$ 145,00 reforçada, em plástico ABS, pintura e montagem Atende à escalas de 1/144 (grandes) a 1/32 (pequenos) Possui ventosas para fixação Feita em Plástico ABS + resistente a temperaturas, não quebra nem enverga como PLA Possui 4 tipos de Suporte Mais avançada que a equivalente importada!',
        precoBase: 170,
        precoPromocional: 165,
        tags: ['A1', 'A2', 'M1', 'M3'],
        modelo: 'A2',
        especificacoes: {
            material: 'Plastico ABS',
        },
    }, 
    {
        id: 3,
        nome: 'A3 - JIG de Nivelamento para Asas de Biplano',
        descricao: 
            'TESTE',
        precoBase: 55,
        precoPromocional: 50,
        tags: ['A1', 'A2', 'M3'],
        modelo: 'A3',
        especificacoes: {
            material: 'Plastico ABS',
        },
    },
]

export default produtos
