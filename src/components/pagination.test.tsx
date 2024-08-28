import { render } from "@testing-library/react";
import { Pagination } from "./pagination";
import userEvent from "@testing-library/user-event";
// Instalação: pnpm i -D @testing-library/user-event
// Usamos a biblioteca user-event para simular interações do usuário, como cliques em botões, no nosso caso para testar o botão de navegação

// Spies = São funções falsas que não executam nenhuma ação por si mesmas. Elas são usadas apenas para verificar se a função foi chamada, quantas vezes foi chamada e com quais parâmetros.
// Spies ajudam a testar se os callbacks foram chamados corretamente e permitem verificar a interação com a função.

describe("Pagination", () => {
  const onPageChangeCallback = vi.fn(); // Cria uma função espiã para verificar se o callback de mudança de página é chamado corretamente

  it("should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0} // Página inicial
        totalCount={200} // Total de itens a serem paginados
        perPage={10} // Número de itens por página
        onPageChange={() => {}} // Callback vazio para o evento de mudança de página
      />,
    );

    // Verifica se o texto indicando a página atual e o total de itens está presente no documento
    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument();
  });

  it("should be able to navigate to the next pages", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0} // Página inicial
        totalCount={200} // Total de itens a serem paginados
        perPage={10} // Número de itens por página
        onPageChange={onPageChangeCallback} // Passa a função espiã para verificar se é chamada ao mudar de página
      />,
    );

    // Obtém o botão de "Próxima página" usando o papel (role) e o nome do botão
    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima página",
    });
    // O "role" (papel) de um elemento HTML ajuda a identificar o tipo de elemento, como botão. O nome especificado ajuda a encontrar o botão correto baseado no texto visível.

    const user = userEvent.setup(); // Configura a biblioteca user-event para simular interações
    await user.click(nextPageButton); // Simula um clique assíncrono no botão "Próxima página"

    // Verifica se a função espiã foi chamada com o parâmetro 1, indicando que a página mudou para a página 1
    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
    // toHaveBeenCalledWith verifica se a função foi chamada com os parâmetros especificados. toHaveBeenCalled apenas verifica se a função foi chamada, mas sem checar parâmetros.
  });
});
