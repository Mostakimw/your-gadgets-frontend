import React from "react";

type TMyFormProps = {
  children: React.ReactNode;
  // onSubmit: Sub
};

const MyForm = ({ children }: TMyFormProps) => {
  return (
    <div>
      <form>{children}</form>
    </div>
  );
};

export default MyForm;
