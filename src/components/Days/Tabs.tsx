import React from 'react';
import './Day.scss';

interface Props {}

const Tabs = (props: Props) => {
    const tabs = [
        {
          value: '3-х часовой',
        },
      ];
  return (
    <div className='tabs'>
        <div className='tabs_wrapper'>
        {tabs.map(tab => (
          <div className='tab' key={tab.value}>
            {tab.value}
          </div>
        ))}
        </div>
    </div>
  )
}

export default Tabs

