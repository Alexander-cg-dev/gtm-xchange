"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const banks = [
  {
    name: "BCP",
    logo: "/logos/bcp.svg",
    logoWidth: 44,
    logoHeight: 44,
    isIcon: true,
    brandColor: "#0A47F0",
  },
  {
    name: "Interbank",
    logo: "/logos/interbank.png",
    logoWidth: 140,
    logoHeight: 30,
    isIcon: false,
    brandColor: "#00BF45",
  },
  {
    name: "BBVA",
    logo: "/logos/bbva.png",
    logoWidth: 110,
    logoHeight: 23,
    isIcon: false,
    brandColor: "#004582",
  },
  {
    name: "Scotiabank",
    logo: "/logos/scotiabank.svg",
    logoWidth: 148,
    logoHeight: 21,
    isIcon: false,
    brandColor: "#EC111A",
  },
  {
    name: "Yape",
    logo: "/logos/yape.png",
    logoWidth: 44,
    logoHeight: 44,
    isIcon: true,
    brandColor: "#8B3D99",
  },
  {
    name: "Plin",
    logo: "/logos/plin.png",
    logoWidth: 44,
    logoHeight: 44,
    isIcon: true,
    brandColor: "#10CBB4",
  },
];

export default function BankLogos() {
  return (
    <section
      className="py-10 sm:py-12"
      style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: "#94A3B8" }}
        >
          Transferencias inmediatas desde
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {banks.map((bank, i) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex flex-col items-center justify-center gap-1.5 px-5 py-3.5 rounded-2xl cursor-default select-none transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                background: "white",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                minWidth: bank.isIcon ? "88px" : "auto",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: bank.isIcon ? 44 : "auto",
                  height: bank.isIcon ? 44 : 28,
                }}
              >
                <Image
                  src={bank.logo}
                  alt={`Logo ${bank.name}`}
                  width={bank.logoWidth}
                  height={bank.logoHeight}
                  className="object-contain"
                  style={{
                    maxWidth: bank.isIcon ? 44 : bank.logoWidth,
                    maxHeight: bank.isIcon ? 44 : 28,
                  }}
                  unoptimized={bank.logo.endsWith(".svg")}
                />
              </div>
              {bank.isIcon && (
                <span
                  className="text-xs font-semibold"
                  style={{ color: bank.brandColor }}
                >
                  {bank.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
