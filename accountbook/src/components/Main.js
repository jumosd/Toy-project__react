import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import "../style/style.css"
import InputWindow from './InputWindow';
import Filter from './Filter';
import List from './List'
const type = {
    foodCost: "식비",
    medicalCost: "의료비",
    communicationCost: "통신",
}

const sortType = {
    priceMax: "가격높은순",
    priceMin: "가격낮은순",
    new: "최신순",
    old: "오래된순"
}


const Main = () => {

    const [form, setForm] = useState([])
    const [filterObject, setFilterObject] = useState({})

    const Delete = (id) => {
        const newForm = form.filter((item) => {
            return item.createat !== id
        })
        setForm(newForm)
    }

    const FilterForm = (data) => {
        setFilterObject(data)
    }

    return (
        <>
            <Container>
                <InputWindow type={type} form={form} setForm={setForm} />
                <Filter type={type} form={form} sortType={sortType} FilterForm={FilterForm} />
                <List type={type} form={form} Delete={Delete} filterObject={filterObject} sortType={sortType}></List>
            </Container >
        </>
    );
};

export default Main;


const Container = styled.div`
    margin: auto;
    width: 1000px;
    height: 100vh;
    border-radius: 15px;
    border: 1px solid black;
    padding: 20px;
    

`

