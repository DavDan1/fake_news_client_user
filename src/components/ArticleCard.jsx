import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

const ArticleCard = ({ article, i }) => {
  return (
    <div id='card-container'>
      <Grid columns={3} data-cy={`article-card-${i}`}>
        <Grid.Column>
          <Card>
            <Image/>
            <Card.Header data-cy='title'>{article.title}</Card.Header>
            <Card.Description data-cy='teaser'>
              {article.teaser}
            </Card.Description>
            <Card.Meta extra data-cy='created-at'>
              <p>{article.created_at}</p>
            </Card.Meta>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ArticleCard;
