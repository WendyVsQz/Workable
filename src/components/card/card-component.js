import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

export function CardComponent(props) {
  return (
    <>
        <Card variant='outlined' className='custom-card-layout' >
            <React.Fragment>
                <CardContent>
                    <Typography variant="h3" component="div">
                       HJob Title:{/* ? {props.project.title} */}
                    </Typography>
                    <Typography component="div">
                       Job Description:{/* ? {props.project.title} */}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} component="div">
                        Location: {/* {props.project.desc} */}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" >Details</Button>
                    {/* onClick={() => props.handleOnClick(props.project)} */}
                </CardActions>
            </React.Fragment>
        </Card>
    </>
  );
}
