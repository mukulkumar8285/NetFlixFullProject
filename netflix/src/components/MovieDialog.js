import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { SetOpen } from '../redux/MovieSlice';
import VideoBackground from './VideoBackground';

export default function AlertDialog() {
const {open, id} = useSelector((state)=> state.movie);
const dispatch = useDispatch();

const handleClose = () =>{
    dispatch(SetOpen(false));
}

  return (
    <React.Fragment>
      
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <VideoBackground movieId={id}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cencel</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
