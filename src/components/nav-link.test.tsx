import { render } from "@testing-library/react";
import { NavLink } from "./nav-link";
import { MemoryRouter } from "react-router-dom";

describe("NavLink", () => {
  it("should be highlighted when the link is an active link", () => {
    const wrapper = render(
      <>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        //Esse wrapper serve para renderizarmos componentes que dependem de contextos, rotas e etc...
        wrapper: ({ children }) => {
          return (
            //Rota ativa é salva na memória e nao na URL do browser
            //initialEntries permite que eu passe um array cujo na primeira posição é a rota que quero que "inicie"
            <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
          );
        },
      },
    );
    //Como passamos um texto para o nosso NavLink, podemos buscar ele atráves desse texto "About". 
    //dataset - Verifica todos os data-atributes que iniciam com data nos elementos HTML
    //Verificamos se o elemento data é true por string por que atributos HTML nao podem ser boleanos
    expect(wrapper.getByText("Home").dataset.current).toEqual("false");
    expect(wrapper.getByText("About").dataset.current).toEqual("true");
  });
});
