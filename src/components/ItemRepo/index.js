import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleremoveRepo}){

    const handleremove = () => {
        handleremoveRepo(repo.id);
    }
    return(
        <ItemContainer onClick={handleremove}>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target='blank'>Ver Repositório</a>
            <br />
            <a href="#" className="remover">Remover</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo;
