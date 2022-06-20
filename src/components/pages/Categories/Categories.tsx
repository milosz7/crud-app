import { ListGroup } from 'react-bootstrap';
import { selectAllCategories } from '../../../store/slices/categoriesSlice';
import { useAppSelector } from '../../../store/hooks';
import { Link } from 'react-router-dom';
import { capitalizeString } from '../../../helpers/capitalizeSrting';

const Categories = () => {
  const categories = useAppSelector(selectAllCategories);

  return (
    <div className="py-3 m-auto mt-3 col-lg-6 col-10">
      <h2>Categories</h2>
      <ListGroup className="mt-3">
        {categories.map((category) => (
          <ListGroup.Item as={Link} key={category} to={`/categories/${category}`}>
            {capitalizeString(category)}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Categories;
