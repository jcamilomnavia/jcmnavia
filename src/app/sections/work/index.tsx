import JobCard from '@/app/components/job-card';
import {Container, Row, Col} from 'reactstrap';
import {motion} from 'framer-motion';
import jobs from '@/app/assets/content/jobs';

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
