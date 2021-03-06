/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import Divider from '../elements/divider';
import Inner from '../elements/inner';
import Content from '../elements/content';
import SVG from '../components/svg';
import { UpDown, UpDownWide } from '@/styles/animations';

const About = ({ offset }: { offset: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG
          icon="box"
          hiddenMobile
          width={6}
          color="icon_blue"
          left="50%"
          top="75%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke
          color="icon_darkest"
          left="25%"
          top="5%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={24}
          color="icon_orange"
          left="80%"
          top="80%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_purple"
          left="5%"
          top="80%"
        />
        <SVG
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="95%"
          top="50%"
        />
        <SVG
          icon="circle"
          hiddenMobile
          width={6}
          color="icon_brightest"
          left="85%"
          top="15%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <SVG icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <SVG
        icon="hexa"
        width={8}
        stroke
        color="icon_darkest"
        left="80%"
        top="70%"
      />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>
        <Styled.h2>About</Styled.h2>
        <Styled.p>
          你好，我叫易进春，家乡陕西，现在在上海从事前端开发相关工作。
        </Styled.p>
        <Styled.p>
          平时喜欢游泳、打台球、打羽毛球、玩VR、画画、坐过山车，有兴趣相投的朋友加个联系方式有空一起玩呀~
        </Styled.p>
        <Styled.blockquote>娱乐至上，怎么开心怎么来。</Styled.blockquote>
      </Inner>
    </Content>
  </div>
);

export default About;
