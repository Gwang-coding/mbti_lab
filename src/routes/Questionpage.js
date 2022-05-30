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
        Atextone: "친구들고 시간을 보낸다",
        AtextoneImg: "img/friends.jpg",
        type: 'E'
    },
    {
        id:2,
        Atextone: "재밌겠는데?",
        AtextoneImg: "img/soccer.jpg",
        type: 'E'
    },
    {
        id:3,
        Atextone: "분위기 메이커",
        AtextoneImg: "img/maker.jpg",
        type: 'E'
    },
    {
        id:4,
        Atextone: "집도사고 차도사고 이것저것 가야지",
        AtextoneImg: "img/flex.jpg",
        type: 'N'
    },
    {
        id:5,
        Atextone: "비행기안에 테러범이 있으면 어쩌지",
        AtextoneImg: "img/terriorist.jpg",
        type: 'N'
    },
    {
        id:6,
        Atextone: "대충보며 감대로 사용한다",
        AtextoneImg: "img/making.jpg",
        type: 'N'
    },
    {
        id:7,
        Atextone: "헐 속상하겠다..",
        AtextoneImg: "img/hug.jpg",
        type: 'F'
    },
    {
        id:8,
        Atextone: "내가 기분 나쁘게 했었나?",
        AtextoneImg: "img/think.jpg",
        type: 'F'
    },
    {
        id:9,
        Atextone: "괜찮아? 안다쳤어??",
        AtextoneImg: "img/care.jpg",
        type: 'F'
    },
    {
        id:10,
        Atextone: "주차 장소를 미리 알아보자",
        AtextoneImg: "img/paking.jpg",
        type: 'J'
    },
    {
        id:11,
        Atextone: "바로바로 읽어서 쌓여있지않다",
        AtextoneImg: "img/message.jpg",
        type: 'J'
    },
    {
        id:12,
        Atextone: "일정에 맞춰 미리 잡는다",
        AtextoneImg: "img/plan.jpg",
        type: 'J'
    }
];
const Answertwo = [
    {
        id:1,
        Atexttwo: "집에서 혼자 휴식한다",
        AtexttwoImg: "img/alone.jpg",
        type: 'I'
    },
    {
        id:2,
        Atexttwo: "모르는 사람들은 불편한데..",
        AtexttwoImg: "img/socceralone.jpg",
        type: 'I'
    },
    {
        id:3,
        Atexttwo: "주로 호응 담당",
        AtexttwoImg: "img/shrug.jpg",
        type: 'I'
    },
    {
        id:4,
        Atexttwo: "그런거 될리가 없는데?",
        AtexttwoImg: "img/doncare.jpg",
        type: 'S'
    },
    {
        id:5,
        Atexttwo: "기내식은 뭐가 나올라나",
        AtexttwoImg: "img/food.jpg",
        type: 'S'
    },
    {
        id:6,
        Atexttwo: "디테일하게 꼼꼼히 살펴본다",
        AtexttwoImg: "img/read.jpg",
        type: 'S'
    },
    {
        id:7,
        Atexttwo: "무슨 시헙? 몇점 이길래?",
        AtexttwoImg: "img/talkto.jpg",
        type: 'T'
    },
    {
        id:8,
        Atexttwo: "싫어하던지 말던지",
        AtexttwoImg: "img/shruging.jpg",
        type: 'T'
    },
    {
        id:9,
        Atexttwo: "보험 불렀어? 병원은?",
        AtexttwoImg: "img/talk.jpg",
        type: 'T'
    },
    {
        id:10,
        Atexttwo: "일단 그냥 가자",
        AtexttwoImg: "img/drive.jpg",
        type: 'P'
    },
    {
        id:11,
        Atexttwo: "읽지않은 문자가 많이 있다",
        AtexttwoImg: "img/dummy.jpg",
        type: 'P'
    },
    {
        id:12,
        Atexttwo: "만나고 싶으면 만나는거지",
        AtexttwoImg: "img/lazy.jpg",
        type: 'P'
    }
];
const Questions =[
    {
         id: 1,
         Qtext: '나의 에너지 회복 방법은?'
    },
    {
         id: 2,
         Qtext: '친구가 모르는 사람들과 축구를 하자한다'
    },
    {
        id: 3,
         Qtext: '친구들과의 모임에서 나의 역할은?'
    },
    {
        id: 4,
        Qtext: '만약 로또에 당첨된다면?'
    },
    {
        id: 5,
        Qtext: '비행기를 타기 전 드는 생각은?'
       
    },
    {
        id: 6,
        Qtext: '제품설명서를 쓴다면?'
    },
    {
        id: 7,
        Qtext: '친구가 시험에 떨어져 속상해한다면?'
    },
    {
        id: 8,
        Qtext: '누군가가 나를 싫어하는 걸 알았을때'
    },
    {
        id: 9,
        Qtext: '친구가 자동차 사고가 났다고 한다면?'
       
    },
    {
        id: 10,
        Qtext: '차로 운전해서 식당을 갈 때'
    },
    {
        id: 11,
        Qtext: '본인의 핸드폰에 카톡이 많이 쌓여있다면'
    },
    {
        id: 12,
        Qtext: '친구와 약속을 잡을때'
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
  }
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
                        테스트완료!
                    </Resulttext>
                    <Resultimg src="img/result.png"/>
                    <Nickname>
                        <Nicktext>닉네임을 적어주세요</Nicktext>
                    </Nickname>
                    <Taskadd
                        task={task}
                        onClickHandler={onClickHandler}
                        onChangeHandler={onChangeHandler}
                    />
                    <Link style={{ textDecoration: 'none' }} to="/Result" state={{ data: lastMBTI}}>
                        <Servicebottom>
                            <Bottombar>
                                <Bottomtext>결과확인</Bottomtext>
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

