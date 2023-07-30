import React from 'react';
import { styled } from 'styled-components';

const Filter = (props) => {




    return (
        <Container>
            <select>
                <option>{props.type.foodCost}</option>
                <option>{props.type.medicalCost}</option>
                <option>{props.type.communicationCost}</option>
            </select>
            <select>
                <option>{props.type.foodCost}</option>
                <option>{props.type.medicalCost}</option>
                <option>{props.type.communicationCost}</option>
            </select>
            <label htmlFor='startPeriod'>시작 기간</label>
            <input type='date' name='startPeriod' id='startPeriod'></input>
            <label htmlFor='endPeriod'>끝 기간</label>
            <input type='date' name='endPeriod' id='endPeriod'></input>
        </Container>
    );
};

export default Filter;


const Container = styled.div`
            display: flex;
            border: 1px solid black;
            justify-content: center;
            align-items: center;
            width: 450px;
            margin: auto;

            `