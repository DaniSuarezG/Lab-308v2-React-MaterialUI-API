import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PicCard({ pic }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ pic.url }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { pic.title }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { pic.explanation }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}