import React from 'react';
import Header from '../../components/Header';
// Profile을 컴포넌트화하여 재사용성이 용이함.
import Profile from '../../components/Profile';

const AppProfile = () => {
  return (
    <React.Fragment>
      <Header />
      <Profile image='../images/profile1.png' isNew={true} name='yeseul'/>
      <Profile image='../images/ebichu.png' name='Ebichu'/>
      <Profile image='../images/profile3.jpg' />
    </React.Fragment>
  )
}

export default AppProfile