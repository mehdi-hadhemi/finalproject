import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {readEvents} from '../../actions/EventsActions'
import {connect} from 'react-redux'
 class SponsEvent extends Component {
     constructor(props){
         super(props);
        this.state = {
            index: 0,
            // img1: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F85092687%2F215986123110%2F1%2Foriginal.20191219-135003?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=45d40f9940aa5bed582d8adb8b5b0cc7",
            // img2: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F84802725%2F296691363727%2F1%2Foriginal.20191217-100754?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C97%2C1920%2C960&s=6834125f7515f53c8fbb5050850ea3f6",
            // img3: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F85078311%2F249737826698%2F1%2Foriginal.20191219-102641?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C17%2C1042%2C521&s=8630e4ecbb3f8764dc3d63eabd924494",
            // img4: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F82787817%2F296691363727%2F1%2Foriginal.20191108-093821?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C113%2C1920%2C960&s=14d6906a0085509e9e1ef8a778464668",
            // img5: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F81625269%2F265129187288%2F1%2Foriginal.20191118-155913?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1600%2C800&s=84f94472839245121f8467b577b9060b",
            // img6: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F79666891%2F163034453015%2F1%2Foriginal.20191106-170030?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C15%2C2100%2C1050&s=c57a3d5c608e5b3f2d3cac268f4f0cfb",
            // img7: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F80203311%2F365906342621%2F1%2Foriginal.20191109-232857?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C38%2C1600%2C800&s=0e3e5709afead58bf9a34b25167eb28c",
          
        }
    }  
    componentDidMount(){
      this.props.readEvents()
   
      
   
    }
     handleSelect = (selectedIndex, e) => {
      this.setState({index: selectedIndex})
     }
    render() {
        return (
         
            <div className='sponsimage'>
  
                 <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
                {this.props.eventlist.filter(el => el.sponsored).map(el => <Carousel.Item><img  className='d-block w-100' src={el.img}/></Carousel.Item> )}   
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.state.img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.state.img2}
          alt="Second slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.state.img3}
          alt="Third slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.state.img4}
          alt="Third slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.state.img5}
          alt="Third slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.state.img6}
          alt="Third slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.state.img7}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
   
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
  return{
      eventlist:state.event
  }
}
export default connect(mapStateToProps,{readEvents}) (SponsEvent);