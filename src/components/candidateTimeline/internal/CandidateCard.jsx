import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';



const CandidateCard = () => {
  return (
    <Card sx={{ maxWidth: 300, boxShadow:"none" }}>
      <CardHeader
        avatar={
            <img
            src="https://img.icons8.com/color/48/000000/person-male.png"
            style={{borderRadius:"50%", width:"50px", height:"50px"}}
          />
        }
        title="Mr Candidate"
        subheader="Sr.Engg"
      />
    </Card>
  );
}

export default CandidateCard;
