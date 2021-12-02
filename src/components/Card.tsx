type post = {
  id: number;
  title: string;
  img: string;
  desc: string;
  longDesc: string;
};

interface Props {
  post: post;
}

const Card = ({ post }: Props) => {
  return (
    <div className='card'>
      <span className="title">{post.title}</span>
      <img src={post.img} alt="" className="img" />
      <p className="desc">{post.desc}</p>
      <button className="cardButton">Read More</button>
    </div>
  );
};

export default Card;
