import React, {useEffect} from 'react';
import { ReactFitty } from "react-fitty";
import { useReplicant } from '../utils/hooks';
import styled from 'styled-components';
const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const Top8SimpleText = () => {
    const [top8Array] = useReplicant('top8Info', Array.from({length:8}), {namespace: NODECG_BUNDLE});
    const [top8TournamentInfo] = useReplicant('top8TournamentInfo', {}, {namespace: NODECG_BUNDLE});

    const placementMap = {
        0: '1st',
        1: '2nd',
        2: '3rd',
        3: '4th',
        4: '5th',
        5: '5th',
        6: '7th',
        7: '7th',
    }
    return(
        <Container>
            <Warning>Anything in Blue is auto populated</Warning>
            {/* This is an expanded version of the following map, repeated for indexes 0-7:
            <div><Info>{placementMap[0]}</Info> place:</div>
            <div>Tag: <Info>{top8Array[0]?.playertag}</Info></div>
            <div>Character: <Info>{top8Array[0]?.playercharacter}</Info></div>
            <div>Costume: <Info>{top8Array[0]?.playercostume}</Info></div>
            <div>Secondary: <Info>{top8Array[0]?.playersecondary}</Info></div>*/
            }
            {top8Array?.map((player, idx) => {
                return (
                    <><div><Info>{placementMap[idx]}</Info> Place</div>
                    <div>Tag: <Info>{player?.playertag}</Info></div>
                    <div>Character: <Info>{player?.playercharacter}</Info></div>
                    <div>Costume: <Info>{player?.playercostume}</Info></div>
                    <div>Secondary: <Info>{player?.playersecondary}</Info></div><br /></>
                );
            })}

            <div>Tournament Info:</div>
            <div>Tournament Name: <Info>{top8TournamentInfo?.tourneyname}</Info></div>
            <div>Tournament Date: <Info>{top8TournamentInfo?.tourneydate}</Info></div>
            <div>Tournament # of Entrants: <Info>{top8TournamentInfo?.tourneyentrants}</Info></div>
            <div>Tournament Location: <Info>{top8TournamentInfo?.tourneylocation}</Info></div>
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

const Warning = styled.div`
    color: red;
`

const Info = styled.span`
    color: blue;
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