import React, { Component } from 'react';
import appbuilding from './appbuilding.jpg'
import pic12 from './pic12.jpg'
import toptop from './toptop.jpg'

export const caption = ['What is Lorem Ipsum?','Why do we use it?','Where does it come from?']
export const imgUrls = [appbuilding,pic12,toptop]

export class Carousel extends React.Component {
  constructor (props) {
    super(props);        this.state = {
      currentImageIndex: 0,
      currentWordIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

// previousslide
previousSlide () {
  const lastIndex = imgUrls.length - 1;
  const { currentImageIndex } = this.state;
  const shouldResetIndex = currentImageIndex === 0;
  const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
  this.setState({
    currentImageIndex: index
  });
  const lastIndexe = imgUrls.length - 1;
  const { currentWordIndex } = this.state;
  const shouldResetIndexe = currentWordIndex === 0;
  const indexWord =  shouldResetIndex ? lastIndex : currentWordIndex - 1;
  this.setState({currentWordIndex: indexWord
  });
}

// nextslide
nextSlide () {
  const lastIndex = imgUrls.length - 1;
  const { currentImageIndex } = this.state;
  const shouldResetIndex = currentImageIndex === lastIndex;
  const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
  this.setState({
    currentImageIndex: index
  });
  const lastIndexe = imgUrls.length - 1;
  const { currentWordIndex } = this.state;
  const shouldResetIndexe = currentWordIndex === lastIndex;
  const indexWord =  shouldResetIndex ? 0 : currentWordIndex + 1;
  this.setState({currentWordIndex: indexWord
  });
}

render () {
  return (
    <div className="carousel">
      <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
      <img src={imgUrls[this.state.currentImageIndex] } style={{width:100 +'%',height: 650 +'px'}}/>
      <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
      <h1> {caption[this.state.currentWordIndex] }</h1>
      <div>
        <h1 className = "center2">My Favourite Rapper "Eminem"</h1>

 {/* cards */}
 <div className="container">
   <div className="row">
     <div className = "col-md-4 hold card">
       <img className = "resize" src="https://pixel.nymag.com/imgs/daily/vulture/2017/12/15/16-eminem-feature.w400.h300.1x.jpg"/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <p><button className="btn btn-primary">like</button></p>
       <p>
         <button className="btn btn-danger"> comment</button>
       </p>
     </div>

     <div className = "col-md-4 hold card">
       <img className = "resize" src="https://pixel.nymag.com/imgs/daily/vulture/2017/12/15/16-eminem-feature.w400.h300.1x.jpg"/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <p><button className="btn btn-primary">like</button></p>
       <p><button className="btn btn-danger"> comment</button></p>
     </div>

     <div className = "col-md-4 hold card">
       <img className = "resize" src="https://pixel.nymag.com/imgs/daily/vulture/2017/12/15/16-eminem-feature.w400.h300.1x.jpg"/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <p><button className="btn btn-primary">like</button></p>
       <p><button className="btn btn-danger"> comment</button></p>
     </div>

     <div className = "col-md-4 hold card">
       <img className = "resize" src="https://pixel.nymag.com/imgs/daily/vulture/2017/12/15/16-eminem-feature.w400.h300.1x.jpg"/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <p><button className="btn btn-primary">like</button></p>
       <p><button className="btn btn-danger"> comment</button></p>
     </div>

     <div className = "col-md-4 hold card">
       <img className = "resize" src="https://pixel.nymag.com/imgs/daily/vulture/2017/12/15/16-eminem-feature.w400.h300.1x.jpg"/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <p><button className="btn btn-primary">like</button></p>
       <p><button className="btn btn-danger"> comment</button></p>
     </div>

     <div className = "col-md-4 hold card">
       <img className = "resize" src="https://pixel.nymag.com/imgs/daily/vulture/2017/12/15/16-eminem-feature.w400.h300.1x.jpg"/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <p><button className="btn btn-primary">like</button></p>
       <p><button className="btn btn-danger"> comment</button></p>
     </div>

     <div className = "col-md-4 hold card">
       <img className = "resize" src="https://pixel.nymag.com/imgs/daily/vulture/2017/12/15/16-eminem-feature.w400.h300.1x.jpg"/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <p><button className="btn btn-primary">like</button></p>
       <p><button className="btn btn-danger"> comment</button></p>
     </div>

     <div className = "col-md-4 hold card">
       <img className = "resize" src="https://pixel.nymag.com/imgs/daily/vulture/2017/12/15/16-eminem-feature.w400.h300.1x.jpg"/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <p><button  className="btn btn-primary">like</button></p>
       <p><button className="btn btn-danger"> comment</button></p>
     </div>

     <div className = "col-md-4 hold card">
       <img className = "resize" src="https://pixel.nymag.com/imgs/daily/vulture/2017/12/15/16-eminem-feature.w400.h300.1x.jpg"/>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <p><button  className="btn btn-primary">like</button></p>
       <p><button className="btn btn-danger"> comment</button></p>
     </div>
   </div>
 </div>

 <footer id="choose"></footer>
</div>
</div>
);
}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
);

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return(
    <div className="image-slide" style={styles}></div>
  );
}
