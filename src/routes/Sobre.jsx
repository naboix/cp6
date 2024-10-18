import { SobreStyle } from "../css/SobreStyle"
import imageSobre from '../assets/images/sobre-nos.jpg'

function Sobre() {

    return (
        <SobreStyle>
            <section>
                <div className="heading-sobre">
                    <h1>Sobre a Mahindra Racing</h1>
                    <p>A Mahindra Racing é uma equipe de automobilismo que une inovação, velocidade e compromisso com a sustentabilidade. Com uma trajetória de sucesso nas principais competições de corrida, buscamos não apenas conquistar vitórias, mas também inspirar uma nova geração de pilotos. Acreditamos na força da diversidade e na importância de um futuro mais verde, integrando tecnologias elétricas em nossas corridas e promovendo a conscientização sobre a mobilidade sustentável.</p>
                </div>
                <div className="container-sobre">
                    <section className="sobre">
                        <div className="sobre-img">
                            <img src={imageSobre} alt="" />
                        </div>
                        <div className="sobre-content">
                            <h2>Sobre o Projeto Talento E</h2>
                            <p>O projeto Talento E é uma iniciativa exclusiva da Mahindra Racing, voltada para descobrir e desenvolver novos talentos no automobilismo sustentável no Brasil. Com um enfoque inclusivo, oferecemos oportunidades para jovens de todas as condições financeiras, promovendo um ambiente onde todos podem brilhar. Com treinamento especializado, suporte e uma plataforma para mostrar seu potencial, o Talento E é a chance de transformar sonhos em realidade e preparar os futuros campeões do automobilismo sustentável.</p>
                        </div>
                    </section>
                </div>
            </section>
        </SobreStyle>
    )
}

export default Sobre;