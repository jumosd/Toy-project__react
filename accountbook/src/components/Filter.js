import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const Filter = (props) => {
    const [filterData, setFilterData] = useState({
        type: '',
        sort: '',
        startPeriod: '',
        endPeriod: ''
    })


    const selectType = (event) => {
        setFilterData({
            ...filterData,
            type: event.target.value
        })
    }
    const selectSort = (event) => {
        setFilterData({
            ...filterData,
            sort: event.target.value
        })
    }
    const selectStartPeriod = (event) => {
        setFilterData({
            ...filterData,
            startPeriod: event.target.value
        })
    }
    const selectEndPeriod = (event) => {
        setFilterData({
            ...filterData,
            endPeriod: event.target.value
        })
    }



    props.FilterForm(filterData)


    return (
        <Container>
            <select onChange={selectType}>
                <option >{props.type.foodCost}</option>
                <option >{props.type.medicalCost}</option>
                <option >{props.type.communicationCost}</option>
            </select>
            <select onChange={selectSort}>
                <option>{props.sortType.priceMax}</option>
                <option>{props.sortType.priceMin}</option>
                <option>{props.sortType.new}</option>
                <option>{props.sortType.old}</option>
            </select>
            <label htmlFor='startPeriod'>시작 기간</label>
            <input onChange={selectStartPeriod} type='date' name='startPeriod' id='startPeriod'></input>
            <label htmlFor='endPeriod'>끝 기간</label>
            <input onChange={selectEndPeriod} type='date' name='endPeriod' id='endPeriod'></input>
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