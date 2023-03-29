import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Accordion = styled((props) => (
<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
    borderBottom: 0,
    },
'&:before': {
    display: 'none',
    },
}));
const AccordionSummary = styled((props) => (
<MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
/>
))(({ theme }) => ({
backgroundColor:
    theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(153, 204, 255)', 
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
},
'& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba()',
}));

export default function CustomizedAccordions() {
const [expanded, setExpanded] = React.useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
};

return (
    <div>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography> Career Decisions (Advice)</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
        <p>
            For people who are constantly moving towards their goals, presented in 6-Steps: </p>
            <p>
            <a href="https://www.forbes.com/sites/forbesbusinesscouncil/2021/07/01/six-tips-on-how-to-find-your-career-path/">
            Six Tips On How To Find Your Career Path
            </a>
            </p>

            <p>
            A Blog - Creating a career development plan in 4-Steps: </p>
            <p>
            <a href="https://www.prospects.ac.uk/careers-advice/getting-a-job/how-to-choose-a-career">
            How-to-choose-a-career (In 4-Steps)
            </a>
            </p>
            
            <p>
            UK Gov’s own careers advice portal: </p>
            <p>
            <a href="https://nationalcareers.service.gov.uk/">
            UK National Careers Service 
            </a>
            </p>
            </Typography>
        </AccordionDetails>
    </Accordion>

<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography>Find out your own personality (Self Test resource) </Typography>
        </AccordionSummary>
        <AccordionDetails>
    <Typography>
            <p>
            A 10 minute test to get an accurate description of who you are and why you do things the way you do: </p>
            <p>
            <a href="https://www.16personalities.com/">
            mbti personality test
            </a>
        </p>
            </Typography>
        </AccordionDetails>
    </Accordion>

<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    <Typography>Free Toolkits</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            <p>
            If you need some career support, these free tools are a great way to get started. (Cheat Sheets, Podcasts & More): </p>
            <p>
            <a href="https://www.amazingif.com/toolkit/">
            Amazing If 
            </a>
        </p>
    </Typography>
        </AccordionDetails>
    </Accordion>

<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
        <Typography> Job Application Tracker Spreadsheet </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            <p>
            How to stay on top of your job hunt with this free - Job application Tracker spreadsheet: </p>
            <p> 
            <a href="https://standout-cv.com/blogs/job-hunting-advice-blog/113298692-job-application-tracker-spreadsheet">
            Job Application Tracker Spreadsheet
            </a>
            </p>
        </Typography>
        </AccordionDetails>
    </Accordion>

<Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
    <Typography>Interview tips</Typography>
        </AccordionSummary>
        <AccordionDetails>
    <Typography>
            <p>
            For upcoming job interview, how to prepare and know what to say and how to respond: </p>
            <p> -
            <a href="https://www.reed.co.uk/career-advice/common-interview-questions-and-answers/">
            Common interview questions and answers
            </a>
            </p>
            <p> -
            <a href="https://www.reed.co.uk/career-advice/types-of-interview-questions/">
            Types of interview questions
            </a>
            </p>
            <p> -
            <a href="https://www.reed.co.uk/career-advice/second-interviews-what-you-need-to-know/">
            Second interviews: What you need to know
            </a>
            </p>
            <p> -
            <a href="https://www.reed.co.uk/career-advice/second-interview-questions-and-answers/">
            Second interview questions and answers
            </a>
            </p>
            <p> -
            <a href="https://www.reed.co.uk/career-advice/competency-based-interviews-what-you-need-to-know/">
            Competency-based interviews: What you need to know
            </a>
            </p>
            </Typography>
        </AccordionDetails>
    </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
        <Typography> Job Search Tips </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            <p>
            Article - x4 Job hunt tips which not so well publicised: </p>
            <p> 
            <a href="https://www.theguardian.com/careers/2017/feb/15/the-job-hunting-tips-no-one-tells-you-about">
            The job hunting tips no one tells you about
            </a>
            </p>

            <p>
            Article - x4 Tips on getting un-advertised jobs </p>
            <p> 
            <a href="https://standout-cv.com/blogs/job-hunting-advice-blog/how-to-get-a-job-before-its-advertised">
            How to get a job before it’s advertised | 4 Simple Steps
            </a>
            </p>

            <p>
            Want to make your job seeking more targeted, efficient and rewarding? Here’s our how-to guide in x10 steps: </p>
            <p>
            <a href="https://www.theguardian.com/careers/10-step-guide-effective-job-hunting">
            A 10-step guide to effective job hunting
            </a>
            </p>

            <p>
            x3 - Tips to efficiently manage your time during your Job search: </p>
            <p>
            <a href="https://www.theguardian.com/careers/careers-blog/managing-your-time-while-job-hunting">
            Time management tips for successful job hunting
            </a>
            </p>
        </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
        <Typography>Job Offer (Accept or Reject)</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            <p>
            The Title says it all: </p>
            <p> 
            <a href="https://www.reed.co.uk/career-advice/reasons-to-reject-a-job-offer/">
            Six reasons to reject a job offer
            </a>
            </p>
        </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
        <Typography> In Job-Role Career Progression - Advice  </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            <p>
            How to have constructive discussions about your career progression: </p>
            <p> 
            <a href="https://www.theguardian.com/careers/careers-blog/how-to-constructive-discussions-career-progression">
            Article - How to conduct this type of discussion, if currently employed
            </a>
            </p>
        </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
        <Typography> Remote Working (Guide) </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            <p>
            The Title says it all:  </p>
            <p> 
            <a href="https://www.theguardian.com/technology/2020/mar/21/working-from-home-tech-self-isolation">
            Working from home: your guide to the tech you're going to need:
            </a>
            </p>
            </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
        <Typography> Employer In-sights (Articles)- (How employers view potential candidates)  </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            <p>
            Article - What the potential employers are seeking from younger talent: </p>
            <p> 
            <a href="https://www.theguardian.com/careers/why-employers-worry-recruiting-generation-y">
            Why employers worry about recruiting Generation Y
            </a>
            </p>

            <p>
            Article - x4 ways to cope with work pressure: </p>
            <p>
            <a href="https://www.theguardian.com/careers/pressure-four-ways-cope-wrong-work-job">
            Top tips to help you construct a more resilient career
            </a>
            </p>
            </Typography>
        </AccordionDetails>
    </Accordion>
            </div>
    );
}