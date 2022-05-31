import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Page  = styled.div`
    display: flex;
    flex-direction: column;
    width : 400px;
    height : 620px;
    margin:0 auto;
    border-radius: 20px;
    position: relative;
`;
const Img = styled.img`
    border-radius: 20px;
`;
const Text = styled.div`
    position: absolute;
    font-size: 50px;
    font-weight:lighter;
    right:30px; 
    top:50px;
    transform: rotate( -25deg );
`;
const Start = styled.button`
    position: absolute;
    width:60%;
    bottom:10%;
    right:20%;
    font-size:30px;
    border-radius: 40px;
    box-shadow: 5px 5px;
`;
const Intext = styled.p`
    margin-top:10px;
    margin-bottom:10px;
`;
const Nametext = styled.p`
    margin-top:10px;
    font-weight:bold;
    color:#333333;
    margin-bottom:10px;
`;

function Main() {
    return (
        <Page>
            <Img src="img/mainimg.jpg"/>
            <Text>
                <Nametext>Nazarene <br/> MBTI</Nametext>
            </Text>
            <Link to="/Question">
                <Start>
                    <Intext>시작하기</Intext>
                </Start>
            </Link>
        </Page>
    ); 
}

export default Main;