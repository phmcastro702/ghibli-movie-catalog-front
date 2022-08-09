import styled from "styled-components";
import { HomeHero } from "../../Components/HomeHero";
import { APIStatus } from '../../Components/APIStatus';
import { useEffect, useState } from "react";

const Home = () => {
    const [apiOnlineCheck, setApiOnlineCheck] = useState(false);

    useEffect(() => {
        fetch('http://192.168.30.148:3333/isOnline')
            .then((res) => res.json())
            .then((resData) => setApiOnlineCheck(true))
            .catch(() => setApiOnlineCheck(false));
    }, []);

    return (
        <>
            <HomeHero />
            <APIStatus apiOnline={apiOnlineCheck} />
        </>
    );
};

export { Home };