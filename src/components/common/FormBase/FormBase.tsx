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
  max?: string;
}

const FormBase = ({
  as,
  title,
  max,
  rows,
  id,
  type,
  ...props
}: FormBaseData) => {
  if (as)
    return (
      <Form.Group className="mb-3">
        <Form.Label htmlFor={id}>{title}</Form.Label>
        <Form.Control
          rows={rows}
          as={as}
          type={type}
          id={id}
          {...props}
          required
        ></Form.Control>
      </Form.Group>
    );
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={id}>{title}</Form.Label>
      <Form.Control
        type={type}
        max={type === 'date' ? max : undefined}
        className="w-50"
        id={id}
        {...props}
        required
      ></Form.Control>
    </Form.Group>
  );
};

export default FormBase;
