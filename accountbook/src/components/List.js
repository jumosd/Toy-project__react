import React from 'react';
import styled from 'styled-components'
const List = (props) => {




    return (
        <Container>
            <Box>

                <table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>가격</th>
                            <th>유형</th>
                            <th>구입날짜</th>
                            <th>메모</th>
                            <th>재구매의사</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.form.map((item, idx) => {

                            return (

                                <tr key={idx}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.type}</td>
                                    <td>{item.dayOfPurchase}</td>
                                    <td>{item.memo}</td>
                                    <td>{item.repurchase}</td>
                                    <td><button id="list_item_deletebtn" onClick={() => props.Delete(item.createat)}>삭제하기</button></td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>

            </Box>
        </Container >
    );
};

export default List;

const Container = styled.div`
    border: 1px solid black;
    margin: auto;
    width: 1000px;
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

`