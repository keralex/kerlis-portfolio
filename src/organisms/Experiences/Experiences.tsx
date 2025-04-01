'use client';

import { Box } from '@chakra-ui/react';
import { ExperienceCard } from './components/ExperienceCard';
import { useState } from 'react';
import background from '../../assets/images/cuadrilla.png';

const experiences = [
    {
        company: 'Metafar',
        position: 'Frontend Developer',
        location: 'Ciudad Autónoma de Buenos Aires, Argentina',
        period: 'Oct. 2024 - Present',
        responsibilities: [
            'Developed high-quality websites using React.js, TypeScript, SASS, and Material UI.',
            'Participated in product decision-making, providing suggestions and solutions',
            'Implemented unit and integration testing to ensure software quality.',
            'Identified and addressed technical debt to improve code maintainability and performance.',
            'Collaborated with backend teams to define data contracts and optimize communication.',
            'Integrated RESTful APIs into a React-based e-commerce platform to fetch product data, manage user carts, and process orders.',
        ],
    },
    {
        company: 'Globant',
        position: 'Web UI Developer',
        location: 'Ciudad Autónoma de Buenos Aires, Argentina',
        period: 'Nov. 2021 - Oct. 2024',
        responsibilities: [
            'Developed web interfaces using React.js, Next.js, TypeScript, SASS, Material UI, Tailwind, and CSS',
            'Maintained and updated versions using Git and Bitbucket.',
            'Implemented automated testing to ensure performance and functionality',
            'Built scalable solutions in micro frontend projects.',
            'Developed and modified APIs using Node.js and Express, implementing documentation with Swagger for better maintainability and scalability.',
            'Worked in micro frontend environments and monorepo repositories, ensuring efficient integration.',
            'Developed a React Native app for an NGO to distribute educational videos, enabling offline access, user authentication, and progress tracking.',
        ],
    },
    {
        company: 'BRANDLIVE',
        position: 'Frontend Developer',
        location: 'Ciudad Autónoma de Buenos Aires, Argentina',
        period: 'Jun. 2020 - May. 2022',
        responsibilities: [
            'Implemented e-commerce websites on VTEX, using React.js, jQuery, and SASS',
            'Integrated UX/UI designs to enhance user experience.',
            'Assisted the marketing team in updating multiple pages in real-time for Cyber Monday and Hot Sale events, helping to increase sales.',
        ],
    },
    {
        company: 'APER',
        position: 'Frontend Developer',
        location: 'Ciudad Autónoma de Buenos Aires, Argentina',
        period: 'Jan. 2020 - Jun. 2020',
        responsibilities: [
            'Developed online stores on Prestashop using Vue.js and SASS.',
            'Created custom modules tailored to client needs.',
            'Implemented new designs in collaboration with UX/UI teams.',
        ],
    },
];

const Experiences = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMoreExperiences = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    };

    const currentExperience = experiences[currentIndex];

    return (
        <Box py={10} style={{ backgroundImage: ` url(${background})` }}>
            <ExperienceCard
                key={currentIndex}
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
