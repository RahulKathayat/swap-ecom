import {
  Card,
  CardBody,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function SubscriptionCard({ subscription}) {
  return (
    <Card className="flex flex-column p-5 h-80 w-72 justify-around scale-110">
        <Typography 
          align="center"
          gutterBottom
          variant="h5"
          className="text-black"
        >
            {subscription.plan}
        </Typography>
        <Typography
          align="center"
          gutterBottom
          variant="h2"
          className="text-black"
        >
          {subscription.price}
        </Typography>
        <Typography
          align="center"
          className="text-black"
        >
          {subscription.description}
        </Typography>
        <Button variant="gradient" color="gray">Buy now</Button>
    </Card>
  );
}

export default SubscriptionCard;
