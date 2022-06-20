import { Button } from "react-bootstrap";
import PostsList from "../../features/PostsList/PostsList";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="py-3">
      <div className="d-flex justify-content-between mb-3">
        <h2 className='m-0'>All posts</h2>
        <Button variant="outline-info" as={Link as any} to='/post/add'>Add post</Button>
      </div>
      <PostsList filter={false} />
    </div>
  )
};

export default Home;