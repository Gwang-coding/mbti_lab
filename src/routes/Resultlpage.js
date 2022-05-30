import { useLocation } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from "react";
import { firestore } from "../firebase";
import Taskdisplay from "../components/Taskdisplay";
import styled from 'styled-components';


const Page  = styled.div`
    display: flex;
    flex-direction: column;
    width : 400px;
    height : 620px;
    margin:0 auto;
    border-radius: 20px;
    position: relative;
    border: 1px black solid;
`;
const Header = styled.div`
    height:13%;
    background-color: #ffb6c1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;
const Logo = styled.img`
    margin-top:4.5px;
    margin-left:4.5px;
    width:75px;
    height:75px;
`;
const LogoText = styled.span`
    float:right;
    margin-top:50px;
    margin-right:10px;
`;
const Text = styled.a`
    font-weight:bolder;
    color:#B01216;
`;
const Goresult = styled.div`
    text-align: center;
    margin:10px 0px 0px 0px;
`;

const Resulttext = styled.p`
    font-size:50px;
    font-weight:bolder;
    margin-bottom:30px;
    margin-top:30px;
`;
function Results() {
    const location = useLocation();
    const data = location.state.data; 
    const [tasks, setTasks] = useState([]);
   
    const fetchData = useCallback(() => {
        let tasksData = [];
        firestore
        .collection("tasks")
        .get()
        .then(docs => {
            docs.forEach(doc=>{
            tasksData.push({ mbti: doc.data().mbti, name: doc.data().name, id: doc.id });
            });
            setTasks((prevTasks) => prevTasks.concat(tasksData));
        });
    }, []);
    console.log(tasks);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    return (
        <Page>
        <Header>
            <Logo src={"https://www.kornu.ac.kr/mbs/kornukr/images/contents/ko_010300_symbol.png"}/>
            <LogoText><Text>Nazarene MBTI</Text></LogoText>
        </Header>
            <Goresult>
                <Resulttext>
                   {data}
                </Resulttext>
            </Goresult>
            <Taskdisplay
            tasks={tasks}/>
        </Page> 
    ); 
}


export default Results;