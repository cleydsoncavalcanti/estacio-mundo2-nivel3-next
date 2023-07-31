// LivroLista.tsx

import React from 'react';
import LinhaLivro from '@/componentes/LinhaLivro'; // Assuming LinhaLivro is in the 'components' folder
import { Livro } from '@/classes/modelo/Livro'; // Assuming Livro is the class for Book

interface LivroListaProps {
  livros: Livro[];
}

const LivroLista: React.FC<LivroListaProps> = ({ livros }) => {
  const handleExcluir = (codigo: number) => {
    // Implement the logic to handle book deletion here
    console.log(`Book with code ${codigo} will be deleted.`);
  };

  return (
    <div>
      <h1>List of Books</h1>
      <table>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={() => handleExcluir(livro.codigo)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivroLista;
