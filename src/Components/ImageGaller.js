import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';
import '../Styles/main.css';

const imagesData = {
  nature: [
    '/Images/nature1.jpg',
    '/Images/nature2.jpg',
    '/Images/nature3.jpg',
    '/Images/nature4.jpg',
  ],
  city: [
    '/Images/city1.jpg',
    '/Images/city2.jpg',
    '/Images/city3.jpg',
    '/Images/city4.jpg',
  ],
  cars: [
    '/Images/car1.jpg',
    '/Images/car2.jpg',
    '/Images/car3.jpg',
    '/Images/car4.jpg',
  ],
};

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'all',
      activeImages: [],
    };
  }

  componentDidMount() {
    this.setState({
      activeImages: this.getAllImages(),
    });
  }

  getAllImages = () => {
    const allImages = [];
    Object.keys(imagesData).forEach((key) => {
      allImages.push(...imagesData[key]);
    });
    return allImages;
  };

  handleFilterChange = (filter) => {
    if (filter === 'all') {
      this.setState({
        activeFilter: filter,
        activeImages: this.getAllImages(),
      });
    } else {
      this.setState({
        activeFilter: filter,
        activeImages: imagesData[filter],
      });
    }
  };

  render() {
    return (
      <>
        <section id='gallery'>
          <div className='filter flex space-x-4 pt-4 text-bold pb-4 justify-center font-bold'>
            <Button
              className='filter-btn'
              onClick={() => this.handleFilterChange('all')}
            >
              All
            </Button>
            <Button
              className='filter-btn'
              onClick={() => this.handleFilterChange('nature')}
            >
              Nature
            </Button>
            <Button
              className='filter-btn'
              onClick={() => this.handleFilterChange('city')}
            >
              City
            </Button>
            <Button
              className='filter-btn'
              onClick={() => this.handleFilterChange('cars')}
            >
              Cars
            </Button>
          </div>

          <div className='Image-Container flex flex-wrap justify-center'>
            <div className='image-nature flex flex-wrap justify-center space-x-4'>
              {this.state.activeImages.map((image, index) => (
                <Image key={index} src={image} className='h-50 w-60 pb-4 hover:scale-110 transition duration-300 ease-in-out'></Image>
              ))}
            </div>
          </div>
        </section> 
      </>
    );
  }
}
