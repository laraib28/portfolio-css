import Image from 'next/image';
import "../style/hero.css";

export default function About() {
 
  return (
    <main className='parent'>
      <div className='heading'>
        <p>Hi! <span className='highlight'>Laraib Tabbassum</span></p>
        <p>I am  Passionate Web Developer</p>
     
      <div className="buttons">
      <a href="/resume.pdf">
       <button className="btn">Download Resume</button>
      </a>
      <a href="https://github.com/laraib28">
       <button className="btn">Github</button>
       </a>
       </div>
       </div>
      <div className='paragragh'>
        <Image src="/png.png" alt='image' height={300} width={400} />
      </div>  
        
    </main>
  );
}