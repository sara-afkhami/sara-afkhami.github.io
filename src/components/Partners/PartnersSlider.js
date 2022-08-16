import React from 'react';
import range from 'lodash/range';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import mohaymen from '../../assets/images/Mohaymen.svg';
import noghteh from '../../assets/images/noghteh.svg';
import pardis from '../../assets/images/pardis.svg';
import techpark from '../../assets/images/techpark.svg'
import yaftar from '../../assets/images/yaftar.svg'

const logos = [mohaymen, noghteh, pardis, techpark, yaftar]
const links = ["https://www.mohaymen.ir/fa", 'https://noghteh-academy.com/', 'https://pardisgene.com/', 'https://techpark.sharif.ir/', '#']
const noOfItems = 5;
const noOfCards = 4;
const autoPlayDelay = 2000;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 100%;
  margin: 0 auto 8% auto;
`;

// const SlideItem = ({key}) =>{
//     return(
//         <img src={logos[ke]}/>
//     )
// }



const carouselItems = range(noOfItems).map(index => (
    <div style={{
        height: '100px',
        // background: '#EEE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
       
        {/* {index} */}
        <a target='_blank' style={{textDecoration: "none"}} href={links[index]}>
        <img src={logos[index]} alt=""/>
        </a>
    </div>
));

export default class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper style={{direction: "ltr"}}>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
        //   rightChevron={<button>{'>'}</button>}
        //   leftChevron={<button>{'<'}</button>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
          infiniteLoop={true}
        />
      </Wrapper>
    );
  }
}
