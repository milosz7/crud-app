import { Form } from 'react-bootstrap';
import React from 'react';

interface FormBaseData {
  id: string;
  type: string;
  as?: 'textarea';
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isValid: boolean | undefined;
  rows?: number | undefined;
  title: string;
  value?: string;
}

const FormBase = ({
  id,
  type,
  as,
  placeholder,
  onChange,
  isValid,
  rows,
  title,
  value,
}: FormBaseData) => {
  if (as)
    return (
      <Form.Group className="mb-3">
        <Form.Label htmlFor={id}>{title}</Form.Label>
        <Form.Control
          type={type}
          rows={rows}
          as={as}
          placeholder={placeholder}
          id={id}
          onChange={onChange}
          isValid={isValid}
          value={value}
          required
        ></Form.Control>
      </Form.Group>
    );
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={id}>{title}</Form.Label>
      <Form.Control
        type={type}
        className="w-50"
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        isValid={isValid}
        value={value}
        required
      ></Form.Control>
    </Form.Group>
  );
};

export default FormBase;
