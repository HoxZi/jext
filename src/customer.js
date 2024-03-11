import './css/Customer.css'
import myimg1 from './img/img-1.jpg'
import myimg2 from './img/img-2.jpg'
import myimg3 from './img/img-3.jpg'
import myimg4 from './img/img-4.jpg'
import myimg5 from './img/img-5.jpg'
import myimg6 from './img/img-6.jpg'
import myimg7 from './img/img-7.jpg'
import myimg8 from './img/img-8.jpg'
import myimg9 from './img/img-9.jpg'
import myimg10 from './img/img-10.jpg'

function Customer() {
  return (
    <div className="Customer">
        <div className="header">
            <div className='logo'>
                Jin Cafe
            </div>
            <div className='box-price'>
                <i class='bx bx-money-withdraw'></i> 
                <p> : 500</p>
            </div>
        </div>

        <div className='name-type'>
            <p>กาแฟ</p>
        </div>
        <div className='con1'>
            <div className='con-product'>
                <div className='slider-wrapper'>
                    <div className='images-list'>
                        <a href='/App'><img src={myimg1} alt="img1" className='image-item'></img></a>
                        <img src={myimg2} alt="img2" className='image-item'></img>
                        <img src={myimg3} alt="img3" className='image-item'></img>
                        <img src={myimg4} alt="img4" className='image-item'></img>
                        <img src={myimg5} alt="img5" className='image-item'></img>
                        <img src={myimg6} alt="img6" className='image-item'></img>
                        <img src={myimg7} alt="img7" className='image-item'></img>
                        <img src={myimg8} alt="img8" className='image-item'></img>
                        <img src={myimg9} alt="img9" className='image-item'></img>
                        <img src={myimg10} alt="img10" className='image-item'></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Customer;
