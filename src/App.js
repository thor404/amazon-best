import './App.css';

function App() {
  const booklist = [
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/81l1UM7a4bS._AC_UL200_SR200,200_.jpg',
      bname: 'American Marxism',
      auth: 'Mark R.Levin',
      cover: 'Hardcover',
      price: '$17.44'
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/713XUMrojkL._AC_UL200_SR200,200_.jpg',
      bname: 'What happened to you',
      auth: 'Oprah Winfrey',
      cover: 'Hardcover',
      price: '17.39'
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/816ZcMz1R3L._AC_UL200_SR200,200_.jpg',
      bname: 'The women of the Bible Speak',
      auth: 'Shannom Bream',
      cover: 'Hardcover',
      price: '$15.59'
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/816JhuO1cyS._AC_UL200_SR200,200_.jpg',
      bname: 'Shadow and Bone',
      auth: 'Leigh Bardugo',
      cover: 'Paperback',
      price: '$7.57'
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg',
      bname: 'The Four Agreements',
      auth: 'Don Miguel Ruiz',
      cover: 'paperback',
      price: '5.77'
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg',
      bname: 'Atomic Habits',
      auth: 'James Clear',
      cover: 'Hardcover',
      price: '$11.98'
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/71ko-gBKGKS._AC_UL200_SR200,200_.jpg',
      bname: 'Siege and storm',
      auth: 'Leigh bardugo',
      cover: 'Paper back',
      price: '$8.98'
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L._AC_UL200_SR200,200_.jpg',
      bname: 'The midnight libray',
      auth: 'Matt haig',
      cover: 'Hardcover',
      price: '$13.29'
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/61UgmTGY6SL._AC_UL200_SR200,200_.jpg',
      bname: 'The truth about covid-19',
      auth: 'Doctor joseph mercola',
      cover: 'Hardcover',
      price: '$18.13'
    }
  ]
  return (
    <>
      <div className="App">
        <Head></Head>
      </div>
      <div className="booklist">
        {
          booklist.map((book) => <Book img = {book.img} bname = {book.bname} auth = {book.auth} cover = {book.cover} price = {book.price}></Book>)
        }
      </div>
    </>
  );
}

function Head(){
  return(
    <div className="head">
      <h1>Amazon Best Sellers</h1>
      <p>Our most popular products based on sales. Updated hourly.</p>
    </div>
  )
}

// booklist component
function Book(props){
  const {img, bname, auth, cover, price } = props;
  return(
    <div className="container">
      <div className="books">
        <img src={img} alt=""/>
        <br/><br/>
        <h4 className="blue">{bname}</h4>
        <p>{auth}</p>
        <p className="gray">{cover}</p>
        <p className="red">{price}</p>
      </div>
    </div>
  )
}


export default App;
