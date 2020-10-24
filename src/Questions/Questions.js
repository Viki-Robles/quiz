import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    grid: {
        marginTop: '10%',
        padding: '50px',
        backgroundColor: '#191970',
        width: '60%',
        margin: '0 auto',
        borderRadius: '10px'
    },
    typography: {
        color: 'white',
    }
});

const questions = [
    {
        questionText: 'Which is the capital of France ?',
        answerOptions: [
            { name: 'Paris', isCorrect: true }, { name: 'London', isCorrect: false }, { name: 'Berlin', isCorrect: false }
        ]
    },
    {
        questionText: 'Which one of these characters is not friends with Harry Potter ?',
        answerOptions: [
            { name: 'Ron Weasley', isCorrect: false }, { name: 'Neville Longbottom', isCorrect: false }, { name: 'Draco Malfoy', isCorrect: true }
        ]
    },
    {
        questionText: 'What is the color of Donald Duck’s bowtie ?',
        answerOptions: [
            { name: 'Red', isCorrect: true }, { name: 'Yellow', isCorrect: false }, { name: 'Blue', isCorrect: false }
        ]
    },
    {
        questionText: 'Which planet is the hottest ?',
        answerOptions: [
            { name: 'PVenus', isCorrect: false}, { name: 'Mercury', isCorrect: false }, { name: 'Mars', isCorrect: true }
        ]
    },

]

const ListOfQuestions = () => {
    const classes = useStyles();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        let nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true);
        }
    }


    return (
        <Grid container md={12} className={classes.grid}>
            {
                showScore ? (
                    <Grid container justify='center'>
                        <Typography component="h6" variant="h6" className={classes.typography}>You scored {score} out of {questions.length}</Typography>
                    </Grid>
                ) :
                    <Grid container direction="row" md={12}>
                        <Grid container md={6} justify="center">
                            <Typography component="h6" variant="h6" className={classes.typography}>{questions[currentQuestion].questionText}</Typography>
                        </Grid>
                        <Grid container md={6}>
                            <Card className={classes.root}>
                                <Grid container direction="column">
                                    {
                                        questions[currentQuestion].answerOptions.map((answerOptions) => (
                                            <Button onClick={() => handleClick(answerOptions.isCorrect)}>
                                                {answerOptions.name}
                                            </Button>
                                        ))
                                    }
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
            }
        </Grid>
    )

}


export default ListOfQuestions;