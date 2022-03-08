import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Logout() {
    return (
        <div >
              <Button variant="primary" type="submit" >
                 <Link to="/" id="so" className='momo'> LOGOUT</Link  >
               </Button>
        </div>
    )
}

export default Logout;