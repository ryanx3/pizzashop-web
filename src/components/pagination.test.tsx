import { render } from "@testing-library/react";
import { Pagination } from "./pagination";
import userEvent from "@testing-library/user-event";

describe("Pagination", () => {
  const onPageChangeCallback = vi.fn(); //Cria uma função espiã

  it("should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    );

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument();
  });

  it("should be able to navigate to the next pages", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback} //função espiã para verificar se é chamada ao mudar de página
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima página",
    });
    // O "role" (papel) de um elemento HTML ajuda a identificar o tipo de elemento, como botão. O nome especificado ajuda a encontrar o botão correto baseado no texto visível.

    const user = userEvent.setup();
    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });
});
