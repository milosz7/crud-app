import { Form } from 'react-bootstrap';
import React from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { FormData } from '../../features/PostForm/PostForm';

interface FormBaseData {
  id: string;
  type: string;
  as?: 'textarea';
  placeholder: string;
  register: UseFormRegister<FormData>;
  label: Path<FormData>;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  rows?: number | undefined;
  title: string;
  value?: string;
  max?: string;
  errorMsg: JSX.Element | undefined;
  minLength: number;
}

const FormBase = ({
  as,
  title,
  max,
  rows,
  id,
  onChange,
  type,
  minLength,
  register,
  label,
  required,
  errorMsg,
  ...props
}: FormBaseData) => {
  if (as)
    return (
      <Form.Group className="mb-3">
        <Form.Label htmlFor={label}>{title}</Form.Label>
        <Form.Control
          rows={rows}
          as={as}
          type={type}
          id={label}
          {...register(label, {
            required,
            onChange: onChange,
            minLength: minLength
          })}
          {...props}
        ></Form.Control>
        {errorMsg}
      </Form.Group>
    );
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={label}>{title}</Form.Label>
      <Form.Control
        type={type}
        max={type === 'date' ? max : undefined}
        className="w-50"
        id={label}
        {...register(label, { required, onChange: onChange, minLength: minLength })}
        {...props}
      ></Form.Control>
      {errorMsg}
    </Form.Group>
  );
};

export default FormBase;
