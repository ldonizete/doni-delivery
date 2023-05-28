import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center flex-col my-40">
      <img
        className="mobile:mb-10"
        src="/assets/404.webp"
        alt="página não encontrada"
        tabIndex={0}
      />
      <h1 className="titleError">Ops...</h1>
      <div>Parece que essa página não existe ou não está mais disponível</div>
      <Link href="/" tabIndex={0} aria-label="voltar para home">
        <button className="btnNotFound mt-10">Ir para a página inicial</button>
      </Link>
    </div>
  );
}
