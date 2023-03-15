import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Container, Row, Col} from 'reactstrap';

import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <section className='header'>
      <Container className='header__container h-100'>
        <Row className='h-100 align-items-center'>
          <Col className='text-center'>
            <h1 className='header__title'>Juan Camilo Marín Navia</h1>
            <h1 className='header__description'>
              <FontAwesomeIcon
                icon={faChevronLeft}
                color='white'
                className='header__description-arrow'
              />
              Full Stack JS Developer
              <FontAwesomeIcon
                icon={faChevronRight}
                color='white'
                className='header__description-arrow'
              />
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
