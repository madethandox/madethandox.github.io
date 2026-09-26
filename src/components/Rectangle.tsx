import './Rectangle.scss'
import { useEffect } from "react";
import stickman from "../assets/stickman.png";
import next from "../assets/next.svg";
import { page } from "../functions/page";
import javascriptlogo from '../../public/media/Icons/javascript.svg'
import typescriptlogo from '../../public/media/Icons/typescript.svg'
import reactjslogo from '../../public/media/Icons/react.svg'
import tailwindlogo from '../../public/media/Icons/tailwind.svg'
import gitlogo from '../../public/media/Icons/github.svg'
import vitelogo from '../../public/media/Icons/vite.svg'
import Star from './UI/Star';
export default function Rectangle() {
        useEffect(() => {
        return page();
    }, []);
    return (
    <>
        <img src={stickman} id='stickman' />
        <div id='rectangle' className='page1'>
            <div id='text1'>
                Hello! <br />
                I'm <span className='Ethan'>Ethan</span>, <br />
                I see that your'e trying to find out more about me and what I'm capable of! <br />
                I truely appreciate your time, so let's not waste it.
            </div>
            <div id='text2'>
                So let me introduce myself, <br />
                I'm 23 years old and live in Isfahan, Iran. <br />
                I've been learning web developing and front-end web designing for a year <br /> now and I coded this resume myself! <br />
                On the next page you can see a list of my abilities and the things I'm good at!
            </div>
            <div id='text3'>
                <div className='row'>
                <div id='skill1' className='skills'>
                    JavaScript <img src={javascriptlogo} />
                </div>
                <div className='stars'><Star/><Star/><Star/><Star/><Star/></div>
                </div>
                <div className='row'>
                <div id='skill2' className='skills'>
                    TypeScript <img src={typescriptlogo} />
                </div>
                <div className='stars'><Star/><Star/><Star/><Star/><Star/></div>
                </div>
                <div className='row'>
                <div id='skill3' className='skills'>
                    ReactJS <img src={reactjslogo} />
                </div>
                <div className='stars'><Star/><Star/><Star/><Star/><Star/></div>
                </div>
               <div className='row'>
                <div id='skill4' className='skills'>
                    Tailwind <img src={tailwindlogo} />
                </div>
                <div className='stars'><Star/><Star/><Star/><Star/><Star color = "#1C274C"/></div>
                </div>
                <div className='row'>
                <div id='skill5' className='skills'>
                    Git <img src={gitlogo} />
                </div>
                <div className='stars'><Star/><Star/><Star/><Star/><Star color = "#1C274C"/></div>
                </div>
                <div className='row'>
                <div id='skill6' className='skills'>
                    Vite <img src={vitelogo} />
                </div>
                <div className='stars'><Star/><Star/><Star/><Star/><Star color = "#1C274C"/></div>
                </div>
            </div>
            <div id='text4'>
                I have experience working in customer service, telemarketing, and <br /> translation,
                which has helped me develop strong communication and <br /> problem-solving skills.
                I am now focused on building my career in web <br /> development and continuously expanding my skills.
            </div>
            <div id='text5'>
                <span>Interested in working with me?</span>
                <span id='span1'>Phone: <a href="tel:+989135166535" id='phonenum'>+98 913 516 6535</a></span>
                <span>Email: <a href="mailto:MadEthanDox@gmail.com" id='email'>MadEthanDox@gmail.com</a></span>
            </div>
            <div id='footer'>
            <img src={next} alt="Previous page" id='previouspage'/>
            <img src={next} alt="Next page" id='nextpage'/>
            </div>
        </div>
    </>
    )
}
