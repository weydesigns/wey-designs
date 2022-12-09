import useWindowDimensions from '../hooks/useWindowsDimensions';
import '../App.css';
import { Link } from 'react-router-dom';

export const Banner = ({ image, link }) => {
    const { width, height } = useWindowDimensions();

    return (
        <a href={link} target='blank'>
            <img
                alt='banner'
                src={image}
                width={width > height ? width * 0.6 : height * 0.5}
                height={width > height ? width * 0.6 * 0.5 : height * 0.5 * 0.5}
                style={{
                    boxShadow:
                        'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                }}
                id='banner-picture'
            />
        </a>
    );
};
