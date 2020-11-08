import React from 'react';
import img1 from './Images/img1.JPEG'
const Card = props => {
    return(
        <div className='card-text-center' style={{width: "20rem", border: "solid", margin: "40px", height: "550px"   }} >
          <div style={{margin: "25px"   }}>
            <img src={img1} alt='seerem' />
          </div>
          <div className='card-body text-dark' style={{ height: "550px", margin: "25px"   }} >
              <h3 className='card-title'>JOSE HEREDIA</h3><br></br><br></br><br></br>
              <h3 className='card-text'>PHONE</h3><br></br><br></br><br></br>
              <h3 className='card-text'>COMPANY</h3><br></br><br></br><br></br>
              <a className='btn btn-primary' href='/Login' style={{ margin:"5px"}}>ON</a>
              <a className='btn btn-primary' href='/Login' style={{ margin:"5px"}}>OFF</a>
            
          </div>

        </div>
    )
}

export default Card;