import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "./card-component.css";
import  BasicModal from "../modal/modal"


export function CardComponent(props) {

  return (
    <>
      <Card variant="outlined" className="custom-card-layout">
        <React.Fragment>
          <CardContent>
            <Typography
              variant="h4"
              component="div"
              className="custom-card-text"
            >
              <b>Job Title: </b>
              {props.job.jobTitle}
            </Typography>
            <Typography component="div" className="custom-card-text">
              <b>Job Description: </b>
              <br />
              {props.job.jobDescription}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              component="div"
              className="custom-card-text"
            >
              <b>Location: </b>
              {props.job.locationName}
            </Typography>
          </CardContent>
          <CardActions className="details-button-right"> 
          < BasicModal/>
        </CardActions>
        </React.Fragment>
      </Card>
    </>
  );
}
