// LinhaLivro.tsx

import React from 'react';
import ControleEditora from '@/classes/controle/ControleEditora';
import { Livro } from '@/classes/modelo/Livro'; // Import the Livro class correctly

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const controleEditora = new ControleEditora();

  return (
    <tr>
      <td>{livro.título}</td>
      <td>{livro.autores.join(', ')}</td>
      <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
      <td>
        <button onClick={excluir}>Excluir</button>
      </td>
    </tr>
  );
};
export default LinhaLivro; // Export as default