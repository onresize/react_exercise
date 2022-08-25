import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Radio } from 'antd';
//安装动画： yarn add react-transition-group
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.module.css'
import './comm.css'

export default function FullPageJsCom() {
  const [pic, setPic] = useState('https://www.apple.com.cn/iphone-13/images/key-features/hero/hero_starlight__tjp0q09a16i6_large.jpg')

  const onChange = (e) => {
    console.log('获取当前点击元素：', e.target.value)
    setPic(() => e.target.value)
  };

  return (
    <>
      {/*  基于FullpageJs封装的全屏滚动使用（npm install @fullpage/react-fullpage） */}
      <ReactFullpage
        navigation={true}
        sectionsColor={['#F5F5F7', '#2D2E39', '#12203B', 'transparent', '#2D2E39', '#FEC401']}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="containerBox">
                  <img src={pic} alt="原" style={{ width: '50%', minWidth: '1000px', height: '20%', }} className="picImg" />
                </div>
                <div className="selectBox">
                  <Radio.Group onChange={onChange} className="selectAll">
                    <Radio value={'https://www.apple.com.cn/iphone-13/images/key-features/hero/hero_starlight__tjp0q09a16i6_large.jpg'} className="selectRadio1 radio"></Radio>
                    <Radio value={'https://www.apple.com.cn/iphone-13/images/key-features/hero/hero_blue__bn5i4jxh51si_large.jpg'} className="selectRadio2 radio"></Radio>
                    <Radio value={'https://www.apple.com.cn/iphone-13/images/key-features/hero/hero_pink__ghy09iqzzca6_large.jpg'} className="selectRadio3 radio"></Radio>
                    <Radio value={'https://www.apple.com.cn/iphone-13/images/key-features/hero/hero_green__rz0u5fdewmqq_large.jpg'} className="selectRadio4 radio"></Radio>
                    <Radio value={'https://www.apple.com.cn/iphone-13/images/key-features/hero/hero_red__eogpx7m2jwk2_large.jpg'} className="selectRadio5 radio"></Radio>
                  </Radio.Group>
                </div>
              </div>
              <div className="section box">
                <div className="flexBox">
                  <img src="https://www.apple.com.cn/iphone-13/images/key-features/features-modal/battery_expanded__cketew20n3xy_large.jpg" alt="原" style={{ width: '300px', height: '50%' }} />
                  <img src="https://developer.apple.com/home/images/tile-watchos-9/watchos-9-large.png" alt="原" style={{ width: '300px', height: '40%' }} />
                  <img src="https://developer.apple.com/home/images/tile-ipados-16/ipados-16-large.png" alt="原" style={{ width: '760px', height: '50%' }} />
                </div>
              </div>
              <div className="section">
                <img src="https://www.apple.com.cn/v/iphone-13/h/images/key-features/features-modal/a15_expanded__emu22jraq9ea_large.jpg" alt="原" style={{ height: '60%' }} />
              </div>
              <div className="section" style={{ overflow: 'hidden' }}>
                <img src="https://www.apple.com.cn/v/iphone-13/h/images/key-features/features-modal/ip68_expanded__ebui4q5cys02_large.jpg" alt="原" style={{ height: '100%', width: '100%', boxSizing: 'border-box' }} />
              </div>
              <div className="section" style={{ overflow: 'hidden' }}>
                {/* controls controlsList='nodownload' 去除控制条下载 */}
                <h3 style={{ position: 'absolute', zIndex: 5, color: '#fff', left: 'calc(50% - 74px)', top: 'calc(50% - 12px)', zoom: 3, fontFamily: '楷体' }}>防溅抗水，治水逆。</h3>
                <video style={{ position: 'absolute', zIndex: 2, width: '100%', height: '100%', boxSizing: 'border-box', objectFit: 'fill' }} autoplay="autoplay" loop muted="false" src="https://www.apple.com.cn/105/media/us/iphone-12/key-features/2021/c786182d-da7b-4296-a89c-389bba418d1d/anim/water/small.mp4"></video>
              </div>
              <div className="section" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <img src="https://alvarotrigo.com/fullPage/imgs/touch-responsive.jpg" alt="原" style={{ width: '300px', height: '300px' }} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
