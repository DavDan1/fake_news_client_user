import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

const ArticleCard = ({ article, i }) => {
  return (
    <div data-cy={`article-card-${i}`}>
      <Grid.Column>
        <Card>
          <Image src='https://images.unsplash.com/photo-1487758608033-7780b34680ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3589&q=80' />
          <Card.Header data-cy='title'>{article.title}</Card.Header>
          <Card.Description data-cy='teaser'>{article.teaser}</Card.Description>
          <Card.Meta extra data-cy='created-at'>
            <p>{article.created_at}</p>
          </Card.Meta>
        </Card>
      </Grid.Column>
    </div>
  );
};

export default ArticleCard;
