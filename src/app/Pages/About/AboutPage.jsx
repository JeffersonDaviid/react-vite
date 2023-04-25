import './aboutPage.css';

import { Link } from 'react-router-dom';
const AboutPage = () => {
   return (
      <div className='container-contact-page'>
         <main className='container-main-data-developer'>
            <img
               className='img-profile'
               src='https://img.unocero.com/2022/04/Foto-de-perfil-como-saber-si-es-falsa.jpg'
               alt='profile photo'
            />
            <div className='container-developer-details'>
               <h1 className='developer-name-tittle'>HI, I'M JEFFERSON DAVID</h1>
               <p className='developer-description'>
                  I'm a WEB DEVELOPER with REACT JS, I have 1 year of learning autodidac,
                  I did many projects
               </p>
               <Link to='/react-vite/contactos' className='btn-contact'>
                  Contact Me
               </Link>
            </div>
         </main>
         <article className='container-developer-description'>
            <div className='skills'>
               <h3>Work alone</h3>
               <img
                  src='https://www.udacity.com/blog/wp-content/uploads/2020/05/softwareengineer-compress.jpeg'
                  alt='trabajando de forma individual'
               />
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae eum
                  doloremque. Sapiente, et iusto ipsam sed dicta molestiae quis aspernatur
                  porro fugiat inventore officia dignissimos, veniam voluptas praesentium
                  quam? In error cum dignissimos officiis ea veritatis, pariatur doloribus
                  illo natus corrupti tenetur alias animi asperiores recusandae.
                  Praesentium id, iusto tempora sunt quia mollitia recusandae voluptates
                  expedita hic aliquam rerum?
               </p>
            </div>
            <div className='skills'>
               <h3>Team work</h3>
               <img
                  src='https://media.defense.gov/2016/Aug/11/2001602138/-1/-1/0/160721-F-RI777-001.JPG'
                  alt='trabajando en grupo'
               />
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae eum
                  doloremque. Sapiente, et iusto ipsam sed dicta molestiae quis aspernatur
                  porro fugiat inventore officia dignissimos, veniam voluptas praesentium
                  quam? In error cum dignissimos officiis ea veritatis, pariatur doloribus
                  illo natus corrupti tenetur alias animi asperiores recusandae.
                  Praesentium id, iusto tempora sunt quia mollitia recusandae voluptates
                  expedita hic aliquam rerum?
               </p>
            </div>
            <div className='skills'>
               <h3>clean code</h3>
               <img
                  src='https://i0.wp.com/cardbiss.com/wp-content/uploads/2021/05/clean-code.jpg?ssl=1'
                  alt='codigo limpia'
               />
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae eum
                  doloremque. Sapiente, et iusto ipsam sed dicta molestiae quis aspernatur
                  porro fugiat inventore officia dignissimos, veniam voluptas praesentium
                  quam? In error cum dignissimos officiis ea veritatis, pariatur doloribus
                  illo natus corrupti tenetur alias animi asperiores recusandae.
                  Praesentium id, iusto tempora sunt quia mollitia recusandae voluptates
                  expedita hic aliquam rerum?
               </p>
            </div>
         </article>
      </div>
   );
};

export default AboutPage;
