import { Form, Button, Image } from 'react-bootstrap'
import { useState } from "react";
import logoUpload from './assets/images/icon-upload.svg'
import './App.css'

function App() {

  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <>
      <div className="logoTittle"></div>
      <div className="lineBottom"></div>
      <div className="lineTop"></div>
      <div className="circule"></div>
      <div className="linesTop"></div>
      <div className="general">
        <div className="tittles">
          <h1 className='text-center' style={{ color: "#fdfdfd" }}>Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p className='text-center' style={{ color: "#fdfdfd" }}>Secure your spot at next year's biggest coding conference</p>
        </div>
        <div className="formsTicket">
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label style={{ color: "#fdfdfd" }}>Upload Avatar</Form.Label>
              <div
                className="upload-box"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => document.getElementById("fileInput").click()}
              >
                <Image src={logoUpload} />
                {/*<FaUpload className='align-self-center' size={40} color="#fdfdfd" />*/}
                <p style={{ color: "#fdfdfd" }}>
                  {fileName || "Arrastra o da clic para cargar tu avatar"}
                </p>
              </div>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept=".jpg,.png"
              />
              <Form.Text className="text-muted">
                Upload your photo (.jpg or .png, max size: 500kb)
              </Form.Text>
            </Form.Group>

            {/* Aqui se empieza a ver la segunda parte del formulario */}

            <Form.Group className="mb-2" controlId="formBasicEmail">
              {/*<Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>*/}
              <Form.Label style={{ color: "#fdfdfd" }}>Full Name</Form.Label>
              <Form.Control className='mb-3' type="text" placeholder="Name" />
              <Form.Label style={{ color: "#fdfdfd" }}>Email address</Form.Label>
              <Form.Control className='mb-3' type="email" placeholder="Enter email" />
              <Form.Label style={{ color: "#fdfdfd" }}>GitHub Username</Form.Label>
              <Form.Control className='mb-3' type="text" placeholder="@yourusername" />
              <br />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>

    </>
  )
}

export default App
