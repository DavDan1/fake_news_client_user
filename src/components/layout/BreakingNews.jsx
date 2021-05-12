import React from 'react';
import { Image, Segment } from 'semantic-ui-react';

const BreakingNews = ({firstArticle}) => {

  return (
    <div>
      <Segment data-cy='breaking-news'  placeholder>
      {/* <p>{firstArticle.title}</p>
        <p>{firstArticle.teaser}</p>
        <p>{firstArticle.date}</p> */}
        <Image 
          src='https://images.unsplash.com/photo-1487758608033-7780b34680ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3589&q=80'
          size='large'
          centered
        />
      </Segment>
    </div>
  );
};

export default BreakingNews;
