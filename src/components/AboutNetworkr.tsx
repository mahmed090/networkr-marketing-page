import { CircleCheckBig, Users, Building, GraduationCap } from "lucide-react";
import { motion } from "../lib/motion";
import { containerSection, itemSection, defaultViewport } from "../lib/motion";
import { useTenantStore } from "../stores/tenantStore";
import type { AboutNetworkrStatIconName } from "../utils/data";
import SectionTitle from "./ui/SectionTitle";

const statIconMap = {
  users: Users,
  building: Building,
  "graduation-cap": GraduationCap,
} as const;

function StatIcon({ name }: { name: AboutNetworkrStatIconName }) {
  const Icon = statIconMap[name];
  return Icon ? (
    <Icon className="w-7 h-7" strokeWidth={1.5} aria-hidden />
  ) : null;
}

export default function AboutNetworkr() {
  const siteData = useTenantStore((s) => s.siteData);
  const about = siteData.aboutNetworkr;

  return (
    <motion.section
      id="about"
      className="py-12 lg:py-20 bg-linear-to-b from-white to-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={containerSection}
    >
      <div className="app-container">
        <SectionTitle
          tagVariant="aboutNetworkr"
          tagIcon={<CircleCheckBig className="w-3.5 h-3.5" aria-hidden />}
          badge={about.badge}
          headline={about.headline}
          headlineItalic={about.headlineItalic}
          subtitle={about.tagline}
        />

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mt-10 md:mt-14">
          {about.stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              variants={itemSection}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <StatIcon name={stat.icon} />
              </div>
              <div className="text-4xl md:text-5xl font-light tracking-tight mb-2 font-display">
                {stat.value}
              </div>
              <p className="text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 p-8 md:p-12 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-100"
          variants={itemSection}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {about.features.map((text) => (
              <div key={text} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CircleCheckBig
                    className="w-3.5 h-3.5 text-green-600"
                    aria-hidden
                  />
                </div>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
