import { useParams } from "react-router-dom";
import { selectPostById } from "../../../store/slices/postsSlice";
import { useAppSelector } from "../../../store/hooks";
import { Navigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap"
import { useState } from "react";
import DeletePostModal from "../../features/DeletePostModal/DeletePostModal";
import { capitalizeString } from "../../../helpers/capitalizeSrting";

const Post = () => {
  let { id } = useParams();
  const [ postData ] = useAppSelector((state) => selectPostById(state, id));
  const [modalDisplay, setModalDisplay] = useState(false);

  if (!postData) return <Navigate to="/" />;

  return  (
    <>
      <div className="py-3 m-auto mt-3 col-lg-6 col-10">
        <div className="d-flex justify-content-between mb-3">
          <h2>{postData.title}</h2>
          <div>
            <LinkContainer to={`../edit/${id}`}>
              <Button className="me-2" variant="outline-info">
                Edit
              </Button>
            </LinkContainer>
            <Button variant="outline-danger" onClick={() => setModalDisplay(true)}>Delete</Button>
          </div>
        </div>
        <div>
          <p className="m-0"><span className="fw-bold">Author: </span>{postData.author}</p>
          <p className="m-0"><span className="fw-bold">Published: </span>{postData.publishedDate}</p>
          <p><span className="fw-bold">Category: </span>{capitalizeString(postData.category)}</p>
        </div>
        <p dangerouslySetInnerHTML={{__html: postData.content}}></p>
      </div>
      <DeletePostModal postId={(id) ? id : ''} show={modalDisplay} onHide={() => setModalDisplay(false)} />
    </>
  );
};

export default Post;