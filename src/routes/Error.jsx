import { Link } from 'react-router-dom'
import { ErrorStyle } from "../css/ErrorStyle"

const Error = () => {
  return (
    <ErrorStyle>
        <section className='error-page'>
            <h1>404</h1>
            <h3>Opps! Pagina não encontrada</h3>
            <p>
               Zuuuuumm! Desculpe, a página que você esta procurando não existe.
            </p>
            <Link to='/'><button className='btn'>Voltar ao inicio</button></Link>
        </section>
      
    </ErrorStyle>
  );
};

export default Error;