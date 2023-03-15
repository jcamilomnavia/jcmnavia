import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Col, Container, Row} from 'reactstrap';

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faGitlab,
  faGoodreads,
  faInstagram,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='footer__social'>
          <Col
            xs={12}
            md={6}
            className='footer__social-icons text-center text-md-end px-0'
          >
            <a href='https://github.com/jcamilomnavia'>
              <FontAwesomeIcon icon={faGithub} color='white' />
            </a>
            <a href='https://www.linkedin.com/in/juan-camilo-marin-navia/'>
              <FontAwesomeIcon icon={faLinkedin} color='white' />
            </a>
            <a href='https://gitlab.com/jcmnavia'>
              <FontAwesomeIcon icon={faGitlab} color='white' />
            </a>
          </Col>
          <Col
            xs={12}
            md={6}
            className='footer__social-icons text-center text-md-start px-0'
          >
            <a href='https://discord.com/users/jcmnavia#0162'>
              <FontAwesomeIcon icon={faDiscord} color='white' />
            </a>
            <a href='https://www.goodreads.com/user/show/137777093-juan-camilo-marin-navia'>
              <FontAwesomeIcon icon={faGoodreads} color='white' />
            </a>
            <a href='https://twitter.com/jcmn99'>
              <FontAwesomeIcon icon={faTwitter} color='white' />
            </a>
            <a href='https://www.instagram.com/jcmnavia'>
              <FontAwesomeIcon icon={faInstagram} color='white' />
            </a>
          </Col>
        </Row>
        <Row className='footer__links justify-content-center'>
          <Col xs={12} md={2} className='text-center mb-3'>
            <a href='mailto:jcmnavia@hotmail.com'>jcmnavia@hotmail.com</a>
          </Col>
          <Col xs={12} md={2} className='text-center mb-3'>
            <a href='tel:+573003453662'>+57 (300) 345-3662</a>
          </Col>
          <Col xs={12} md={2} className='text-center mb-3'>
            <a href='tel:+17542488834'>+1 (754) 248-8834</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
