import styled from "styled-components";
import { HomeHero } from "../../Components/HomeHero";
import { APIStatus } from '../../Components/APIStatus';
import { useEffect, useState } from "react";

const Home = () => {

    return (
        <>
            <HomeHero />
            <APIStatus />
        </>
    );
};

export { Home };