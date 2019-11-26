import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://media.licdn.com/dms/image/C4D03AQFdU_Pi7FHLAA/profile-displayphoto-shrink_100_100/0?e=1580342400&v=beta&t=HU7SySs4ZlFwMEPplbMMCcKU5hM61JSWYxHO_1MWHRI" alt="Avatar" />
      Pedro Bazzo
    </User>
  </Container>
);

export default Header;
