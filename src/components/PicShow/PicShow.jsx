import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { OpenInNew } from '@mui/icons-material';

export default function PicShow({ pic }) {

  return (
    <Card sx={{ maxWidth: 700 }}>
      {/* <CardActionArea> */}
        <CardMedia
          sx={{ objectFit:'contain', backgroundColor: '#EBE3DB' }}
          component="img"
          height="300"
          image={ pic.url }
          alt={ pic.title }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { pic.title }
          </Typography>
          <Divider sx={{ marginTop: 3, marginBottom: 2 }}>
              <Typography variant='caption' color="text.secondary">
                Description
              </Typography>
            </Divider>
          <Typography variant="body2" color="text.secondary">
            { pic.explanation }
          </Typography>
          <CardActions sx={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end'}}>
            <Button
              size='small'
              color='secondary'
              variant='outlined'
              component='a'
              href={ pic.url }
            >
              Download
            </Button>
            <Button
              size='small'
              color='primary'
              variant='contained'
              href={ pic.hdurl }
            >
              HD
            </Button>
          </CardActions>
          <Divider sx={{ marginTop: 3, marginBottom: 2 }}>
            <Typography variant='caption' color="text.secondary">
              { pic.copyright } &copy; { pic.date }                
            </Typography>
          </Divider>
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  )
}