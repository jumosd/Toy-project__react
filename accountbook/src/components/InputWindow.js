import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
const InputWindow = (props) => {
    const [isMemo, setIsMemo] = useState(false)
    const [repurchase, setRepurchase] = useState('')

    const name = useRef('')
    const price = useRef(0)
    const type = useRef('')
    const dayOfPurchase = useRef()
    const memo = useRef()

    const isMemoCheck = (event) => {
        if (isMemo === true) {
            setIsMemo(false)
        } else if (isMemo === false) {
            setIsMemo(true)
        }
    }

    const CheckRepurchase = (event) => {
        setRepurchase(event.target.value)
    }



    const Upload = () => {
        if (isMemo) {
            props.setForm([{
                createat: new Date().getTime(),
                name: name.current.value,
                price: price.current.value,
                type: type.current.value,
                memo: memo.current.value,
                dayOfPurchase: new Date(dayOfPurchase.current.value),
                repurchase: repurchase
            }, ...props.form])

        } else {
            props.setForm([
                {
                    createat: new Date().getTime(),
                    name: name.current.value,
                    price: price.current.value,
                    type: type.current.value,
                    memo: '',
                    dayOfPurchase: dayOfPurchase.current.value,
                    repurchase: repurchase
                }, ...props.form
            ])
        }
    }

    return (
        <>
            <Container>

                <Box>
                    <div className='container_left__div'>
                        <label htmlFor='name'>이름</label>
                        <label htmlFor='price'>가격</label>
                        <label htmlFor='type'>유형</label>
                        <label htmlFor='date'>구입날짜</label>
                        <label htmlFor='memo'>메모</label>
                        <label htmlFor='repurchase'>재구의매의사</label>
                    </div>
                    <div className='container_right__div'>
                        <input ref={name} name="name" id="name" ></input>
                        <input ref={price} type='number' step={1000} name="price" id="price" ></input>
                        <select ref={type}>
                            <option>{props.type.foodCost}</option>
                            <option>{props.type.medicalCost}</option>
                            <option>{props.type.communicationCost}</option>
                        </select>
                        <input ref={dayOfPurchase} name="date" id="date" type='date'></input>
                        <input name="memo" id="memo" type='checkbox' onChange={isMemoCheck}></input>
                        {isMemo ? <textarea ref={memo} rows={5} cols={10}></textarea> : ''}
                        <div>
                            예
                            <input name='repurchase' value="true" onChange={CheckRepurchase} id='repurchase' type='radio'></input>
                            아니오
                            <input name='repurchase' value="false" onChange={CheckRepurchase} id='repurchase' type='radio'></input>
                        </div>
                    </div>
                </Box>
                <Box>
                    <button onClick={Upload}>등록하기</button>
                </Box>
            </Container>
        </>
    );
};

export default InputWindow;


const Container = styled.div`
    border: 1px solid black;
    margin: auto;
    width: 450px;
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

`