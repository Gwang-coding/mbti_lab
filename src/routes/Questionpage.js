import React, { useState } from "react";
import { firestore } from "../firebase";
import Taskadd from "../components/Taskadd"
import styled from 'styled-components';
import { Link } from 'react-router-dom';




const Page  = styled.div`
    display: flex;
    flex-direction: column;
    width : 400px;
    height : 650px;
    margin:0 auto;
    border-radius: 20px;
`;
const Finishpage = styled.div`
    display: flex;
    flex-direction: column;
    width : 400px;
    height : 650px;
    margin:0 auto;
    border-radius: 20px;
    border: 1px black solid;
`;

const Header = styled.div`
    height:13%;
    background-color: #ffb6c1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;
const Body = styled.div`
    height:85%;
    border: 1px solid #E7E7E7;
    background-color :#FCFCFC;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
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
const Progress =styled.div`
    background-color: white;
    border:1px solid black;
    border-radius: .5rem;
    width:280px;
`;
const ProgressIn = styled.div`
    background-color: #ffb6c1;
    height: 10px;
    border-radius: 1rem;
    width: ${props => props.width};
`;
const ProgressBox = styled.div`
    margin-top:50px;
    margin-left:60px;
`;
const Pagenum = styled.div`
    font-size:20px;
    float:right;
    margin-right:80px;
    margin-top:20px;
`;
const Num = styled.a`

`;
const Quest = styled.div`
    text-align:center;
    margin-top:10px;
    font-size:25px;
    color: #ffb6c1;
    font-weight: bolder;
    margin-bottom:10px;
`;
const QuestText = styled.p`
    margin:0px;
`

const AnswerDiv = styled.div`
    display:flex;
    flex-direction: column;
    margin:0 auto;
    margin-top:10px;
    width:360px;
    height:360px;
`;
const AnswerTable = styled.div`
    border:2px solid gray;
    height:45%;
    margin-top:20px;
    width:90%;
    margin-left:15px;
    border-radius:20px;
    text-align: center;
    &:hover{  
        background-color : #ffb6c1;
      }
`;

const AnswerImg = styled.img`
    width:325px;
    height:130px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const Goresult = styled.div`
    text-align: center;
    margin:20px 0px 0px 0px;
`;

const Resulttext = styled.p`
    font-size:50px;
    font-weight:bolder;
    margin-bottom:30px;
    margin-top:30px;
`;

const Servicebottom = styled.div`
    width:300px;
    border:1px solid #3065ac;
    margin: 30px 0px 0px 50px;
    border-radius: 15px;
    background-color:#ffb6c1;
`
const Bottombar = styled.div`
    text-align: center;
    cursor: pointer;
`
const Bottomtext = styled.p`
    font-size: 25px;
    margin: 15px 0px 15px 0px;
    font-weight:bolder;
    color:black;
`
const Resultimg = styled.img`
    width:150px;
    margin-bottom:20px;
`
const Nickname = styled.div`
    font-size:25px;
    font-weight:bolder;
`
const Nicktext = styled.p`
    margin-bottom:10px;
`

const Answerone = [
    {
        id:1,
        Atextone: "???????????? ????????? ?????????",
        AtextoneImg: "img/friends.jpg",
        type: 'E'
    },
    {
        id:2,
        Atextone: "????????????????",
        AtextoneImg: "img/soccer.jpg",
        type: 'E'
    },
    {
        id:3,
        Atextone: "????????? ?????????",
        AtextoneImg: "img/maker.jpg",
        type: 'E'
    },
    {
        id:4,
        Atextone: "???????????? ???????????? ???????????? ?????????",
        AtextoneImg: "img/flex.jpg",
        type: 'N'
    },
    {
        id:5,
        Atextone: "??????????????? ???????????? ????????? ?????????",
        AtextoneImg: "img/terriorist.jpg",
        type: 'N'
    },
    {
        id:6,
        Atextone: "???????????? ????????? ????????????",
        AtextoneImg: "img/making.jpg",
        type: 'N'
    },
    {
        id:7,
        Atextone: "??? ???????????????..",
        AtextoneImg: "img/hug.jpg",
        type: 'F'
    },
    {
        id:8,
        Atextone: "?????? ?????? ????????? ??????????",
        AtextoneImg: "img/think.jpg",
        type: 'F'
    },
    {
        id:9,
        Atextone: "?????????? ??????????????",
        AtextoneImg: "img/care.jpg",
        type: 'F'
    },
    {
        id:10,
        Atextone: "?????? ????????? ?????? ????????????",
        AtextoneImg: "img/paking.jpg",
        type: 'J'
    },
    {
        id:11,
        Atextone: "???????????? ????????? ??????????????????",
        AtextoneImg: "img/message.jpg",
        type: 'J'
    },
    {
        id:12,
        Atextone: "????????? ?????? ?????? ?????????",
        AtextoneImg: "img/plan.jpg",
        type: 'J'
    }
];
const Answertwo = [
    {
        id:1,
        Atexttwo: "????????? ?????? ????????????",
        AtexttwoImg: "img/alone.jpg",
        type: 'I'
    },
    {
        id:2,
        Atexttwo: "????????? ???????????? ????????????..",
        AtexttwoImg: "img/socceralone.jpg",
        type: 'I'
    },
    {
        id:3,
        Atexttwo: "?????? ?????? ??????",
        AtexttwoImg: "img/shrug.jpg",
        type: 'I'
    },
    {
        id:4,
        Atexttwo: "????????? ????????? ??????????",
        AtexttwoImg: "img/doncare.jpg",
        type: 'S'
    },
    {
        id:5,
        Atexttwo: "???????????? ?????? ????????????",
        AtexttwoImg: "img/food.jpg",
        type: 'S'
    },
    {
        id:6,
        Atexttwo: "??????????????? ????????? ????????????",
        AtexttwoImg: "img/read.jpg",
        type: 'S'
    },
    {
        id:7,
        Atexttwo: "?????? ??????? ?????? ??????????",
        AtexttwoImg: "img/talkto.jpg",
        type: 'T'
    },
    {
        id:8,
        Atexttwo: "??????????????? ?????????",
        AtexttwoImg: "img/shruging.jpg",
        type: 'T'
    },
    {
        id:9,
        Atexttwo: "?????? ?????????? ??????????",
        AtexttwoImg: "img/talk.jpg",
        type: 'T'
    },
    {
        id:10,
        Atexttwo: "?????? ?????? ??????",
        AtexttwoImg: "img/drive.jpg",
        type: 'P'
    },
    {
        id:11,
        Atexttwo: "???????????? ????????? ?????? ??????",
        AtexttwoImg: "img/dummy.jpg",
        type: 'P'
    },
    {
        id:12,
        Atexttwo: "????????? ????????? ???????????????",
        AtexttwoImg: "img/lazy.jpg",
        type: 'P'
    }
];
const Questions =[
    {
         id: 1,
         Qtext: '?????? ????????? ?????? ??????????'
    },
    {
         id: 2,
         Qtext: '????????? ????????? ???????????? ????????? ????????????'
    },
    {
        id: 3,
         Qtext: '??????????????? ???????????? ?????? ??????????'
    },
    {
        id: 4,
        Qtext: '?????? ????????? ????????????????'
    },
    {
        id: 5,
        Qtext: '???????????? ?????? ??? ?????? ??????????'
       
    },
    {
        id: 6,
        Qtext: '?????????????????? ??????????'
    },
    {
        id: 7,
        Qtext: '????????? ????????? ????????? ???????????????????'
    },
    {
        id: 8,
        Qtext: '???????????? ?????? ???????????? ??? ????????????'
    },
    {
        id: 9,
        Qtext: '????????? ????????? ????????? ????????? ??????????'
       
    },
    {
        id: 10,
        Qtext: '?????? ???????????? ????????? ??? ???'
    },
    {
        id: 11,
        Qtext: '????????? ???????????? ????????? ?????? ???????????????'
    },
    {
        id: 12,
        Qtext: '????????? ????????? ?????????'
    },
  ];
  const Input = styled.input`
  position: absolute;
   width: 320px;
   height: 160px;
   opacity: 0; 
   cursor: pointer;
     }
`;

function Question() {
    const [input,setInput] = useState(0);
    const [checkedInputs, setCheckedInputs] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const onClickHandler = (e) => {
        e.preventDefault();
        if (task !== "") {
          firestore
            .collection("tasks")
            .add({ name: task ,mbti:lastMBTI})
            .then((res) => {
              console.log(res);
              setTasks((prevTasks) => tasks.concat({ name: task,mbti: lastMBTI, id: res.id }));
            });
          setTask("");
        }
      };
    
      const onChangeHandler = (e) => {
        setTask(e.target.value);
      };
    
    const changeHandler = (id) => {
    setCheckedInputs([...checkedInputs, id]);
  };
    const countE = checkedInputs.filter(item => item ==='E').length;
    const countI = checkedInputs.filter(item => item ==='I').length;
    const countN = checkedInputs.filter(item => item ==='N').length;
    const countS = checkedInputs.filter(item => item ==='S').length;
    const countF = checkedInputs.filter(item => item ==='F').length;
    const countT = checkedInputs.filter(item => item ==='T').length;
    const countP = checkedInputs.filter(item => item ==='P').length;
    const countJ = checkedInputs.filter(item => item ==='J').length;
    const [finish,setFinish] = useState(false);
    let lastMBTI = "";
    if (input === 11){
        countE>countI ? lastMBTI += 'E' : lastMBTI += 'I' ;
        countN>countS ? lastMBTI += 'N' : lastMBTI += 'S' ;
        countF>countT ? lastMBTI += 'F' : lastMBTI += 'T' ;
        countP>countJ ? lastMBTI += 'P' : lastMBTI += 'J' ;   
        console.log(lastMBTI);
    }
    return (
        <>
            {!finish && (
            <Page>
                <Header>
                    <Logo src="img/logo.png"/>
                    <LogoText><Text>Nazarene MBTI</Text></LogoText>
                </Header>
                <Body>
                    <Pagenum>
                        <Num>{Questions[input].id}/12</Num>
                    </Pagenum>
                    <ProgressBox>
                        <Progress>
                            <ProgressIn width={((Questions[input].id) * 8.3) + "%"}/>
                        </Progress>
                    </ProgressBox>
                    <Quest>
                        <p>{Questions[input].Qtext}</p>
                    </Quest>
                    <AnswerDiv>
                        <AnswerTable>
                            <Input
                            type="checkbox" 
                            onClick={()=>{
                            changeHandler(Answerone[input].type);
                            input !== 11 ? setInput(input+1) : setFinish(true)
                            }}/>
                            <AnswerImg src={Answerone[input].AtextoneImg}></AnswerImg>
                            <QuestText>{Answerone[input].Atextone}</QuestText>
                        </AnswerTable>
                        <AnswerTable>
                            <Input
                            type="checkbox" 
                            onClick={()=>{
                            changeHandler(Answertwo[input].type);
                            input !== 11 ? setInput(input+1) : setFinish(true)
                            }}/>
                            <AnswerImg value = {Answertwo[input].type} src={Answertwo[input].AtexttwoImg}></AnswerImg>
                            <QuestText>{Answertwo[input].Atexttwo}</QuestText>
                        </AnswerTable>
                    </AnswerDiv>
                </Body>
            </Page>
            )}
            { 
            finish && 
            <Finishpage>
                <Header>
                    <Logo src="img/logo.png"/>
                    <LogoText><Text>Nazarene MBTI</Text></LogoText>
                </Header>
                <Goresult>
                    <Resulttext>
                        ???????????????!
                    </Resulttext>
                    <Resultimg src="img/result.png"/>
                    <Nickname>
                        <Nicktext>???????????? ???????????????</Nicktext>
                    </Nickname>
                    <Taskadd
                        task={task}
                        onClickHandler={onClickHandler}
                        onChangeHandler={onChangeHandler}
                    />
                    <Link style={{ textDecoration: 'none' }} to="/Result" state={{ data: lastMBTI}}>
                        <Servicebottom>
                            <Bottombar>
                                <Bottomtext>????????????</Bottomtext>
                            </Bottombar>
                        </Servicebottom>
                    </Link>
                </Goresult>
            </Finishpage> 
            }
        </>
    ); 
}

export default Question;

