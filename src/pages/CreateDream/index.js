import React, { useState } from 'react'
import GlobalStyle from '../../styles/globalStyle'
import Navbar from '../../components/navbar';
import Dropzone from '../../components/upload';

import { Container, Content } from './style';
import TextArea from '../../components/formMessage';

const CreateDream = () => {

    return (
        <>
        <Navbar />
        <Container>
            <Content>
            <h1>Compartilhe seu sonho com a comunidade!</h1>
            <p>Algum subtitulo bem legal aqui incentivando a criação do sonho</p>
            <Dropzone />
            <TextArea />
            </Content>
            <GlobalStyle />
        </Container>
        </>
    )
}

export default CreateDream