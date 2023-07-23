import React from "react"
import styled from "styled-components";
import {BsEnvelopePaperFill} from "react-icons/bs"

function ContactUs(){
  return (
    <Container>
        <Contact>
        <LeftSection>
            <Icon>
                <BsEnvelopePaperFill className="icon"/>
            </Icon>
            <p>
                If you have any queries or just want to get in touch, use the form attached.
                We are looking forward to hear from you.
            </p>
        </LeftSection>
        <RightSection>
            <h1>Contact Us</h1>
            <Image></Image>
            <Form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button>Send</button>
            </Form>
        </RightSection>
        </Contact>
    </Container>
  )
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`
const Contact = styled.div`
    display:flex;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    /* MEDIA-QUERIES FURTHER*/


    /* //tablet portrait */
    @media screen and (min-width: 768px) and (max-width: 1023px)  {
        flex-direction:column;
        justify-content: center;
        margin: auto 0;
        width:90%;
    }
    
    
    /* //smartphone landscape */
    @media screen and (min-width: 480px) and (max-width: 767px)  {
      flex-direction:column;
      justify-content: center;
      margin: auto 0;
      width:90%;
    }
    
    /* //smartphone portrait */
    @media screen and (min-width: 300px) and (max-width: 479px) {
      flex-direction:column;
      justify-content: center;
      margin: auto 0;
      width:90%;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    input{
        width: 20rem;
        height: 2rem;
        border:none;
        background-color:#EFEFEF  ;
        border-radius: 5px;
        padding: 0.5rem;
        font-size: 1rem;
        outline: none;
    }
    textarea{
        width: 20rem;
        height: 8rem;
        border: none;
        background-color:#EFEFEF  ;
        border-radius: 5px;
        padding: 0.5rem;
        resize: none;
        font-size: 1rem;
        outline: none;
    }
    button{
        width: 10rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        background-color: #830304;
        color: white;
        font-size: 1rem;
        font-weight: bold;
    }
    button:hover{
        cursor: pointer;
        background-color: #b30000;
    }
    /* //tablet portrait */
    @media screen and (min-width: 768px) and (max-width: 1023px)  {
        input{
            width: 70vw;
        }
        textarea{
            width: 70vw;
        }
    }
    
    
    /* //smartphone landscape */
    @media screen and (min-width: 480px) and (max-width: 767px)  {
        input{
            width: 70vw;
        }
        textarea{
            width: 70vw;
        }
    }
    
    /* //smartphone portrait */
    @media screen and (min-width: 300px) and (max-width: 479px) {
        input{
            width: 70vw;
        }
        textarea{
            width: 70vw;
        }
    }
`
const Image = styled.div`
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    border: 1px solid gray;
`
const LeftSection = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    gap:1.5rem;
    padding:8rem 2rem;
    p{
        font-size:1.6rem;
        text-align:center;
        font-weight:600;
        width:20rem;
        color:white;
    }
    background-color: #830304;

    /* //tablet portrait */
    @media screen and (min-width: 768px) and (max-width: 1023px)  {
        padding:4rem 2rem;
        margin-top: 2rem;
        p{
            width:50vw;
        }
    }
    
    
    /* //smartphone landscape */
    @media screen and (min-width: 480px) and (max-width: 767px)  {
        padding:4rem 2rem;
        margin-top: 2rem;
        p{
            width:50vw;
        }
    }
    
    /* //smartphone portrait */
    @media screen and (min-width: 300px) and (max-width: 479px) {
        padding:4rem 2rem;
        margin-top: 2rem;
        p{
            width:50vw;
        }
    }
`
const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 1rem;
    h1{
        color: black;
    }

`

const Icon = styled.div`

    .icon{
        color:white;
        font-size:8rem;
    }
`

export default ContactUs;
