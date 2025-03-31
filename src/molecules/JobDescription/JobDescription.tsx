import { VStack } from '@chakra-ui/react';
import { BulletPoint } from '../../atoms/BulletPoint';
import Card from '../Card/Card';

interface JobDescriptionProps {
    responsibilities: string[];
}

export const JobDescription = ({ responsibilities }: JobDescriptionProps) => {
    return (
        <Card title="My Responsibilities">
            {responsibilities.map((responsibility, index) => (
                <BulletPoint key={index} text={responsibility} />
            ))}
        </Card>
    );
};
