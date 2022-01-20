import Header from "../../Components/Header";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Div, Icon, Container, Form, HeaderText, Span, SpanH, Error, Image, DivSpan, SpanLogin, ContainerCircle, Circle} from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {TextField} from "@mui/material"
import { useHistory, Link}  from 'react-router-dom'
import Buttons from "../../Components/Button";
import circleh from "../../assets/circle-header.svg"
import { api } from "../../Services/api";
import { useState } from "react";

interface SignUpCredentials {
    email: string;
    password: string;
    name: string;
  }

function Signup({}) {
    const history = useHistory();
    const [array] = useState(["1", "2", "3", "4", "5", "6"])
    

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        name: yup.string().required("Nome obrigatório"),
        password: yup.string().required("Senha obrigatória"),
    })

    const { register, 
            handleSubmit, 
            formState: { errors },
    } = useForm<SignUpCredentials>({
        resolver:yupResolver(formSchema),
    })


    const onSubmitFunction = (data: SignUpCredentials) => {
        console.log(data)
        api
        .post("/register/",  data)
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        });
    }




    return(
        <Container>
            <div className="header">
                <Header></Header>
                <Div>
                    <Icon>
                        <RiShoppingBag3Line/>
                    </Icon>
                    <div>
                        <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>   
                    </div>
                </Div>
                <ContainerCircle>
                    {array.map((item, index)=>(
                        <Circle key={index}></Circle>
                    ))}
                </ContainerCircle>
                <ContainerCircle>
                    {array.map((item, index)=>(
                        <Circle key={index}></Circle>
                    ))}
                </ContainerCircle>
                <ContainerCircle>
                    {array.map((item, index)=>(
                        <Circle key={index}></Circle>
                    ))}
                </ContainerCircle>
            </div>
            <div className="form">         
                <Form onSubmit={handleSubmit(onSubmitFunction)}>
                    <HeaderText>
                        <SpanLogin>Cadastro</SpanLogin>
                        <Link to="/">Retornar para o login</Link>
                    </HeaderText>
                    
                    <TextField fullWidth id="login-basic" label="Nome" variant="outlined" {...register("name")}/>
                    <Error>
                        { errors.name?.message &&
                        <span>
                            {errors.name?.message}
                        </span>
                        }
                    </Error>
                    <TextField  fullWidth id="login-basic" label="E-mail" variant="outlined" {...register("email")}/>
                    <Error>
                        { errors.email?.message &&
                        <span>
                            {errors.email?.message}
                        </span>
                        }
                    </Error>
                    <TextField fullWidth type="password" id="password-basic" label="Password" variant="outlined" {...register("password")}/>
                    <Error>
                        {
                            errors.email?.message &&
                        <span>
                            {errors.password?.message}
                        </span>
                        }
                    </Error>
                    <Buttons type="submit" text={"Cadastre-se"}></Buttons>
                </Form>
            </div>
        </Container>
    )
}

export default Signup;