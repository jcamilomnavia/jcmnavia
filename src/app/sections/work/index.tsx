import JobCard from '@/app/components/job-card';
import {Container, Row, Col} from 'reactstrap';
import {motion} from 'framer-motion';
import jobs from '@/app/assets/content/jobs';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDownLong} from '@fortawesome/free-solid-svg-icons';
import {faHardDrive} from '@fortawesome/free-regular-svg-icons';

const Work = () => {
  return (
    <section id='work' className='work'>
      <Container>
        <Row>
          <Col xs={12} className='px-0'>
            <motion.div
              className='work__intro main-card d-flex flex-column'
              initial={{scale: 0.9}}
              whileInView={{scale: 1}}
              transition={{delay: 0.2, duration: 0.2}}
              viewport={{once: true}}
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h3 className='main-card__title'>I don't just work...</h3>
              <p className='main-card__big-title my-auto'>
                I<br />
                MAKE <br />
                THINGS <br />
                HAPPEN
              </p>
              <a
                href='/files/Juan Camilo MARIN NAVIA CV.pdf'
                className='work__download text-end'
                download
              >
                <span className='work__download-icons'>
                  <FontAwesomeIcon icon={faArrowDownLong} bounce />
                  <FontAwesomeIcon icon={faHardDrive} />
                </span>
                Download CV
              </a>
            </motion.div>
          </Col>
        </Row>

        {jobs.map((job, index) => (
          <JobCard key={`job-${index}`} {...job} />
        ))}
      </Container>
    </section>
  );
};

export default Work;
