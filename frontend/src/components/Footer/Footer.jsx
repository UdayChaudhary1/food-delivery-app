import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati placeat ipsum voluptatem aperiam minima autem voluptate fuga incidunt alias maiores, totam cumque porro! Vel, porro!</p>
        </div>
        <div className="footer-content-center"></div>
        <div className="footer-content-right"></div>
      </div>
    </div>
  )
}
export default Footer