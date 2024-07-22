import React from 'react';
import '../sass/components/_Tag.scss';

function Tag({ tagText }) {
  return (
    <div className='tag'>
      {tagText}
    </div>
  );
}

export default Tag;