import useWindowDimensions from '../hooks/useWindowsDimensions';

import bridgeBannerPage from '../assets/bridgeBannerPage.png';

export const BridgeBannerScreen = () => {
    const { width, height } = useWindowDimensions();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                src={bridgeBannerPage}
                alt='bridge-banner-page'
                style={{
                    width: width > height ? width * 0.3 : width,
                    height: width > height ? width * 0.8 : width * 3,
                }}
            ></img>
        </div>
    );
};
