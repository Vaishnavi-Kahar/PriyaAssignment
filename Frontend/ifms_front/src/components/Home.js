import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import add from '../Images/add.jpg'
import view from '../Images/view.webp'
import del from '../Images/delete.jpg'
import seat from '../Images/seat.jpg'
import room from '../Images/room.webp'
import floor1 from '../Images/floor1.jpeg'
import floor2 from '../Images/floor2.jpeg'
function Home() {
  return (
    <div className="home-background">
      <div className="content">
        <Typography variant="h4" align="center" gutterBottom sx={{color:"#021323", fontWeight:'bold', fontSize:'3rem', marginTop:'40%'}}>
          Welcome to Intelligent Floor Plan Management System (IFMS)
        </Typography>
        <div className='container'>
          <img src={floor1} alt="Example" className="home-image1" style={{ marginTop: '50px' }} />
           <img src={floor2} alt="Example" className="home-image2" style={{marginTop:'50px'}}/>
        </div>
       
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
      </div>
    </div>
  );
}

export default Home;

