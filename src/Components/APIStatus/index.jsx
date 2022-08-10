import { useEffect, useState } from 'react';
import styled from 'styled-components';
import config from '../../app-config.json';


const APIStatus = () => {
    const [apiOnline, setApiOnline] = useState(false);

    useEffect(() => {
        fetch(`${config.api_url}/isOnline`)
            .then((res) => res.json())
            .then((resData) => setApiOnline(true))
            .catch(() => setApiOnline(false));
    }, []);

    return (
        <>
            <StatusMessageContainer>
                <StatusText>API {apiOnline ? 'Online' : 'Offline'}</StatusText>
                <Dot apiOnline={apiOnline} />
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
 
`;

const Dot = styled.div`
    background-color: ${props => (props.apiOnline ? '#00ce00' : 'grey')};
    border-radius: 100%;
    width: 20px;
    
    
`;

const StatusText = styled.p`
    width: 100%;
`;



export { APIStatus };