import React from 'react';
import SchemeItem from './scheme-item'; 
import '../styles/components/scheme-list.css';

export default function SchemeList( { title = '', src = '' } : 
    { title?: string; src?: string })
{
  if (src == 'saved') {
    // TODO: Fetch saved schemes
  } else if (src.includes('user')) {
    // TODO: fetch schemes from a user
  } else if (src.includes('tag')) {
    // TODO: fetch schemes from a tag
  } else {
    // TODO: Generate random schemes
  }

  return (
    <section className="scheme-list py-8 px-4">
      <div className='wrapper max-w-7xl py-4'>
          <h2 className='bold text-2xl mb-8'>{title}</h2>

          <div className='inner flex flex-wrap justify-center gap-4'>
            <SchemeItem />
            <SchemeItem />
            <SchemeItem />
            <SchemeItem />
            <SchemeItem />
            <SchemeItem />
            <SchemeItem />
            <SchemeItem />
            <SchemeItem />
            <SchemeItem />
            <SchemeItem />
            <SchemeItem />
          </div>
      </div>
    </section>
  );
};


