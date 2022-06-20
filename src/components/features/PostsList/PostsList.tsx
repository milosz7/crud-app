import { Col, Row, Card, Button } from 'react-bootstrap';
import { selectAllPosts, selectPostByCategory, Post } from '../../../store/slices/postsSlice';
import { useAppSelector } from '../../../store/hooks';
import { LinkContainer } from 'react-router-bootstrap';
import { capitalizeString } from '../../../helpers/capitalizeSrting';

const PostsList = ({ filter, category }: { filter: any; category?: string }) => {
  const posts = useAppSelector(
    filter && category ? (state) => selectPostByCategory(state, category) : selectAllPosts
  );

  if (posts.length === 0) return (
    <p className="text-secondary p-5 text-center fs-3">There are no posts matching your criteria.</p>
  )

  return (
    <Row className="align-items-stretch">
      {posts.map((post) => (
        <Col key={post.id} className="col-xl-4 col-md-6 col-sm-12 mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>{post.title}</Card.Title>
              <Card.Text className="m-0">
                <span className="fw-bold">Author: </span>
                {post.author}
              </Card.Text>
              <Card.Text className="m-0">
                <span className="fw-bold">Published: </span>
                {post.publishedDate}
              </Card.Text>
              <Card.Text>
                <span className="fw-bold">Category: </span>
                {capitalizeString(post.category)}
              </Card.Text>
              <Card.Text>{post.shortDescription}</Card.Text>
              <LinkContainer to={`/post/${post.id}`}>
                <Button className="align-self-start mt-auto">Read more</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PostsList;
