"use client";

import { Skill } from "../utils/interface";
import { ParallaxText } from "./ui/ParallaxText";
import { motion } from "framer-motion";

interface SkillsProps {
  skills: Skill[];
}

function Skills({ skills }: SkillsProps) {
  const filteredSkills = skills.filter((skill) => skill.enabled);

  const renderParallax = (velocity: number) => (
    <ParallaxText baseVelocity={velocity}>
      {filteredSkills.map((skill) => (
        <span
          key={`${skill._id}-${velocity}`}
          className="md:text-7xl text-xl font-semibold uppercase text-white/30 tracking-tighter mx-2"
        >
          {skill.name} •
        </span>
      ))}
    </ParallaxText>
  );

  return (
    <section id="skills" className="py-16 bg-background text-foreground">
      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-zinc-400 to-zinc-100 bg-clip-text text-transparent mb-10 px-4 md:px-8"
      >
        Skills
      </motion.h2>

      {/* Parallax Text Layers */}
      <div className="space-y-6">
        {renderParallax(-19)}
        {renderParallax(19)}
        {renderParallax(-19)}
      </div>
    </section>
  );
}

export default Skills;
