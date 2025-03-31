'use client';

import { Box } from '@chakra-ui/react';
import { ExperienceCard } from './components/ExperienceCard';
import { useState } from 'react';
import background from '../../assets/images/cuadrilla.png';

const Experiences = () => {
    const experiences = [
        {
            title: 'Experience',
            company: 'Globant',
            location: 'Globant, Ciudad Autónoma de Buenos Aires, Argentina',
            period: 'Nov. 2021 - Present',
            responsibilities: [
                'Collaborate with a team of more than 5 developers to provide safe and solution for clients.',
                'Help to speed up the development process (React, Next.js, SASS, Material UI) in order to deliver high-quality websites, including landing pages, web forms, among others following the best industry practices.',
            ],
        },
        {
            title: 'Experience',
            company: 'Tech Solutions',
            location: 'Remote',
            period: 'Jan. 2020 - Oct. 2021',
            responsibilities: [
                'Developed responsive web applications using React and TypeScript.',
                'Collaborated with UX/UI designers to implement pixel-perfect interfaces.',
                'Optimized application performance and improved load times by 40%.',
            ],
        },
        {
            title: 'Experience',
            company: 'Digital Innovations',
            location: 'San Francisco, CA',
            period: 'Mar. 2018 - Dec. 2019',
            responsibilities: [
                'Built and maintained front-end components for e-commerce platforms.',
                'Implemented state management solutions using Redux and Context API.',
                'Participated in code reviews and mentored junior developers.',
            ],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMoreExperiences = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    };

    const currentExperience = experiences[currentIndex];

    return (
        <Box py={10} style={{ backgroundImage: ` url(${background})` }}>
            <ExperienceCard
                key={currentIndex}
                title={currentExperience.title}
                company={currentExperience.company}
                location={currentExperience.location}
                period={currentExperience.period}
                responsibilities={currentExperience.responsibilities}
                onMoreClick={handleMoreExperiences}
            />
        </Box>
    );
};

export default Experiences;
