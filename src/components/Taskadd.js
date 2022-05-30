import styled from 'styled-components';

const Btn = styled.button`
    border:1px solid #3065ac;
    border-radius: 15px;
    width:80px;
    background-color:white;
    margin-left:15px;
    height:50px;
    font-size:25px;
`
const Under = styled.input`
    border-radius: 15px;
    width:200px;
    height:50px;
    font-size:25px;
   ::placeholder {
    font-size: 25px;
}
`
const Taskadd = ({task, onChangeHandler, onClickHandler}) => {
    return (
        <div>
            <form onSubmit={(e) => onClickHandler(e)}>
                <Under placeholder="ex) 홍길동" value={task} onChange={onChangeHandler}/>
                <Btn
                    onClick={(e) => onClickHandler(e)}
                >
                    저장
                 </Btn>
            </form>
        </div>
    )
};

export default Taskadd;