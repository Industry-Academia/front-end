import { KakaoMap } from 'components/KakaoMap';
import { Banner, BannerImg, BannerTypo, Root } from './styled';

export const Main = () => {
  return (
    <Root>
      <Banner>
        <BannerImg alt="banner_img" />
        <BannerTypo>배너 텍스트</BannerTypo>
      </Banner>
      <KakaoMap />
      {/* 테스트 주석 */}
    </Root>
  );
};
