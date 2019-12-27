import { Endereco } from './endereco';
import { Login } from './login';

export interface Pessoa {
    nome?: string;
    idade?: number;
    olho?: string;
    cabelo?: string;
    telefones?: string[];
    enderecos?: Endereco[];
    login?: Login;
}
