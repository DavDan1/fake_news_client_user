import React from 'react';
import { Label, Grid } from 'semantic-ui-react';

const CategoryButtons = () => {
  return (
    <div id='category-container'>
      <Grid centered columns='equal'>
        <Grid.Row data-cy='category-container'>
          <Grid.Column>
            <Label className='label' as='a' color='grey' tag>
              Kennedy
            </Label>
          </Grid.Column>
          <Grid.Column>
            <Label className='label' as='a' color='red' tag>
              Moon Landing
            </Label>
          </Grid.Column>
          <Grid.Column>
            <Label className='label' as='a' color='teal' tag>
              Illuminati
            </Label>
          </Grid.Column>
          <Grid.Column>
            <Label className='label' as='a' color='orange' tag>
              Flat Earth
            </Label>
          </Grid.Column>
          <Grid.Column>
            <Label className='label' as='a' color='pink' tag>
              Weather
            </Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default CategoryButtons;
