import React from 'react';
import Header from '../../components/header/header';

function NotFoundScreen() {
  return (
    <div className="page">
      <Header withNav={false}/>
      <main className="page__main" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', fontSize: '50px'}}>
        404 Not Found
      </main>
    </div>
  );
}

export default NotFoundScreen;
