import React from 'react';

const answers = [
    {id: 'A', name: 'Paris'},
    {id: 'B', name: 'London'},
    {id: 'C', name: 'Berlin'}
]

const AnswersList = () => {
    return(
        <Grid container direction="column">
            {
                answers.map(({name, id}) => (
                    <Grid key={id}>
                        {id}. {name}
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default AnswersList;