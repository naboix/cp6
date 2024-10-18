import React, { useState } from 'react';
import { ProdutosStyle } from "../css/ProdutosStyle";
import Produto1 from '../assets/images/produto1.png';
import Produto2 from '../assets/images/produto2.png';
import Produto3 from '../assets/images/produto3.png';
import Produto4 from '../assets/images/produto4.png';
import Produto5 from '../assets/images/produto5.png';
import Produto6 from '../assets/images/produto6.png';

// Lista de produtos pré-cadastrados
const produtosIniciais = [
    {
        id: 1,
        nome: "Camisa Dry-Fit Mahindra",
        descricao: "Uma camisa bem confortável e muito tecnologica! Essa é a mais nova camisa dry-fit da Mahindra",
        preco: "R$ 320,99",
        imagem: Produto1
    },
    {
        id: 2,
        nome: "Boné Mahindra Racing",
        descricao: "Boné da Mahindra Racing para proteger seu coro cabeludo e ficar estiloso.",
        preco: "R$ 149,99",
        imagem: Produto2
    },
    {
        id: 3,
        nome: "Jaqueta Mahindra Racing",
        descricao: "Jaqueta Mahindra para ficar quentinho e estiloso nos dias mais frios do ano!",
        preco: "R$ 449,99",
        imagem: Produto3
    },
    {
        id: 4,
        nome: "Polo Mahindra Racing",
        descricao: "Uma polo Mahindra para ficar estiloso nos lugares mais chiques do Brasil e do Mundo",
        preco: "R$ 139,99",
        imagem: Produto4
    },
    {
        id: 5,
        nome: "Suéter Formula E",
        descricao: "Um toque de elegância no seu dia dia! Esse é o mais novo suéter da Formula E",
        preco: "R$ 349,99",
        imagem: Produto5
    },
    {
        id: 6,
        nome: "Caneca Formula E",
        descricao: "Para melhorar seu café da manhã faltava apenas uma coisa, a caneca da Formula E!!",
        preco: "R$ 23,99",
        imagem: Produto6
    }
];

const Produtos = () => {
    // State para controlar a lista de produtos e o formulário de adicionar produto
    const [produtos, setProdutos] = useState(produtosIniciais);
    const [searchTerm, setSearchTerm] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

    // Função para adicionar um novo produto
    const adicionarProduto = () => {
        const novoProduto = {
            id: produtos.length + 1, 
            nome,
            descricao,
            preco,
            imagem: Produto1 
        };
        setProdutos([...produtos, novoProduto]);
        setNome('');
        setDescricao('');
        setPreco('');
        setShowForm(false); // Oculta o formulário após adicionar
    };

    // Filtrando produtos com base na busca
    const filteredProducts = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ProdutosStyle>
            <section>
                <h2 className="produto-title">Produtos</h2>

                {/* Barra de pesquisa */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Botão para mostrar/ocultar o formulário de adicionar produto */}
                <div className="vejaMais">
                    <button className="btn" onClick={() => setShowForm(!showForm)}>
                        {showForm ? 'Cancelar' : 'Adicionar Produto'}
                    </button>
                </div>

                {/* Formulário para adicionar novo produto */}
                {showForm && (
                    <div className="produto-form">
                        <input
                            type="text"
                            placeholder="Nome do Produto"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Descrição"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Preço"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                            required
                        />
                        <button className="btn" onClick={adicionarProduto}>Salvar Produto</button>
                    </div>
                )}

                {/* Lista de produtos */}
                <div className="produto-list">
                    {filteredProducts.map(produto => (
                        <div key={produto.id} className="produto-item">
                            <img src={produto.imagem} alt={produto.nome} />
                            <h3>{produto.nome}</h3>
                            <p>{produto.descricao}</p>
                            <a href="#" className="btn">Comprar</a>
                            <p className="preco">{produto.preco}</p>
                        </div>
                    ))}
                </div>
            </section>
        </ProdutosStyle>
    );
};

export default Produtos;
