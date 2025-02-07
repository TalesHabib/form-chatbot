import { FormProvider, useForm } from "react-hook-form";
import { FormData } from "../types/form.type";
import { getCurrentValidationSchema } from "../utils/bot";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStep } from "./step";
import { PropsWithChildren } from "react";


export function FormStateProvider({ children }: PropsWithChildren) {
    const { step } = useStep();

    const form = useForm<Partial<FormData>>({
        resolver: yupResolver(getCurrentValidationSchema(step)),
        mode: 'onSubmit',
        defaultValues: {
            fullName: '',
            city: '',
            birthDate: undefined,
            email: '',
            rating: 0
        }
    });

    return <FormProvider {...form}>
        {children}
    </FormProvider>
}