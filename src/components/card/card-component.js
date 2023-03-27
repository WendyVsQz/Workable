import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Button, Card, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { decode } from 'html-entities';
import React, { useEffect, useState } from "react";
import { getFromStorage, saveToStorage } from '../../utils/storage-utils';
import "./card-component.css";

export function CardComponent(props) {

  const BOOKMARK = "bookmarked";

  const [bookMarked, setBookMarked] = useState(false);

  const handleBookMark = (job) => {
    // get the existing book marked list
    const temp = getFromStorage(BOOKMARK);
    let marked = new Map();

    if (temp != null) {
      marked = new Map(Object.entries(temp));
    }
    // check job exist in the local storage or not
    if (marked.get(job.jobId.toString()) != null) {
      // remove job if exist
      marked.delete(job.jobId.toString());
      setBookMarked(false);

      if (props.setRefresh) {
        props.setRefresh(true);
      }
    } else {
      // add job to book mark if not exist
      marked.set(job.jobId, job);
      setBookMarked(true);
    }

    saveToStorage(BOOKMARK, Object.fromEntries(marked));
  }

  useEffect(() => {
    const temp = getFromStorage(BOOKMARK);
    let marked = new Map(Object.entries(temp));
    setBookMarked(marked.get(props.job.jobId.toString()) ? true : false);
  }, [props.job]);

  return (
    <>
      <Card variant="outlined" className="custom-card-layout" key={props.job.jobId}>
        <React.Fragment>
          <Box hidden={!props.showBookMark}>
            <BookmarkBorderIcon
              hidden={bookMarked}
              className="book-mark-button"
              onClick={() => {
                handleBookMark(props.job);
              }} />

            <BookmarkIcon
              hidden={!bookMarked}
              className="book-mark-button-checked"
              onClick={() => {
                handleBookMark(props.job);
              }} />
          </Box>
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
              {decode(props.job.jobDescription)}
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
          <CardActions className="detials-button-right">
            <Button size="small" onClick={() => window.open(props.job.jobUrl, '_blank')}>More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </>
  );
}

export const EmptyCard = (props) => {
  return (
    <>
      <Card variant="outlined" className="custom-card-layout" >
        <React.Fragment>
          <CardContent>
            <Typography
              variant="h4"
              component="div"
              className="empty-card-text"
            >
              {props?.label ? props.label : "No records"}
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </>
  );
}