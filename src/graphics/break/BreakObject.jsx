import React from 'react';
import { ReactFitty } from "react-fitty";
import break_image from '../assets/break/break.png';
import { useReplicant } from '../utils/hooks';
import styled from 'styled-components';
const NODECG_BUNDLE = 'nodecg-smashcontrol-react';


export const BreakObject = () => {
    const [setInfo] = useReplicant('setInfo', {}, {namespace: NODECG_BUNDLE});

    return(
        <Container>
            <Background src={break_image}></Background>
            <Player1Info>
                <PlayerName><ReactFitty minSize={12} maxSize={36}>{setInfo.player1tag}</ReactFitty></PlayerName>
                <PlayerScore>{setInfo.player1score}</PlayerScore>
                <PlayerPronouns><ReactFitty maxSize={24}>{setInfo.player1pronouns}</ReactFitty></PlayerPronouns>
            </Player1Info>
            <Player2Info>
                <PlayerName><ReactFitty minSize={12} maxSize={36}>{setInfo.player2tag}</ReactFitty></PlayerName>
                <PlayerScore>{setInfo.player2score}</PlayerScore>
                <PlayerPronouns><ReactFitty maxSize={24}>{setInfo.player2pronouns}</ReactFitty></PlayerPronouns>
            </Player2Info>

            <Commentator1Info>
                <CommentatorName><ReactFitty minSize={12} maxSize={36}>{setInfo.commentator1}</ReactFitty></CommentatorName>
                <CommentatorPronouns><ReactFitty maxSize={24}>{setInfo.commentator1pronouns}</ReactFitty></CommentatorPronouns>
            </Commentator1Info>
            <Commentator2Info>
                <CommentatorName><ReactFitty minSize={12} maxSize={36}>{setInfo.commentator2}</ReactFitty></CommentatorName>
                <CommentatorPronouns><ReactFitty maxSize={24}>{setInfo.commentator2pronouns}</ReactFitty></CommentatorPronouns>
            </Commentator2Info>
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
    width: 325px;
    height: 40px;
    left: 1360px;
    top: 290px;
    & > * {
        overflow: hidden;
    }
`

const PlayerName = styled.div`
    position: relative;
    top: 1px;
    height: 45px;
    width: 275px;
    color: white;
    line-height: 36px;
`
const PlayerPronouns = styled.div`
    position: absolute;
    grid-row-start: 2;
    grid-column-start: 2;
    color: black;
    font-size: 24px;
    left: -135px;
    top: 10px;
    width: 150px;
`
const PlayerScore = styled.div`
    position: absolute;
    grid-column-start: 2;
    color: white;
    width: 30px;
    right: 15px;
    top: -15px;
    font-size: 48px;
`
const Player2Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    text-align: center;
    color: black;
    width: 325px;
    height: 40px;
    left: 1445px;
    top: 408px;
    & > * {
        overflow: hidden;
    }
`

const Commentator1Info = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    text-align: center;
    width: 325px;
    height: 90px;
    left: 1420px;
    top: 40px;
    & > * {
        overflow: hidden;
    }
`
const Commentator2Info = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    text-align: center;
    width: 325px;
    height: 90px;
    left: 1500px;
    top: 160px;
    & > * {
        overflow: hidden;
    }
`
const CommentatorName = styled.div`
    position: absolute;
    color: black;
    width: 320px;
    line-height: 36px;
`
const CommentatorPronouns = styled.div`
    position: absolute;
    grid-row-start: 2;
    right: 35px;
    top: 5px;
    width: 150px;
    height: 40px;
    line-height: 36px;
    color: white;
`
