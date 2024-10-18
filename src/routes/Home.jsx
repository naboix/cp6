import { Link } from 'react-router-dom';
import { HomeStyle } from "../css/HomeStyle";
import { useState } from 'react';
import Banner1 from '../assets/images/banner1.jpg';
import Banner2 from '../assets/images/banner2.png';
import Banner3 from '../assets/images/banner3.jpg';
import CarIcon from '../assets/images/inclusao-icon.png';
import EcoIcon from '../assets/images/brasil-icon.png';
import RaioIcon from '../assets/images/star-icon.png';
import Estrela from '../assets/images/estrela-icon.png';
import FaceOne from '../assets/images/face1.jpg';
import FaceTwo from '../assets/images/face2.jpg';
import FaceThree from '../assets/images/face3.jpg';
import Produto1 from '../assets/images/produto1.png';
import Produto2 from '../assets/images/produto2.png';
import Produto3 from '../assets/images/produto3.png';

const Home = () => {
    const images = [Banner1, Banner3, Banner2];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <HomeStyle>
            <section>
                {/* Slideshow Section */}
                <section className="slideshow-container">
                    {images.map((image, index) => (
                        <div key={index} className={`slide ${index === currentIndex ? 'slide-active' : ''}`}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                    <button className="prev" onClick={prevSlide}>❮</button>
                    <button className="next" onClick={nextSlide}>❯</button>
                </section>

                {/* Informações Section */}
                <section className="informacoes">
                    <h3>TalentoE</h3>
                    <p>A Mahindra Racing busca jovens talentos para acelerar rumo ao futuro! Participe da Seleção Talento E e mostre que você tem o que é preciso para ser o próximo grande piloto. Prepare-se para o desafio e venha fazer parte dessa equipe inovadora!</p>
                    <hr />
                    <ul className="item">
                        {[
                            { icon: CarIcon, title: "Inclusão", desc: "Nosso projeto é inclusivo e aberto a todas as condições financeiras." },
                            { icon: RaioIcon, title: "Seja a estrela", desc: "Venha ser a próxima estrela do automobilismo sustentável com a Mahindra Racing" },
                            { icon: EcoIcon, title: "Você brasileiro", desc: "Nosso projeto é único e exclusivo para talentos do Brasil" }
                        ].map((item, index) => (
                            <li key={index}>
                                <img src={item.icon} alt={item.title} className="icon-home" />
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Produtos Section */}
                <section>
                    <h2 className="produto-title">Produtos Mahindra Racing</h2>
                    <div className="produto-list">
                        {[{
                            img: Produto1,
                            title: "Camisa ",
                            desc: "Uma camisa bem confortável e muito tecnologica! Essa é a mais nova camisa dry-fit da Mahindra"
                        },
                        {
                            img: Produto2,
                            title: "Bone",
                            desc: "Boné da Mahindra Racing para proteger seu coro cabeludo e ficar estiloso."
                        },
                        {
                            img: Produto3,
                            title: "22/23 Team Softshell Jacket",
                            desc: "Jaqueta Mahindra para ficar quentinho e estiloso nos dias mais frios do ano!"
                        }].map((produto, index) => (
                            <div className="produto-item" key={index}>
                                <img src={produto.img} alt={produto.title} />
                                <h3>{produto.title}</h3>
                                <p>{produto.desc}</p>
                                <Link to='/produtos' className="btn">Mais informações</Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testemunhos Section */}
                <section className="testimonials">
                    <div className="inner">
                        <h1>Avaliações</h1>
                        <div className="row">
                            {[{
                                img: FaceOne,
                                name: "Jorginha",
                                testimonial: "“Participar do Talento E foi uma experiência transformadora! Agora vejo meu sonho mais próximo.”"
                            },
                            {
                                img: FaceTwo,
                                name: "Igor",
                                testimonial: "“Esse projeto fez toda a diferença na minha jornada. Independentemente da minha condição financeira, consegui realizar meu sonho!”"
                            },
                            {
                                img: FaceThree,
                                name: "Welligton",
                                testimonial: "“Foi incrível competir com tantos talentos e crescer dentro do automobilismo sustentável.”"
                            }].map((testimonial, index) => (
                                <div className="col" key={index}>
                                    <div className="testimonial">
                                        <img src={testimonial.img} alt={testimonial.name} />
                                        <div className="name">{testimonial.name}</div>
                                        <div className="stars">
                                            {Array(5).fill().map((_, starIndex) => (
                                                <img key={starIndex} src={Estrela} alt="Estrela" />
                                            ))}
                                        </div>
                                        <p>{testimonial.testimonial}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </HomeStyle>
    );
};

export default Home;
