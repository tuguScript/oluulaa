import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import { getChildrenToRender } from '../utils/utils';

class Content11 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <OverPack {...props} {...dataSource.OverPack}>
        <QueueAnim
          type="bottom"
          leaveReverse
          key="page"
          delay={[0, 100]}
          {...dataSource.titleWrapper}
        >
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </QueueAnim>
        <TweenOne
          key="button"
          style={{ textAlign: 'center' }}
          {...dataSource.button}
          animation={{ y: 30, opacity: 0, type: 'from', delay: 300 }}
        >
          {/* <Button {...dataSource.button.children.a}>
            {dataSource.button.children.a.children}
          </Button> */}
          <div className="buttons">
            <Button className="button" href="/events">
              Events
          </Button>
            <Button className="button" style={{ marginLeft: '1em' }} href="#mentorship">
              Mentorship
          </Button>
            <Button className="button" style={{ marginLeft: '1em' }} href="/blog">
              How we're run
          </Button>
          </div>
        </TweenOne >
      </OverPack >
    );
  }
}

export default Content11;
