import React from 'react';
import { ReactFitty } from "react-fitty";
import layout_image from '../assets/layout/layout.png';
import { useReplicant } from '../utils/hooks';
import styled from 'styled-components';
const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const LayoutObject = () => {
    const [setInfo] = useReplicant('setInfo', {}, {namespace: NODECG_BUNDLE});

    return(
        <Container>
            <Background src={layout_image}></Background>
            <TournamentInfo>
                <BracketLocation><ReactFitty maxSize={32}>{setInfo.bracketlocation}</ReactFitty></BracketLocation>
            </TournamentInfo>
            <Player1Info>
                <PlayerName><ReactFitty minSize={12} maxSize={24}>{setInfo.player1tag}</ReactFitty></PlayerName>
                <PlayerScore>{setInfo.player1score}</PlayerScore>
                <PlayerPronouns><ReactFitty maxSize={16}>{setInfo.player1pronouns}</ReactFitty></PlayerPronouns>
            </Player1Info>
            <Player2Info>
                <PlayerName><ReactFitty minSize={12} maxSize={24}>{setInfo.player2tag}</ReactFitty></PlayerName>
                <PlayerScore>{setInfo.player2score}</PlayerScore>
                <PlayerPronouns><ReactFitty maxSize={16}>{setInfo.player2pronouns}</ReactFitty></PlayerPronouns>
            </Player2Info>
        </Container>
    )
    
}

const Container = styled.div`
    display: block; 
    font-family: Poppins;
    width: 1920px;
    height: 1080px;
`

const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`

const Player1Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    text-align: center;
    color: black;
    width: 185px;
    height: 25px;
    left: 530px;
    top: 1002px;
    & > * {
        overflow: hidden;
    }
`

const PlayerName = styled.div`
    position: relative;
    top: 1px;
    height: 25px;
    width: 155px;
    line-height: 24px;
`
const PlayerPronouns = styled.div`
    position: absolute;
    color: white;
    font-size: 14px;
    left: 55px;
    width: 150px;
    top: 28px;
`
const PlayerScore = styled.div`
    position: absolute;
    color: orange;
    width: 30px;
    font-size: 28px;
    left: 180px;
    top: -6px;
`
const Player2Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    text-align: center;
    color: black;
    width: 185px;
    height: 25px;
    left: 1270px;
    top: 1002px;
    & > * {
        overflow: hidden;
    }
`
const TournamentInfo = styled.div`
    position: absolute;
    top: 5px;
    height: 35px;
    line-height: 40px;
    width: 365px;
    left: 750px;
    font-size: 26px;
    text-align: center;
`

const BracketLocation = styled.div`
`