import { Button, Card } from 'react-bootstrap'
import Items from './Projects.json'
import todo from './Img/todoPreview.gif'

const Project = () => {
    
   return( <div className="projectCard">
        {
            Items.map((item, index) => (
                <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={todo} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button href={item.url} variant="primary">Preview Link</Button>
                    </Card.Body>
                </Card>
            ))
        }
    </div>)
}

export default Project;