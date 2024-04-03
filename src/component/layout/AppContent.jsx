import { Content } from 'antd/es/layout/layout'
import { Image,Carousel } from 'antd'
const contentStyle = {
  margin: '0% auto',
  maxWidth: '70%',
  width: '100vw',
  // minHeight: '100vh',
  textAlign: 'center',
}

const imageContent = {
  margin: '100px 0 100px 0',
  height: '50%',
  width: '65%',
  // cursor: 'pointer',
}
// const carouselContentStyle = {
//   marginTop: '20px',
//   height: '100%',
//   color: '#fff',
//   lineHeight: '800px',
//   textAlign: 'center',
//   backgroundImage: `url(${process.env.PUBLIC_URL + '/images/shoppingImg.jpg'})`,
//   backgroundSize: 'cover',
  
//   // backgroundSize: '60%',
//   backgroundRepeat: 'no-repeat'

// };

export default function AppContent() {
  return (
    <Content style={contentStyle}>
      {/* <Carousel autoplay>
    <div>
      <div style={carouselContentStyle}>1</div>
    </div>
    <div>
      <div style={carouselContentStyle}>2</div>
    </div>
    <div>
      <div style={carouselContentStyle}>3</div>
    </div>
    <div>
      <div style={carouselContentStyle}>4</div>
    </div>
  </Carousel> */}
      <Image
        style={imageContent}
        preview={false}
        src={process.env.PUBLIC_URL + '/images/shoppingImg.jpg'}
      />
    </Content>
  )
}
