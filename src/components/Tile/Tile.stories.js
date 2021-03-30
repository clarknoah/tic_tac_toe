import React from 'react';
import { storiesOf } from '@storybook/react';

import Tile from './Tile';


storiesOf('Tile', module)
    .add('Tile', () =>{
      return <Tile />
    }
)
