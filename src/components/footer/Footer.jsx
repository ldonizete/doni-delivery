import "./Index.css";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:h-64 justify-between relative bottom-0 w-full mt-20">
      <div className="flex items-start justify-evenly pt-6 mobile:flex-col mobile:items-center">
        <img
          className="mobile:mb-10"
          src="/assets/logo_ze_com_nome.webp"
          alt="lodo do ze delivery com nome"
          tabIndex={0}
        />
        <div className="flex flex-col ">
          <h2 className="mb-2">Sobre o Zé Delivery</h2>
          <a className="mb-2" tabIndex={0}>
            Me ajuda, Zé!
          </a>
          <a className="mb-2" tabIndex={0}>
            Trabalhe conosco
          </a>
          <a tabIndex={0}>Cidades atendidas</a>
        </div>
        <div className="contentFooterLink">
          <div className="mb-6">
            <h2 className="mb-2">Parcerias</h2>
            <a tabIndex={0}>Quero ser parceiro</a>
          </div>
          <div>
            <h2 className="mb-2">Cartão Presente</h2>
            <a tabIndex={0}>Comprar aqui</a>
          </div>
        </div>
        <div>
          <h2>Social</h2>
        </div>
      </div>
      <div className="flex items-center justify-evenly pb-4 mobile:flex-col mobile:items-center">
        <div className="contentTerm">
          <a>Termos de uso</a>
          <a className="ml-4">Política de privacidade</a>
        </div>

        <p className="textAddress w-1/2 text-center">
          ZE SOLUCOES TECNOLOGICAS DE COMERCIO DE BEBIDAS LTDA. - CNPJ:
          37.657.197/0001-46 Rua Fradique Coutinho, 1632 - CEP: 05.416-002
          Pinheiros - São Paulo/SP
        </p>
        <label>BEBA COM MODERAÇÃO</label>
      </div>
    </footer>
  );
}
