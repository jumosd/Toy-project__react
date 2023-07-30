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


const Main = () => {

    const [form, setForm] = useState([])

    useEffect(() => {
        console.log('메인컴포넌트', form)
    }, [form])

    const Delete = (id) => {
        const newForm = form.filter((item) => {
            return item.createat !== id
        })
        setForm(newForm)
    }
    return (
        <>
            <Container>
                <InputWindow type={type} form={form} setForm={setForm} />
                <Filter type={type} />
                <List type={type} form={form} Delete={Delete}></List>
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

