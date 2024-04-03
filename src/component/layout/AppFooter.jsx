import { Footer } from 'antd/es/layout/layout'
// import {
//   YoutubeOutlined,
//   InstagramOutlined,
//   StarTwoTone,
// } from '@ant-design/icons'

const footerStyle = {
  width: '100%',
  textAlign: 'center',
  // color: '#fff',
  backgroundColor: 'white',
}
// const footerLogo = {
//   width: '50px',
//   height: '50px',
// }

export default function AppFooter() {
  return (
    <Footer style={footerStyle}>
      <div>by creator</div>
    </Footer>
  )
}
