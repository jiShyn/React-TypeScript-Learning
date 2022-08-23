//rafce
import React from "react";
// import Button from "./Button";
import { Button, Card } from "react-bootstrap";

const Composition = () => {
   //  return (
   //     <div>
   //        <div>Composition</div>
   //        <h3>Button</h3>
   //        <Button varian="success">Success</Button>
   //        <Button varian="danger" className="w-25" disabled>
   //           Danger
   //        </Button>
   //        <Button varian="warning" loadding>
   //           Warning
   //        </Button>
   //     </div>
   //  );

   return (
      <div>
         <h1>React Bootstrap</h1>
         <Button variant="primary">Primary</Button>
         <Button variant="success">Success</Button>
         <Button variant="danger">Danger</Button>
         <Button variant="warning" disabled>
            Warning
         </Button>

				 <br />
				 <br />

				 <Card className="w-25">
					<Card.Img src="https://picsum.photos/id/237/200/300"/>
					<Card.Body>
						<Card.Title>Hello BC27</Card.Title>
						<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consectetur id dicta blanditiis laboriosam vitae perferendis odio earum repudiandae ea? Quibusdam omnis esse non molestias soluta voluptate praesentium sit cumque?</Card.Text>
					</Card.Body>
				 </Card>
      </div>
   );
};

export default Composition;
