import React from 'react';
import ReactDOM from 'react-dom';
import CharacterShortContent from './CharacterShortContent'

const sample = {
    player_id : 1 ,
    character_name : 'qwer',
    race : 'asdf' ,
    background : 'asdf',
    alignment : 'asdf',
    gender : 'asdf',
    personality_traits : 'asdf' ,
    ideals : 'asdf' ,
    fears : 'asdf' ,
    notes : 'asdf' 
}

it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
                     <CharacterShortContent
                     character={sample}/>
                , div);
    ReactDOM.unmountComponentAtNode(div);
});