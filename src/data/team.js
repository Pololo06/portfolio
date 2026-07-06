import samuel from "../assets/other/samuel.jpeg";
import juan from "../assets/other/farelo.png";
import santiago from "../assets/other/santiago.jpeg";
import lucas from "../assets/other/lucas.jpeg";
import berdugo from "../assets/other/berdugo.jpeg";

/* Fuente única del equipo. La consumen el Hero (franja duotono: usa
   photo/video/position) y Nosotros (fichas: usa el resto de campos).
   `position` es el object-position del retrato en la celda del hero. */
export const team = [
  {
    name: "Samuel Polo",
    role: "Ing. Frontend",
    photo: samuel,
    video: "/videos/retrato-samuel.mp4",
    position: "50% 30%",
    description:
      "Entusiasta de aprender, me dedico al front end para demostrar mis habilidades en diseñar, crear e innovar páginas web. Otra de mis fortalezas es el trabajo en equipo ya que siempre busco tener dinámica con mi grupo de trabajo para mantener un ambiente laboral positivo y productivo.",
    instagram: "https://www.instagram.com/saml_pol?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    git: "https://github.com/Pololo06",
    linkedin: "https://co.linkedin.com/in/samuel-polo-0382a9388",
  },
  {
    name: "Juan Farelo",
    role: "Ing. Backend",
    photo: juan,
    video: "/videos/retrato-juan.mp4",
    position: "50% 25%",
    description:
      "Me llamo Farelo y me destaco por mi desarrollo en el entorno backend, manejo de lógica de negocio y compresión al cliente. Actualmente me encuentro puliendo mis habilidades en FastApi, Spring Boot y demás que me hacen más versátil.",
    instagram: "https://www.instagram.com/et.___farelo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    git: "https://github.com/jfmiyox",
    linkedin: "",
  },
  {
    name: "Santiago Torres",
    role: "Ing. Backend",
    photo: santiago,
    video: "/videos/retrato-santiago.mp4",
    position: "50% 30%",
    description:
      "Apasionado por la programación de bajo nivel, el análisis de datos y la inteligencia artifical. He participado en diferentes hackatones para pulir mi conocimiento y conocer diversos perfiles técnicos. Me caracterizo por mi liderazgo, gestión del tiempo y productividad en entornos desafiantes. Me encuentro preparandome cada día para ser un programador destacado en el área de Machine Learning.",
    instagram: "https://www.instagram.com/tfst_1e1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    git: "https://github.com/sandredev",
    linkedin: "https://www.linkedin.com/in/santiago-torres-7083b530a/",
  },
  {
    name: "Lucas Carvajal",
    role: "Ing. Frontend",
    photo: lucas,
    video: "/videos/retrato-lucas.mp4",
    position: "50% 25%",
    description:
      "Soy Lucas Carvajal, ingeniero de sistemas y desarrollador frontend apasionado por crear soluciones web modernas, intuitivas y eficientes. Me caracterizo por mi liderazgo, responsabilidad y compromiso con cada proyecto. Disfruto trabajar en equipo, aprender constantemente y adaptarme rápidamente a nuevos retos, transformando ideas en experiencias digitales funcionales que generen valor para las personas y las empresas.",
    instagram: "https://www.instagram.com/lucascc611?igsh=cDVxYWRtdDh2enBz&utm_source=qr",
    git: "https://github.com/LucasCarvajalC",
    linkedin: "https://www.linkedin.com/in/lucas-carvajal-contreras-6b28993ab",
  },
  {
    name: "Daniel Berdugo",
    role: "Ing. Full Stack",
    photo: berdugo,
    video: "/videos/retrato-berdugo.mp4",
    position: "50% 30%",
    description:
      "Soy Full Stack Engineer apasionado por desarrollar soluciones innovadoras con inteligencia artificial y tecnologías modernas. Me considero un excelente líder, con alta capacidad de adaptación y un enfoque colaborativo para afrontar nuevos desafíos. Disfruto crear implementaciones creativas, escalables y centradas en el usuario, combinando aprendizaje continuo, innovación y excelencia técnica.",
    instagram: "https://www.instagram.com/eldaniel._02?igsh=NzNkNGIyZ3huaGtu",
    git: "https://github.com/DFBR2506",
    linkedin: "https://co.linkedin.com/in/daniel-berdugo-bb0451339",
  },
];
