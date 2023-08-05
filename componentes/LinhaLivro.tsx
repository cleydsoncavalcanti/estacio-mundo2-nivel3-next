// LinhaLivro.tsx

import React from "react";
import ControleEditora from "@/classes/controle/ControleEditora";
import Livro from "@/classes/modelo/Livro";

const LinhaLivro = ({
  livro,
  excluir,
}: {
  livro: Livro;
  excluir: () => void;
}) => {
  const controleEditora = new ControleEditora();

  return (
    <tr>
      <td>
        <div className="d-flex flex-column">
          {livro.título}
          <button onClick={excluir} className="btn btn-danger">
            Excluir
          </button>
        </div>
      </td>
      <td>{livro.resumo}</td>
      <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
      <td>{livro.autores.join(", ")}</td>
      <td>
        <button onClick={excluir}>Excluir</button>
      </td>
    </tr>
  );
};
export default LinhaLivro; // Export as default
