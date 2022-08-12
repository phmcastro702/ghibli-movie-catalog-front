import { HomeHero } from "../../Components/HomeHero";
import { APIStatus } from '../../Components/APIStatus';

// Component da página Home que mostra o status da API e um logo animado
const Home = () => {

    return (
        <>
            <HomeHero />
            <APIStatus />
        </>
    );
};

export { Home };