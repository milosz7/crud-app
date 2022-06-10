import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useAppDispatch } from '../../../store/hooks';
import { removePost } from '../../../store/slices/postsSlice';

const DeletePostModal = ({
  onHide,
  show,
  postId,
}: {
  onHide: React.MouseEventHandler;
  show: boolean;
  postId: string;
}) => {
  const dispatch = useAppDispatch();

  const handleRemoval = (postId: string) => {
    dispatch(removePost(postId));
  };

  return (
    <Modal show={show}>
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="m-0">This operation will completely remove this post from the app.</p>
        <p>Do you want to do that?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleRemoval(postId)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePostModal;
