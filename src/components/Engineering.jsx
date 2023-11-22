import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Engineering() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\Images\Internship-Engineering.jpg" />
      <Card.Body>
        <Card.Title>Engineering</Card.Title>
        <Card.Text>
        "Precision meets innovation in our engineering realm. From designing structures that touch the sky to crafting intricate solutions for complex challenges, our engineers are the architects of tomorrow."
        </Card.Text>
        <Button variant="primary">Check it out</Button>
      </Card.Body>
    </Card>
  );
}

export default Engineering;

