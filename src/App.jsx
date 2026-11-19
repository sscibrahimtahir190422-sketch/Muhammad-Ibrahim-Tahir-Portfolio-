import OverlayInspector from './components/OverlayInspector';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import { About, Work, Experience, Toolkit, Votonomy, Education, Contact } from './sections/Sections';
export default function App(){return <><a href='#main' className='skip-link'>Skip to content</a><Navbar/><main id='main'><Hero/><About/><Work/><Votonomy/><Experience/><Toolkit/><Education/></main><Contact/><OverlayInspector/></>}
