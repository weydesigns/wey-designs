import { useState, useRef, useEffect } from 'react';
import useWindowDimensions from '../hooks/useWindowsDimensions';
import { LogoBlock } from '../components/LogoBlock';
import Weyinmi from '../assets/weyinmi.jpeg';
import { CiMail } from 'react-icons/ci';
import { AiOutlineLinkedin } from 'react-icons/ai';
import '../App.css';

const SocialsBlock = () => {
    const { width, height } = useWindowDimensions();
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
                className='socials'
                onClick={(e) => {
                    window.location =
                        'mailto:weyinmiug@gmail.com?subject=Do you have a product idea, want to discuss a project, or need a designer? Drop me an email!';
                    e.preventDefault();
                }}
                style={{ marginRight: width * 0.02 }}
            >
                <CiMail
                    style={{
                        width: width * 0.05,
                        height: height * 0.05,
                    }}
                />
            </div>
            <div
                className='socials'
                onClick={() => {
                    window.open(
                        'https://www.linkedin.com/in/weyinmi-ugbotor-249670238/',
                        '_blank'
                    );
                }}
                style={{ marginRight: width * 0.02 }}
            >
                <AiOutlineLinkedin
                    style={{
                        width: width * 0.05,
                        height: height * 0.05,
                    }}
                />
            </div>
        </div>
    );
};

export const AboutScreen = () => {
    const { width, height } = useWindowDimensions();

    const [socialsPosition, setSocialsPosition] = useState(null);

    const [photoHeight, setPhotoHeight] = useState(0);

    const [textBoxHeight, setTextBoxHeight] = useState(0);

    const [renderSocialsUnderPicture, setRenderSocialsUnderPicture] =
        useState(false);

    const weyinmiPhotoRef = useRef(0);
    const textBoxRef = useRef(0);

    const decideIfRenderSocialsUnderPicture = () => {
        if (
            textBoxRef.current?.clientHeight >
                weyinmiPhotoRef.current?.clientHeight ||
            textBoxRef.current?.clientHeight >
                weyinmiPhotoRef.current?.clientHeight - 20
        ) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        console.log('offSetTop', weyinmiPhotoRef.current?.offsetTop);
        console.log(
            'height',
            weyinmiPhotoRef.current?.clientHeight,
            textBoxHeight.current?.clientHeight
        );
        setSocialsPosition(
            weyinmiPhotoRef.current?.offsetTop +
                weyinmiPhotoRef.current?.clientHeight -
                height * 0.04
        );

        setRenderSocialsUnderPicture(decideIfRenderSocialsUnderPicture());
    }, []);

    return (
        <div className='aboutBody' style={{ width: width, height: height }}>
            <LogoBlock />
            <div
                style={{
                    paddingRight: width * 0.03,
                    paddingLeft: width * 0.03,
                    paddingTop: height * 0.03,
                    paddingBottom: height * 0.03,
                    display: 'flex',
                    flexDirection: 'row',
                    height: width * 0.4,
                }}
            >
                <div>
                    <img
                        src={Weyinmi}
                        alt='weyinmi'
                        style={{ width: width * 0.3, height: width * 0.4 }}
                        ref={weyinmiPhotoRef}
                    />
                    {renderSocialsUnderPicture ? <SocialsBlock /> : null}
                </div>
                <div
                    style={{
                        marginLeft: width * 0.02,
                    }}
                >
                    <div ref={textBoxRef}>
                        <div
                            style={{ fontWeight: 'bold' }}
                            className='text title'
                        >
                            Hello, I'm Weyinmi
                        </div>
                        <div className='point5RemPaddingSpacer'></div>
                        <div className='text'>
                            I'm a self-taught designer crafting simple and
                            effective solutions for complex systems.
                            <div className='point5RemPaddingSpacer'></div>
                            <div>
                                Currently, I'm working as a freelancer, helping
                                different product teams to build enjoyable user
                                experiences. I enjoy designing user-centric,
                                delightful, and human-centered experiences.
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            top: socialsPosition,
                        }}
                    >
                        {renderSocialsUnderPicture ? null : <SocialsBlock />}
                    </div>
                </div>
            </div>
        </div>
    );
};
