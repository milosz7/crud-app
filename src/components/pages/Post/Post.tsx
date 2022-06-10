import { useParams } from "react-router-dom";
import { selectPostById } from "../../../store/slices/postsSlice";
import { useAppSelector } from "../../../store/hooks";
import { Navigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap"
import { useState } from "react";
import DeletePostModal from "../../features/DeletePostModal/DeletePostModal";

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
            <Button className="me-2" variant="outline-info" as={Link as any} to={`../edit/${id}`}>
              Edit
            </Button>
            <Button variant="outline-danger" onClick={() => setModalDisplay(true)}>Delete</Button>
          </div>
        </div>
        <div>
          <p className="m-0"><span className="fw-bold">Author: </span>{postData.author}</p>
          <p><span className="fw-bold">Published: </span>{postData.publishedDate}</p>
        </div>
        <p>{postData.content}</p>
      </div>
      <DeletePostModal postId={(id) ? id : ''} show={modalDisplay} onHide={() => setModalDisplay(false)} />
    </>
  );
};

export default Post;