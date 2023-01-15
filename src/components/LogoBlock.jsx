import weyLogo from '../assets/wey-logo.png';
import useWindowDimensions from '../hooks/useWindowsDimensions';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import '../App.css';

export const LogoBlock = ({ setLogoBlockHeight, logoRef }) => {
    const { width, height } = useWindowDimensions();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingLeft: width * 0.02,
                paddingRight: width * 0.03,
                alignItems: 'center',
                position: 'sticky',
                top: '0',
            }}
            id='block-1'
            ref={logoRef}
        >
            <img src={weyLogo} style={{ height: height * 0.1 }} alt='logo' />
            <div
                style={{
                    marginLeft: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: width > height ? width * 0.012 : height * 0.012,
                }}
            >
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                    <div
                        style={{
                            marginLeft: width * 0.02,
                            borderBottom:
                                useLocation()?.pathname == '/'
                                    ? '1px solid #e85d75'
                                    : null,
                        }}
                        className='LogoBlock'
                    >
                        work
                    </div>
                </Link>
                <Link
                    to='/about'
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <div
                        style={{
                            marginLeft: width * 0.02,
                            borderBottom:
                                useLocation()?.pathname == '/about'
                                    ? '1px solid #e85d75'
                                    : null,
                        }}
                        className='LogoBlock'
                    >
                        about
                    </div>
                </Link>
            </div>
        </div>
    );
};
