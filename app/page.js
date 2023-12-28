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
      <div className="pt-10 pb-10">
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
      <hr
        style={{
            color: "#FFF",
            backgroundColor: "#FFF",
            height: 1
        }}
      />
      <div className="pt-10">
        <h1 className="text-[#d98b48] pb-4" style={{fontSize:"50px", paddingLeft:"23%"}}>Localização</h1>
        <div className="text-[#FFF] flex justify-center">
          <div className="flex items-center" style={{width:"54%"}}>
            <img style={{width:"70%"}} src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTfB0oUVDvAMq3i-i4zwkiMwYpRk84ZViYbjVYzO-mI9lGomKe-ewpqYwuewpQl03GDIHfNj6xF7DMWE09xRCK8UPhVvg=s1600"/>
            <div className="pl-10" style={{fontSize:"16px", textAlign:"justify", lineHeight:"30px"}}>
              <p>Rua Padre Viêira, 588 - Bairro Jardim</p>
              <p>Santo André - SP</p>
              <p>09090-720</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
