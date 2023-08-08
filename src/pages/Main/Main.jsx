import api from '../../api/axios';
import { KakaoMap } from 'components/KakaoMap';
import { Banner, BannerTypo, BannerTypoWrapper, Root } from './styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();

  api.get('/post').then((res) => {
    console.log(res);
  });
  api.get('/comment').then((res) => {
    console.log(res);
  });

  return (
    <Root>
      <Banner>
        <BannerTypoWrapper>
          <BannerTypo>배너 텍스트</BannerTypo>
        </BannerTypoWrapper>
      </Banner>
      <KakaoMap />
    </Root>
  );
};
