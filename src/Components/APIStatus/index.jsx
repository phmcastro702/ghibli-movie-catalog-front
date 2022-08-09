import styled from "styled-components";


const APIStatus = ({ apiOnline }) => {
    
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