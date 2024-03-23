import Button from "../../ui/Button";
import CreateRoomForm from "./CreateRoomForm";
import Modal from "../../ui/Modal";

function AddRoom() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateRoomForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
export default AddRoom;
