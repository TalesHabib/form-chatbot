import * as Yup from 'yup';
import { FormData } from '../types/form.type';

export const getCurrentValidationSchema = (step: number) => {
    switch (step) {
        case 0:
            return Yup.object().shape({
                fullName: Yup.string().required('Nome é obrigatório')
            });
        case 1:
            return Yup.object().shape({
                city: Yup.string().required('Cidade é obrigatória')
            });
        case 2:
            return Yup.object().shape({
                birthDate: Yup.date()
                  .typeError('Data de nascimento é obrigatório')
                  .max(new Date(), 'A data não pode ser futura')
                  .required('Data de nascimento é obrigatória'),
                })
        case 3:
            return Yup.object().shape({
                email: Yup.string().email('Email inválido').required('E-mail informado é inválido')
            });
        case 4:
            return Yup.object().shape({
                rating: Yup.number().required('Avalie sua experiência')
            });
        default:
            return Yup.object().shape({});
    }
};

export const getInputPlaceholder = (step: number) => {
    switch (step) {
        case 0:
            return "Digite seu nome...";
        case 1:
            return "Digite sua cidade...";
        case 2:
            return "Selecione sua data de nascimento...";
        case 3:
            return "Digite seu email...";
        default:
            return "";
    }
};

export const getBotResponse = (step: number, data: Partial<FormData>) => {
    switch (step) {
        case 1:
            return `Que satisfação ${data.fullName}! Agora sei seu nome. Qual a cidade que você mora?`;
        case 2:
            return "Legal, agora que sabemos sua cidade. Qual sua data de nascimento?";
        case 3:
            return "Agora me fale seu e-mail?";
        case 4:
            return "Por favor, avalie nossa conversa de 1 a 5 estrelas:";
        default:
            return "";
    }
};

export const greetingMessage = "Olá, eu sou o chatnilson, tudo bem? Para começar preciso do seu nome.";

export const fieldNames = ['fullName', 'city', 'birthDate', 'email', 'rating'];