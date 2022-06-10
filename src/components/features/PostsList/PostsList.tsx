import { Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { selectAllPosts } from '../../../store/slices/postsSlice';
import { useAppSelector } from '../../../store/hooks';

const PostsList = () => {
  const posts = useAppSelector(selectAllPosts);

  return (
    <Row className='align-items-stretch'>
      {posts.map((post, idx) => 
        <Col key={idx} className='col-xl-4 col-md-6 col-sm-12 mb-4'>
          <Card className="h-100">
            <Card.Body className='d-flex flex-column'>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text className='m-0'><span className="fw-bold">Author: </span>{post.author}</Card.Text>
              <Card.Text ><span className="fw-bold">Published: </span>{post.publishedDate}</Card.Text>
              <Card.Text>{post.shortDescription}</Card.Text>
              <Button as={Link as any} to={`post/${post.id}`} className='align-self-start mt-auto'>Read more</Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  )
}

export default PostsList;