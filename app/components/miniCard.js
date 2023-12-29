import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CardActionArea, CardActions } from '@mui/material';

const MiniCard = props => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:"#262125", marginLeft:"5px", marginRight:"5px"}} >
      <a href={`/produtos/${props.props.id}`}>
        <CardActionArea>
          <div className='flex justify-center'>
              <img className='object-contain' style={{width:"80%", height:'240px'}} src={props.props.imageurl} alt="Image" />
          </div>
          <CardContent className='text-[#FFF]'>
            <Typography gutterBottom variant="h5" component="div" style={{height:"66px"}}>
              {props.props.name}
            </Typography>
            <Typography style={{height:"80px"}} variant="body2">
              <p className='line-clamp-4 text-[#FFF] text-justify'>{props.props.description}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
      <CardActions className='flex justify-center'>
        <button className="bg-[#E89C38] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <FontAwesomeIcon icon={faCoffee} />
            <span className="pl-2">Adicionar ao carrinho</span>
        </button>
      </CardActions>
    </Card>
  );
}

export default MiniCard;
