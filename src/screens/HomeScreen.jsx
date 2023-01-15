import header from '../assets/header.png';
import ReactDOM from 'react-dom/client';
import weyLogo from '../assets/wey-logo.png';
import useWindowDimensions from '../hooks/useWindowsDimensions';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LogoBlock } from '../components/LogoBlock';
import nokOutBanner from '../assets/nok-out-banner.png';
import { Banner } from '../components/BannerComponent';
import realEstateBanner from '../assets/real-estate-banner.png';
import landingPageBanner from '../assets/landing-page-banner.png';
import wBankBanner from '../assets/w-bank-banner.png';
import lagosBlueBanner from '../assets/lagos-blue-banner.png';
import '../App.css';
import { useEffect, useRef } from 'react';

export const HomeScreen = () => {
    const { width, height } = useWindowDimensions();

    const [logoBlockHeight, setLogoBlockHeight] = useState(0);

    const logoBlockHeightRef = useRef(0);

    useEffect(() => {
        setLogoBlockHeight(logoBlockHeightRef.current?.clientHeight);
    }, []);

    return (
        <div id='body'>
            <LogoBlock logoRef={logoBlockHeightRef} />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#67597A',
                        padding: height * 0.03,
                        justifyItems: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        width: width,
                        position: 'sticky',
                        top: logoBlockHeight,
                    }}
                    id='block-2'
                >
                    {console.log(logoBlockHeightRef.current?.clientHeight)}
                    <div
                        style={{
                            fontWeight: 'bold',
                            fontSize:
                                width > height ? width * 0.035 : height * 0.035,
                            color: 'white',
                            paddingBottom: 10, //for some reason, there is magically padding at the top of this div, so the padding bottom is to make sure it matches the magical padding
                        }}
                        id='block-2-text'
                    >
                        Hi, I'm Weyinmi Ugbotor
                        <div
                            style={{
                                fontWeight: '300',
                                fontSize:
                                    width > height
                                        ? width * 0.012
                                        : height * 0.012,
                                color: 'white',
                                marginTop: height * 0.01,
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            id='block-2-sub-text'
                        >
                            <div>
                                A UX designer and Product Designer Passionate
                                about
                            </div>
                            <div>
                                creating a simple yet innovative experience for
                                users
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        paddingLeft: width * 0.1,
                        paddingRight: width * 0.1,
                        paddingTop: height * 0.07,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                    id='block-3'
                >
                    <Banner
                        image={lagosBlueBanner}
                        link={
                            'https://www.behance.net/gallery/160719335/Ticket-Booking-App-For-Lagos-Blue-Line-Project'
                        }
                    />
                    <div style={{ padding: height * 0.03 }} />
                    <Banner
                        image={nokOutBanner}
                        link={'https://uxfol.io/p/aa99b90b/03cc7988'}
                    />
                    <div style={{ padding: height * 0.03 }} />
                    <Banner
                        image={wBankBanner}
                        link={'http://uxfol.io/p/fde0a001/03dd4f27'}
                    />
                    <div style={{ padding: height * 0.03 }} />
                    <Banner
                        image={realEstateBanner}
                        link={
                            'https://www.behance.net/gallery/157942843/Real-Estate'
                        }
                    />
                    <div style={{ padding: height * 0.03 }} />
                    <Banner image={landingPageBanner} link={'/banner/bridge'} />
                    <div style={{ padding: height * 0.03 }} />
                </div>
            </div>
        </div>
    );
};
