import React, { useState } from 'react';
import styled from 'styled-components'
const List = ({ form, Delete, filterObject, sortType }) => {
    form.forEach(item => {
        console.log(new Date(item.dayOfPurchase))
        console.log(typeof new Date(item.dayOfPurchase))

    });

    const [FiteredForm, setFilteredForm] = useState([])

    //오지날폼 유지


    //원본리스트
    let originList = form

    // console.log(originList)



    //유형별로 필터링
    if (filterObject.type) {
        originList = form.filter(item => {
            if (filterObject.type === item.type) {
                return item
            }
        })
    }

    //가격 높은순, 가격 낮은순 정렬하기
    if (filterObject.sort === sortType.priceMax) {
        originList = originList.sort((a, b) => b.price - a.price)
    } else if (filterObject.sort === sortType.priceMin) {
        originList = originList.sort((a, b) => a.price - b.price)
    }


    if (filterObject.startPeriod && filterObject.endPeriod) {

        const start = new Date(filterObject.startPeriod).getTime()
        const end = new Date(filterObject.endPeriod).getTime()

        console.log("시작지점", start)
        console.log("끝지점", end)

        originList = originList.filter((item) => {
            const dayOfPurchase = new Date(item.dayOfPurchase).getTime()

            if (start <= dayOfPurchase && dayOfPurchase <= end) {
                return item
            }

        })

    }


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
                        {originList.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.type}</td>
                                    <td>{item.dayOfPurchase}</td>
                                    <td>{item.memo}</td>
                                    <td>{item.repurchase}</td>
                                    <td><button id="list_item_deletebtn" onClick={() => Delete(item.createat)}>삭제하기</button></td>
                                </tr>
                            )
                        })

                        }

                    </tbody>
                </table>

            </Box>
        </Container >
    );
}

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