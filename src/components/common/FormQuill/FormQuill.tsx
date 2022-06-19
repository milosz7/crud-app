import ReactQuill from 'react-quill';
import { useRef } from 'react';
import { Form } from 'react-bootstrap';
import 'react-quill/dist/quill.snow.css';

interface Props {
  title: string;
  onChange: any;
  value: string;
}

const FormQuill = ({title, ...props }: Props) => {
  const ref = useRef<ReactQuill | null>(null);

  const handleClick = () => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  };

  return (
    <Form.Group>
      <Form.Label onClick={handleClick}>
        {title}
      </Form.Label>
      <ReactQuill ref={ref} theme="snow" {...props}></ReactQuill>
    </Form.Group>
  );
};

export default FormQuill;
