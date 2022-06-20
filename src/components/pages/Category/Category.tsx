import { useParams } from "react-router-dom";
import { capitalizeString } from "../../../helpers/capitalizeSrting";
import PostsList from "../../features/PostsList/PostsList";

const Category = () => {
  const { category } = useParams();

  if (!category) return null
  return (
    <div className="py-3">
      <h2 className="mb-3">Category: {capitalizeString(category)}</h2>
      <PostsList filter={true} category={category} />
    </div>
  )
}

export default Category;