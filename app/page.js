import ProductSlider from "./components/slider";

export default async function Home() {

  return (
    <main className="pt-20">
      <div className="main__banner">
      </div>
      <div className="pt-10 pb-2">
        <h1 className="text-[#d98b48] pb-4" style={{fontSize:"50px", paddingLeft:"23%"}}>Produtos</h1>
        <div className="carousel__section flex items-center justify-center">
          <div style={{width:'50%'}}>    
            <ProductSlider />
          </div>
        </div>
      </div>
      <hr
            style={{
                color: "#FFF",
                backgroundColor: "#FFF",
                height: 1
            }}
        />
      <div className="pt-10">
        <h1 className="text-[#d98b48] pb-4" style={{fontSize:"50px", paddingLeft:"23%"}}>Sobre</h1>
        <div className="text-[#FFF] flex justify-center">
          <div style={{width:"54%", textAlign:"justify", lineHeight:"30px"}}>
            Na Baker Coffee House, apresentamos uma abordagem simplificada e cativante, 
            transcendendo a mera oferta de café para proporcionar uma experiência enriquecedora. 
            Cada xícara servida constitui um convite para a exploração de sabores requintados, provenientes 
            de grãos criteriosamente selecionados e submetidos a uma torrefação artesanal. Em um ambiente elegante e sereno, 
            onde a essência do café entrelaça-se harmoniosamente com a ressonância do jazz ao vivo, concebemos um espaço 
            destinado a encontros de significado e à formação de memórias indeléveis.
            Na Baker Coffee House, nosso compromisso transcende a simples oferta de um produto, visando 
            transformar cada visita em um capítulo singular em sua jornada, onde a paixão pela excelência se 
            entrelaça com a magia do momento. Convidamos você a participar desta experiência única, onde a qualidade 
            excede as expectativas e a efemeridade do instante se converte em um legado duradouro.
          </div>
        </div>
      </div>
    </main>
  )
}
