import HeadButton from "./button/Index";

export default function HeaderButtons() {
  return (
    <div className="conteinerHeadButton flex mt-10 px-72 lg:flex-wrap overflow-x-auto">
      <HeadButton label="cerveja" name="Cervejas"></HeadButton>
      <HeadButton label="destilados" name="Destilados"></HeadButton>
      <HeadButton label="drink" name="Não Alcoólicos"></HeadButton>
      <HeadButton label="vinho" name="Vinhos"></HeadButton>
      <HeadButton label="gin" name="Drinks Prontos"></HeadButton>
      <HeadButton label="snack" name="Comidinhas"></HeadButton>
      <HeadButton label="bbq" name="Churrasco"></HeadButton>
      <HeadButton label="store" name="Loja"></HeadButton>
    </div>
  );
}
