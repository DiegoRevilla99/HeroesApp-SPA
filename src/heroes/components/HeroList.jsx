import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({publisher}) => {

    // const heroes = getHeroesByPublisher(publisher);

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <ul>
        {
            heroes.map((heroe) => 
                <li key={heroe.id}>
                    {heroe.superhero}
                </li>)
        }
    </ul>
  )
}
