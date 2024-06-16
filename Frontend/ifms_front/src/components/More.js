import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Home.css';
import add from '../Images/add.jpg'
import view from '../Images/view.webp'
import del from '../Images/delete.jpg'
import seat from '../Images/seat.jpg'
import room from '../Images/room.webp'
const More = () => {
  return (
     <div className="cards-container" style={{marginTop:'110px', marginBottom:'40px'}}>
          <Card className="card" component={Link} to="/add-plan" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' , textDecoration:'none' }}>
            <CardMedia
              component="img"
              height="140"
              image={add}
              alt="Add Floor Plan"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Add Floor Map
              </Typography>
            </CardContent>
          </Card>
          
          <Card className="card" component={Link} to="/modify-plan" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' , textDecoration:'none' }}>
            <CardMedia
              component="img"
              height="140"
              image={view}
              alt="View Floor Plan"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Modify Floor Map
              </Typography>
            </CardContent>
          </Card>

          <Card className="card" component={Link} to="/delete-plan" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' , textDecoration:'none'}}>
            <CardMedia
              component="img"
              height="140"
              image={del}
              alt="Delete Floor Plan"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Delete Floor Map
              </Typography>
            </CardContent>
          </Card>

          <Card className="card"  sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' , textDecoration:'none' }}>
            <CardMedia
              component="img"
              height="140"
              image={room}
              alt="Book a Room"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Book a Room
              </Typography>
            </CardContent>
          </Card>

          <Card className="card"  sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' , textDecoration:'none' }}>
            <CardMedia
              component="img"
              height="140"
              image={seat}
              alt="Book Seat"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Book Seats
              </Typography>
            </CardContent>
          </Card>
        </div>
  )
}

export default More;