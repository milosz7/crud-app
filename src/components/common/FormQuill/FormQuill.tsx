import ReactQuill from 'react-quill';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import 'react-quill/dist/quill.snow.css';

interface Props {
  id: string;
  title: string;
  onChange: any;
  value: string;
}

const FormQuill = ({ id, title, ...props }: Props) => {
  const ref = useRef<ReactQuill | null>(null);
  console.log(ref);

  const handleClick = () => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label onClick={handleClick} htmlFor={id}>
        {title}
      </Form.Label>
      <ReactQuill ref={ref} theme="snow" id={id} {...props}></ReactQuill>
    </Form.Group>
  );
};

export default FormQuill;
