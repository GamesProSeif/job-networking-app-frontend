import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ContactUs() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose..</option>
            <option>Alexandria</option>
            <option>Aswan</option>
            <option>Assiut</option>
            <option>Beheira</option>
            <option>Beni Suef</option>
            <option>Cairo</option>
            <option>Dakahlia</option>
            <option>Damietta</option>
            <option>Fayoum</option>
            <option>Gharbia</option>
            <option>Giza</option>
            <option>Ismailia</option>
            <option>Kafr el-Sheikh</option>
            <option>Matrouh</option>
            <option>Minya</option>
            <option>Menofia</option>
            <option>New Valley</option>
            <option> North Sinai</option>
            <option>Port Said</option>
            <option>Qualyubia</option>
            <option>Qena</option>
            <option>Red Sea</option>
            <option>Al-Sharqia</option>
            <option>Soha</option>
            <option>South Sinai</option>
            <option>Suez</option>
            <option>Luxor</option>


          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>message</Form.Label>
          <Form.Control type="msg" placeholder="Type your message..." />
        </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
      </Row>
    </Form>
  );
}

export default ContactUs;