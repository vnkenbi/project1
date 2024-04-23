import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
const ModalCreateUser = () => {

    const handleuploadanh = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setpreviewimage(URL.createObjectURL(event.target.files[0]))
            setavatar(event.target.files[0]);
        }
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [username, setusername] = useState('')
    const [role, setrole] = useState('USER')
    const [avatar, setavatar] = useState('')
    const [previewimage, setpreviewimage] = useState('')
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop='static' // thuoc tinh ko cho dong form khi ko clichk vao nut x hoặc close
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* body cua thong bao them user */}
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(event) => setemail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(event) => setpassword(event.target.value)} />
                        </div>


                        <div className="col-md-6">
                            <label className="form-label">username</label>
                            <input type="text" className="form-control" value={username} onChange={(event) => setusername(event.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(event) => setrole(event.target.value)}>
                                <option vlaue="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='chonanh'><FcPlus />Upload file</label>
                            <input type="file" id='chonanh' hidden
                                onChange={(event) => handleuploadanh(event)}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>

                            {previewimage ? <img src={previewimage} /> : <span>Preview Image</span>}



                        </div>


                    </form>
                    {/* ket thuc cua body */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreateUser;