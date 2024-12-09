'use client';

import { Container, Row, Col, Image } from 'react-bootstrap';
import { Student } from '@prisma/client';
import SkillItem from '@/components/SkillItem';

const StudentInfo = ({ name, skills, location, professionalPage, profileImage }: Student) => (
  <Container className="justify-content-center">

    <Row>
      <Image src={profileImage} alt={name} roundedCircle className="d-block mx-auto px-2" style={{ width: '150px' }} />
      <h1 className="text-center">{name}</h1>
    </Row>
    <p className="text-center">
      <a href={professionalPage}>Professional Page</a>
    </p>

    <h3 className="mt-3">
      Preferred Location:
      <span style={{ marginLeft: '0.5rem' }}>{location}</span>
    </h3>

    <h3 className="mt-3">Skills</h3>

    <Row xs={1} md={2} lg={4} className="g-4">
      {skills.map((skill: string) => (
        <Col>
          <SkillItem skill={skill} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default StudentInfo;
