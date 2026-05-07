import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Indya (1M+ Downloads)",
    desc: "Fashion Shopping App",
    images: [
      "https://i.ibb.co/VYtL4Y4r/Indya-1.png",
      "https://i.ibb.co/1YYcpfpf/Indya-2.png",
      "https://i.ibb.co/3ymzycQt/Indya-3.png",
      "https://i.ibb.co/rKSkNrFL/Indya-4.png",
      "https://i.ibb.co/HftDcpx9/Indya-5.png",
      "https://i.ibb.co/4nbxN0RY/Indya-6.png",
      "https://i.ibb.co/QvQ8Phr1/Indya-7.png",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.houseofindya&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/indya-women-indian-wear-online/id1496306217",
  },
    {
    title: "Chaayos.com (100k+ Downloads)",
    desc: "Chai & Snacks Order.",
    images: [
      "https://i.ibb.co/7JvLdd6d/chaayos-1.png",
      "https://i.ibb.co/Wv2tgDfX/chaayos-2.png",
      "https://i.ibb.co/1Jsz81k7/chaayos-3.png",
    ],
    appStore: "https://apps.apple.com/in/app/chaayos-india/id1521406820",
  },
  {
    title: "Lakmé Salon (100k+ Downloads)",
    desc: "Beauty & salon booking  and cosmatic shopping app.",
    images: [
      "https://i.ibb.co/7NzwZsqV/lakme-salon-1.png",
      "https://i.ibb.co/yzGYv3L/lakme-salon-2.png",
      "https://i.ibb.co/VWk398rh/lakme-salon-3.png",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.lakme.lakmesalon&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/lakm%C3%A8-salon/id1377656087",
  },
  {
    title: "Magicbricks.com (100k+ Downloads)",
    desc: "Buy, Rent & Sale Property",
    images: [
      "https://i.ibb.co/MxssmXK5/magicbricks-1.png",
      "https://i.ibb.co/wrcJjB94/magicbricks-2.png",
      "https://i.ibb.co/PKN29pS/magicbricks-3.png",
      "https://i.ibb.co/d3VJBFn/magicbricks-4.png",
      "https://i.ibb.co/TnYSXPr/magicbricks-5.png",
    ],
    appStore: "https://apps.apple.com/in/app/magicbricks-property-search/id486328406",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Top Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <ProjectCard p={p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}