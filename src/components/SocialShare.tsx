import React from 'react';
import {
  socialMediaGroup,
  socialShareIcon
} from './styles/social-share.module.less';
import Twitter from '../assets/svg/twitter.svg';
import Telegram from '../assets/svg/telegram.svg';
import Medium from '../assets/svg/medium.svg';
import Discord from '../assets/svg/discord.svg';
import Gitbook from '../assets/svg/gitbook.svg';

const SocialShare = () => {
  const redirectTo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className={socialMediaGroup}>
      <img
        onClick={() => redirectTo('https://twitter.com/LovelaceWorld')}
        src={Twitter}
        className={socialShareIcon}
      />
      <img
        onClick={() => redirectTo('https://t.me/lovelaceofficial')}
        src={Telegram}
        className={socialShareIcon}
      />
      <img
        onClick={() => redirectTo('https://lovelaceworld.medium.com/')}
        src={Medium}
        className={socialShareIcon}
      />
      <img
        onClick={() => redirectTo('https://discord.com/invite/6w49dSAd5M')}
        src={Discord}
        className={socialShareIcon}
      />
      <img
        onClick={() => redirectTo('http://docs.lovelace.world/')}
        src={Gitbook}
        className={socialShareIcon}
      />
    </div>
  );
};

export default SocialShare as any;
