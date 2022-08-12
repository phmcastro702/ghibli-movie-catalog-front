import { useEffect, useState } from 'react';
import styled from 'styled-components';
import config from '../../app-config.json';

// Componente indicador de status da API
const APIStatus = () => {
    const [apiOnline, setApiOnline] = useState(false);

    // Consulta um endpoint da API para verificar se está online
    useEffect(() => {
        fetch(`${config.api_url}/isOnline`)
            .then((res) => res.json())
            .then((resData) => setApiOnline(resData.success))
            .catch(() => setApiOnline(false));
    }, []);

    return (
        <>
            <StatusMessageContainer>
                <StatusText>API {apiOnline ? 'Online' : 'Offline'}</StatusText>
                <DotContainer>
                    <Dot apiOnline={apiOnline} />
                </DotContainer>
            </StatusMessageContainer>
        </>
    );
};


const StatusMessageContainer = styled.div`
    right: 2%;
    bottom: 2%;
    display: flex;
    gap: 1em;
    position: absolute;
    align-items: center;
 
`;

const Dot = styled.div`
    background-color: ${props => (props.apiOnline ? '#00ce00' : 'grey')};
    border-radius: 100%;
    width: 20px;
    height: 20px;
    
    
`;

const DotContainer = styled.div`
    width: 30%;
`;

const StatusText = styled.p`
    width: 150%;
`;



export { APIStatus };