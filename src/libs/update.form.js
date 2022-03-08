import React, { useState } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function Move(){
    const[Firstname,setFirstname]=useState("");
    const[Lastname,setLastname]=useState("");
    const[City,setCity]=useState("");
    const[Cardprice,setCardprice]=useState("");
    const[Diagnose,setDiagnose]=useState("");

    
    const handleFirstname =(e)=>{
      setFirstname(e.target.value);
    }

    const handleLastname =(e)=>{
      setLastname(e.target.value);
    }

    const handleCity =(e)=>{
        setCity(e.target.value);
    }

    const handleCard =(e)=>{
        setCardprice(e.target.value);
    }

    const handleDiagnose =(e)=>{
        setDiagnose(e.target.value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return (
        <div>
            <h1 className="text">Update Consultation</h1>
    <Form className='change'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id='med'>Firstname</Form.Label>
    <Form.Control type="text" placeholder="Firstname" value={Firstname} onChange={handleFirstname} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id='med'>Lastname</Form.Label>
    <Form.Control type="text" placeholder="Enter Lastname" value={Lastname} onChange={handleLastname} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id='med'>City</Form.Label>
    <Form.Control type="text" placeholder="Enter Lastname" value={City} onChange={handleCity}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id='med'>Cardprice</Form.Label>
    <Form.Control type="int" placeholder="Enter Lastname" value={Cardprice} onChange={handleCard}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id='med'>Diagnose</Form.Label>
    <Form.Control type="text" placeholder="Enter Lastname"  value={Diagnose} onChange={handleDiagnose}/>
  </Form.Group>
  <Form.Label id='med'>NHIS</Form.Label>
  <br/>
  <Form.Select size="lg">
    <option>Yes</option>
    <option>No</option>
  </Form.Select>
   <br/>
   <br/>
  <Button variant="primary" type="submit" id='med' className="move" onClick={handleSubmit}> 
    Submit
  </Button>
</Form>
        </div>
    );
}