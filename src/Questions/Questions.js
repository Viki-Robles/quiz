import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';



const questions = [
    {
        questionText: 'First Question',
        answerOptions: [
            { name: 'Paris', isCorrect: true }, { name: 'London', isCorrect: false }
        ]
    },
    {
        questionText: 'First Question',
        answerOptions: [
            { name: 'Paris', isCorrect: true }, { name: 'London', isCorrect: false }
        ]
    },
    {
        questionText: 'First Question',
        answerOptions: [
            { name: 'Paris', isCorrect: true }, { name: 'London', isCorrect: false }
        ]
    },
    {
        questionText: 'First Question',
        answerOptions: [
            { name: 'Paris', isCorrect: true }, { name: 'London', isCorrect: false }
        ]
    },

]

const ListOfQuestions = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const[score, setScore] = useState(0);

    const handleClick = (isCorrect) => {
        if(isCorrect === true) {
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
        <Grid container>
            {
                showScore ? (
                    <Grid>
                        <Typography>You scored {score} out of {questions.length}</Typography>
                    </Grid>

                ) :
                    <Grid container direction="row">
                        <Grid container md={6}>
                            <Typography>{questions[currentQuestion].questionText}</Typography>
                        </Grid>
                        <Grid container md={6}>
                            <Grid container direction="column">
                                {
                                    questions[currentQuestion].answerOptions.map((answerOptions) => (
                                        <Button onClick={() => handleClick(answerOptions.isCorrect)}>
                                            {answerOptions.name}
                                        </Button>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
            }
        </Grid>
    )

}


export default ListOfQuestions;