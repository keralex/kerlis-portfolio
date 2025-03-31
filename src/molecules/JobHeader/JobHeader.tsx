import Card from '../Card/Card';

interface JobHeaderProps {
    company: string;
    location: string;
    period: string;
}

export const JobHeader = ({ company, location, period }: JobHeaderProps) => {
    return (
        <Card>
            <h1>{company}</h1>
            <p>{location}</p>
            <p>{period}</p>
        </Card>
    );
};
