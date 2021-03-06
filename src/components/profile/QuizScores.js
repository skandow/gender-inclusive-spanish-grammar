import React from 'react';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Copyright from '../containers/Copyright'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 400,
    },
  });


function QuizScores() {
    const quizScores = useSelector(state => state.quizScores);
    const classes = useStyles();
    
    function createData(quizNumber, score, percentage) {
        return { quizNumber, score, percentage };
    }
      
    function makeRows() {
        let quizArray = []
        for (let quizCounter = 1; quizCounter <= 20; quizCounter++) {
            const thisQuiz = quizScores.find(score => score.quiz === quizCounter)
            if (thisQuiz) {
                let thisRow = createData(quizCounter, thisQuiz.score, thisQuiz.percentage)
                quizArray.push(thisRow)
            } else {
                let thisEmptyRow = createData(quizCounter, "no score", "not taken yet")
                quizArray.push(thisEmptyRow)
            }
        }
        return quizArray;
    }
    
    const rows = makeRows();

    return (
        <Container>
            <Typography component="h1" variant="h3">
              Your Quiz Scores
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Quiz</StyledTableCell>
                            <StyledTableCell>Score</StyledTableCell>
                            <StyledTableCell>Percentage</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => ( 
                        <StyledTableRow key={row.quizNumber}>
                            <StyledTableCell component="th" scope="row"><button style={{backgroundColor: "#006341", width: "35px"}}><Link style={{textDecoration: "none"}} to={`/quizzes/${row.quizNumber}`}>{row.quizNumber}</Link></button></StyledTableCell>
                            <StyledTableCell>{row.score}</StyledTableCell>
                            <StyledTableCell>{row.percentage}</StyledTableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Copyright/>
        </Container>
    )
}

export default QuizScores;