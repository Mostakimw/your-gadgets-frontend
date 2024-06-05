// "use client";

import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TMyFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const MyForm = ({ children, onSubmit }: TMyFormProps) => {
  const methods = useForm();
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default MyForm;
