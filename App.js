import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

function App() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'Girls T-shirt', 
		price: 499, 
		image: 
'https://sp.yimg.com/ib/th?id=OPAC.SiCsA8bQ8ilpdg474C474&o=5&pid=21.1&w=174&h=174'
		},
		{ id: 2, 
		name: 'Girls T-shirt', 
		price: 699, 
		image: 
'https://sp.yimg.com/ib/th?id=OPAC.v3eL%2fT4G2PZNHQ474C474&o=5&pid=21.1&w=174&h=174'
		},
		{ id: 3, 
		name: 'Girls T-shirt', 
		price: 799, 
		image: 
'https://sp.yimg.com/ib/th?id=OPAC.Vcjg%2b97lriy%2fjw474C474&o=5&pid=21.1&w=174&h=174'
		},
    { id: 4, 
      name: 'Girls Hoodie', 
      price: 499, 
      image: 
  'https://sp.yimg.com/ib/th?id=OPAC.cWR0NWbKRLAMxg474C474&o=5&pid=21.1&w=174&h=174'
      },
      { id: 5, 
        name: 'Girls T-shirt', 
        price: 499, 
        image: 
  'https://sp.yimg.com/ib/th?id=OPAC.Y7TDAQJKkaYGxA474C474&o=5&pid=21.1&w=174&h=174'
        },
        { id: 6, 
          name: 'Girls T-shirt', 
          price: 499, 
          image: 
      'https://sp.yimg.com/ib/th?id=OPAC.SiCsA8bQ8ilpdg474C474&o=5&pid=21.1&w=174&h=174'
          },
          { id: 7, 
          name: 'Mens T-shirt', 
          price: 699, 
          image: 
      'https://sp.yimg.com/ib/th?id=OPAC.v3eL%2fT4G2PZNHQ474C474&o=5&pid=21.1&w=174&h=174'
          },
          { id: 8, 
          name: 'Girls T-shirt', 
          price: 799, 
          image: 
      'https://sp.yimg.com/ib/th?id=OPAC.Vcjg%2b97lriy%2fjw474C474&o=5&pid=21.1&w=174&h=174'
          },
          { id: 9, 
            name: 'Girls Hoodie', 
            price: 499, 
            image: 
        'https://sp.yimg.com/ib/th?id=OPAC.cWR0NWbKRLAMxg474C474&o=5&pid=21.1&w=174&h=174'
            },
            { id: 10, 
              name: 'Girls T-shirt', 
              price: 499, 
              image: 
        'https://sp.yimg.com/ib/th?id=OPAC.Y7TDAQJKkaYGxA474C474&o=5&pid=21.1&w=174&h=174'
              },
              { id: 9, 
                name: 'Girls Hoodie', 
                price: 499, 
                image: 
            'https://sp.yimg.com/ib/th?id=OPAC.cWR0NWbKRLAMxg474C474&o=5&pid=21.1&w=174&h=174'
                },
                { id: 9, 
                  name: 'Girls Hoodie', 
                  price: 499, 
                  image: 
              'https://sp.yimg.com/ib/th?id=OPAC.cWR0NWbKRLAMxg474C474&o=5&pid=21.1&w=174&h=174'
                  }
                   
        
     	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;
