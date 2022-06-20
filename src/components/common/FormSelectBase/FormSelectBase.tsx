import { Form } from 'react-bootstrap';
import { selectAllCategories } from '../../../store/slices/categoriesSlice';
import { useAppSelector } from '../../../store/hooks';
import { UseFormRegister, Path } from 'react-hook-form';
import { FormData } from '../../features/PostForm/PostForm';
import { capitalizeString } from '../../../helpers/capitalizeSrting';

const FormSelectBase = ({
  title,
  label,
  register,
  onChange,
  selectedCategory,
  errorMsg,
  required
}: {
  title: string;
  label: Path<FormData>;
  register: UseFormRegister<FormData>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  selectedCategory: string;
  errorMsg: JSX.Element | undefined;
  required: boolean;
}) => {
  const postCategories = useAppSelector(selectAllCategories);

  return (
    <Form.Group className="mb-3">
      <Form.Label>{title}</Form.Label>
      <Form.Select defaultValue={selectedCategory || ''} {...register(label, {required, onChange: onChange})}>
        <option value='' disabled>
          Choose a category
        </option>
        {postCategories.map((category, idx) => (
          <option key={idx} value={category}>
            {capitalizeString(category)}
          </option>
        ))}
      </Form.Select>
      {errorMsg}
    </Form.Group>
  );
};

export default FormSelectBase;
