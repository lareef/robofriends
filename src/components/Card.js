import './card.css';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* <img src={'./robo-small.png'} alt='robot'></img> */}
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;