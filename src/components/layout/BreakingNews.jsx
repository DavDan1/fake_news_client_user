import React from 'react';

const BreakingNews = ({ firstArticle }) => {
  return (
    <div>
      <div className='breaking-news' data-cy='breaking-news' placeholder>
        <img
          className='braking-img'
          src='https://images.unsplash.com/photo-1487758608033-7780b34680ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3589&q=80'
        />
        <div className='breaking-content'></div>
      </div>
    </div>
  );
};

export default BreakingNews;
