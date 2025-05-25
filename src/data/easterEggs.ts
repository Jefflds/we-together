import { EasterEgg } from '../types';

export const easterEggs: EasterEgg[] = [
  {
    id: 'hidden-heart',
    hint: 'Procure pelo coração escondido na página',
    message: 'Você encontrou nosso coração secreto! Você é incrível!',
    trigger: 'hidden-heart-icon'
  },
  {
    id: 'double-click',
    hint: 'Dê um duplo clique no bolo',
    message: 'Esse bolo representa a doçura que você traz para minha vida!',
    trigger: 'cake-icon'
  },
  {
    id: 'hover-photo',
    hint: 'Passe o mouse na foto da torta',
    message: 'Essa torta simboliza cada camada de amor que construímos juntos!',
    trigger: 'pie-hover'
  },
  {
    id: 'law-books',
    hint: 'Clique nos livros de direito',
    message: 'Sua dedicação aos estudos me inspira todos os dias!',
    trigger: 'law-books-icon'
  },
  {
    id: 'secret-code',
    hint: 'Digite "amor" em qualquer lugar da página',
    message: 'Amor é a palavra que define o que sinto por você!',
    trigger: 'type-love'
  }
];