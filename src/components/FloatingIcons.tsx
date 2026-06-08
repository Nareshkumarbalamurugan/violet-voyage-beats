import { motion } from "framer-motion";
import {
  Plane, Compass, MapPin, Camera, Palmtree, Luggage,
  Sailboat, Mountain, TramFront, Ticket, Globe2, Tent,
} from "lucide-react";

/* A scattered layer of travel icons that gently bounce & sway.
   Positions are fixed (SSR-safe); only the animation moves. */
const ICONS = [
  { Icon: Plane,    top: "16%", left: "8%",  size: 30, color: "#38bdf8", dur: 3.2, amp: 14, rot: 8,  delay: 0.0 },
  { Icon: Compass,  top: "24%", left: "88%", size: 34, color: "#22d3ee", dur: 4.0, amp: 18, rot: -10, delay: 0.4 },
  { Icon: MapPin,   top: "62%", left: "6%",  size: 26, color: "#7dd3fc", dur: 2.8, amp: 12, rot: 6,  delay: 0.8 },
  { Icon: Camera,   top: "70%", left: "90%", size: 28, color: "#60a5fa", dur: 3.6, amp: 15, rot: -8, delay: 0.2 },
  { Icon: Palmtree, top: "80%", left: "16%", size: 32, color: "#34d399", dur: 4.2, amp: 16, rot: 5,  delay: 1.0 },
  { Icon: Luggage,  top: "12%", left: "70%", size: 26, color: "#2dd4bf", dur: 3.0, amp: 13, rot: -6, delay: 0.6 },
  { Icon: Sailboat, top: "44%", left: "93%", size: 30, color: "#38bdf8", dur: 3.8, amp: 17, rot: 9,  delay: 1.2 },
  { Icon: Mountain, top: "84%", left: "78%", size: 30, color: "#7dd3fc", dur: 3.4, amp: 14, rot: -7, delay: 0.3 },
  { Icon: TramFront,top: "34%", left: "4%",  size: 26, color: "#22d3ee", dur: 4.4, amp: 15, rot: 7,  delay: 0.9 },
  { Icon: Ticket,   top: "52%", left: "84%", size: 24, color: "#60a5fa", dur: 2.6, amp: 11, rot: -9, delay: 0.5 },
  { Icon: Globe2,   top: "8%",  left: "40%", size: 28, color: "#34d399", dur: 3.5, amp: 14, rot: 6,  delay: 1.1 },
  { Icon: Tent,     top: "90%", left: "48%", size: 26, color: "#2dd4bf", dur: 3.9, amp: 16, rot: -5, delay: 0.7 },
];

export function FloatingIcons() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {ICONS.map(({ Icon, top, left, size, color, dur, amp, rot, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top, left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.85, 0.85],
            scale: 1,
            y: [0, -amp, 0],
            rotate: [0, rot, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 + i * 0.08 },
            scale: { type: "spring", stiffness: 260, damping: 18, delay: 0.3 + i * 0.08 },
            y: { duration: dur, repeat: Infinity, ease: "easeInOut", delay },
            rotate: { duration: dur, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <div
            className="grid place-items-center rounded-2xl border backdrop-blur-md"
            style={{
              width: size + 22,
              height: size + 22,
              background: color + "1f",
              borderColor: color + "44",
              boxShadow: `0 8px 30px -8px ${color}66`,
            }}
          >
            <Icon style={{ width: size, height: size, color }} strokeWidth={1.6} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
