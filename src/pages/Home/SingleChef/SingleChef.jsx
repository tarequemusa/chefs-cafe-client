import React from 'react';
import {Container, Image} from 'react-bootstrap';
import {useLoaderData, useParams} from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const SingleChef = () => {
    const {id} = useParams();
    const chefsAll = useLoaderData();
    return (
        <>
            <Image variant="top" className='w-100 mb-3' src="https://i.ibb.co/nfmYgRx/Food-Poster.png" />
            <Container>
                <div>
                    {
                        chefsAll.map(recipe => <RecipeCard
                            key={recipe.recipe_id}
                            recipe={recipe}
                        ></RecipeCard>)
                    }
                </div>
            </Container>
        </>

    );
};

export default SingleChef;