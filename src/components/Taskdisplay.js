import styled from 'styled-components';

const Tr = styled.tr`
    text-align:center;
    border: 1px black solid;
    background-color:#a9a9a9;
    border-radius: 15px;
`
const Table = styled.table`
    border: 1px black solid;
    width:350px;
    border-radius: 15px;
    margin-left:25px;
    border-spacing: 10px;
`
const Thead = styled.thead`
   
  
`
const Tsr = styled.tr`
    text-align:center;
    border: 1px black solid;
    background-color:#e9e9e9;
    border-radius: 15px;
`
const Td = styled.td`
border-radius: 15px;
`
const Th = styled.th`
border-radius: 15px;
`
const Tbody = styled.tbody`
   
`
const Taskdisplay = ({tasks}) => {
    const obj = {
        header:["닉네임","MBTI"]
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    {obj.header.map((item,index) => {
                        return <Th key={index}>{item}</Th>
                    })}
                </Tr>
            </Thead>
            <Tbody>
            {tasks.map((task) => {
                return(
                <Tsr key={task.id}>
                    <Td>{task.name}</Td>
                    <Td>{task.mbti}</Td>
                </Tsr>
            )})
            }
            </Tbody>
 
       </Table>
    );
};

export default Taskdisplay;