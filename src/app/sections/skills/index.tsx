import {Container, Row, Col} from 'reactstrap';
import {motion} from 'framer-motion';
import InfiniteCards from '@/app/components/skill-deck';
import skills from '@/app/assets/content/skills';

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <Container>
        <Row>
          <Col xs={12} className='px-0'>
            <motion.div
              className='skills__intro main-card d-flex flex-column'
              initial={{scale: 0.9}}
              whileInView={{scale: 1}}
              transition={{delay: 0.2, duration: 0.2}}
              viewport={{once: true}}
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h3 className='main-card__title'>What I've Mastered...</h3>
              <p className='main-card__big-title my-auto'>
                AND <br />
                ALWAYS <br />
                IMPROVING
              </p>
            </motion.div>
          </Col>
        </Row>
        <Row className='position-relative skills__list'>
          <InfiniteCards mainCards={skills} />
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
