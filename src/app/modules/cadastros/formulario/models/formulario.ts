import { Pergunta } from './pergunta';

export interface Formulario {
    titulo?: string;
    descricao?: string;
    perguntas?: Pergunta[];
}
