import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Camera,
  Gift,
  Heart,
  KeyRound,
  Music2,
  Sparkles,
  Star,
  WandSparkles,
  X
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import "./styles.css";

const anniversaryDate = "June 18";

const timeline = [
  {
    date: "Day 1",
    title: "The Beginning",
    caption: "The tiny moment that somehow became my favorite chapter.",
    tint: "from-[#FFE4E1] to-[#FFF4B8]"
  },
  {
    date: "Month 2",
    title: "Our First Adventure",
    caption: "Laughing through plans, snacks, and every little detour.",
    tint: "from-[#D9C6FF] to-[#FFF0F5]"
  },
  {
    date: "Month 5",
    title: "Comfort Season",
    caption: "When your hand started feeling like home.",
    tint: "from-[#FFF4B8] to-[#FFE4E1]"
  },
  {
    date: "Month 8",
    title: "Silly Traditions",
    caption: "Our jokes, our looks, our tiny language nobody else gets.",
    tint: "from-[#BDE7FF] to-[#FFF0F5]"
  },
  {
    date: "Today",
    title: "365 Days of Us",
    caption: "One whole year, and I still choose you in every version.",
    tint: "from-[#FFB8DD] to-[#D9C6FF]"
  }
];

const loveNotes = [
  "Your laugh",
  "The way you hold my hand",
  "How you look when you're sleepy",
  "Your soft heart",
  "Our late-night talks",
  "How every day feels warmer with you"
];

const scrapbookPhotos = [
  {
    title: "Soft Morning",
    caption: "A memory that smells like coffee and happiness.",
    image:
      "linear-gradient(135deg, rgba(255,228,225,.88), rgba(255,244,184,.78)), radial-gradient(circle at 25% 30%, rgba(255,105,180,.55), transparent 18%), radial-gradient(circle at 75% 68%, rgba(217,198,255,.72), transparent 22%)",
    rotate: -7
  },
  {
    title: "Golden Hour",
    caption: "Your smile doing that thing where the room changes.",
    image:
      "linear-gradient(135deg, rgba(255,244,184,.95), rgba(255,240,245,.82)), radial-gradient(circle at 66% 24%, rgba(255,20,147,.44), transparent 15%), radial-gradient(circle at 30% 74%, rgba(189,231,255,.86), transparent 25%)",
    rotate: 5
  },
  {
    title: "Us Being Us",
    caption: "A perfect little mess of sweetness and giggles.",
    image:
      "linear-gradient(135deg, rgba(217,198,255,.9), rgba(255,228,225,.84)), radial-gradient(circle at 35% 36%, rgba(255,105,180,.42), transparent 18%), radial-gradient(circle at 72% 70%, rgba(255,244,184,.84), transparent 21%)",
    rotate: -2
  },
  {
    title: "Forever Preview",
    caption: "The kind of moment I want to keep collecting.",
    image:
      "linear-gradient(135deg, rgba(255,240,245,.96), rgba(189,231,255,.78)), radial-gradient(circle at 70% 28%, rgba(255,105,180,.48), transparent 19%), radial-gradient(circle at 24% 72%, rgba(255,244,184,.9), transparent 24%)",
    rotate: 8
  }
];

const letterParagraphs = [
  "My love,",
  "One year with you has felt like opening a tiny miracle every single day. You made ordinary hours feel decorated, made quiet moments feel safe, and made my world softer just by being in it.",
  "I love the way you laugh before you finish a thought. I love the way your hand finds mine. I love the calm I feel around you, the sparkle you bring into boring days, and the way you make love feel both exciting and peaceful.",
  "Thank you for every memory we made this year, every joke, every hug, every little look that said more than words could. This is only our first year, and I already know I would choose you again and again.",
  "Happy 1-year anniversary. I love you more than this little website can hold."
];

function HeartParticle({ delay = 0, size = 18, left = "50%", duration = 6 }) {
  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none fixed z-[70] select-none text-hotrose"
      initial={{ y: -80, x: 0, opacity: 0, rotate: -20, scale: 0.5 }}
      animate={{
        y: "112vh",
        x: [0, 22, -16, 10],
        opacity: [0, 1, 1, 0],
        rotate: [0, 18, -12, 24],
        scale: [0.5, 1, 0.9]
      }}
      transition={{ delay, duration, ease: "easeInOut" }}
      style={{ left, fontSize: size }}
    >
      ♥
    </motion.span>
  );
}

function FloatingHeartField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute text-hotrose/25"
          initial={{
            x: `${(index * 37) % 100}vw`,
            y: `${(index * 19) % 100}vh`,
            scale: 0.6 + (index % 5) * 0.14
          }}
          animate={{
            y: [`${(index * 19) % 100}vh`, `${((index * 19) % 100) - 16}vh`],
            rotate: [0, index % 2 ? 12 : -12, 0]
          }}
          transition={{
            duration: 4 + (index % 6),
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
}

function HeartRain({ triggerKey }) {
  const drops = useMemo(
    () =>
      Array.from({ length: 72 }).map((_, index) => ({
        id: `${triggerKey}-${index}`,
        delay: Math.random() * 0.9,
        left: `${Math.random() * 100}%`,
        size: 14 + Math.random() * 22,
        duration: 3.2 + Math.random() * 2.5
      })),
    [triggerKey]
  );

  return (
    <AnimatePresence>
      <motion.div
        key={triggerKey}
        className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {drops.map((drop) => (
          <HeartParticle key={drop.id} {...drop} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

function LandingGate({ onUnlock }) {
  const [burst, setBurst] = useState(false);

  const unlock = () => {
    setBurst(true);
    window.setTimeout(onUnlock, 950);
  };

  return (
    <motion.section
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-paper px-5"
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-x-0 top-16 mx-auto h-44 w-44 rounded-full bg-hotrose/10 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="relative flex w-full max-w-lg flex-col items-center text-center">
        <motion.div
          className="heart-lock relative grid h-44 w-44 place-items-center"
          animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="h-24 w-24 fill-hotrose stroke-deeprose text-deeprose drop-shadow-xl" />
          <motion.div
            className="absolute grid h-14 w-14 place-items-center rounded-full border-4 border-white bg-fairy shadow-sticker"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <span className="text-2xl">♡</span>
          </motion.div>
        </motion.div>

        <h1 className="mt-8 font-display text-4xl text-ink sm:text-6xl">
          Enter Our World
        </h1>
        <p className="mt-4 max-w-sm text-base leading-7 text-ink/70 sm:text-lg">
          A tiny locked scrapbook for one very magical first year.
        </p>

        <motion.button
          type="button"
          onClick={unlock}
          className="group mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-deeprose px-6 py-4 text-base font-extrabold text-white shadow-glow outline-none ring-deeprose/25 transition focus-visible:ring-4"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ type: "spring", stiffness: 260, damping: 12 }}
        >
          <KeyRound className="h-5 w-5 transition group-hover:rotate-12" />
          Unlock Our First Year
        </motion.button>

        <AnimatePresence>
          {burst && (
            <motion.div
              className="pointer-events-none fixed inset-0 z-[95]"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: 46 }).map((_, index) => (
                <motion.span
                  key={index}
                  className="absolute left-1/2 top-1/2 text-hotrose"
                  initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 1 }}
                  animate={{
                    x: Math.cos(index) * (120 + (index % 7) * 26),
                    y: Math.sin(index * 1.7) * (110 + (index % 6) * 22),
                    scale: [0, 1.2, 0.2],
                    rotate: index * 19,
                    opacity: [1, 1, 0]
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  ♥
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-hotrose/20 bg-white/70 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.12em] text-deeprose shadow-sm">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/68 sm:text-lg">
          {children}
        </p>
      )}
    </div>
  );
}

function TimelineCard({ item, index, onBadgeHover }) {
  return (
    <motion.article
      className={`relative mx-auto grid max-w-5xl gap-5 rounded-[2rem] border border-white/80 bg-white/72 p-4 shadow-soft backdrop-blur md:grid-cols-[.9fr_1.1fr] md:p-6 ${
        index % 2 ? "md:translate-x-8" : "md:-translate-x-8"
      }`}
      initial={{ opacity: 0, y: 64, scale: 0.86 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${item.tint}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,.9),transparent_15%),radial-gradient(circle_at_70%_70%,rgba(255,105,180,.28),transparent_18%)]" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-white/70 shadow-sticker">
            <Camera className="h-9 w-9 text-deeprose" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-2 md:p-4">
        <motion.button
          type="button"
          onMouseEnter={onBadgeHover}
          onFocus={onBadgeHover}
          className="mb-5 w-fit rounded-full bg-deeprose px-4 py-2 text-sm font-black text-white shadow-glow outline-none ring-deeprose/25 focus-visible:ring-4"
          whileHover={{ scale: 1.08, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.date}
        </motion.button>
        <h3 className="font-display text-3xl text-ink">{item.title}</h3>
        <p className="mt-3 text-lg leading-8 text-ink/70">{item.caption}</p>
      </div>
    </motion.article>
  );
}

function LovePopper() {
  const [opened, setOpened] = useState([]);

  const toggle = (index) => {
    setOpened((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
      {loveNotes.map((note, index) => {
        const isOpen = opened.includes(index);
        return (
          <motion.button
            key={note}
            type="button"
            onClick={() => toggle(index)}
            className="group relative min-h-40 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/72 p-4 text-center shadow-sticker outline-none ring-hotrose/25 backdrop-blur transition focus-visible:ring-4 sm:min-h-48"
            whileHover={{ y: -8, rotate: index % 2 ? 1.5 : -1.5 }}
            whileTap={{ scale: 0.94 }}
            layout
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${
                index % 3 === 0
                  ? "from-[#FFF4B8] to-[#FFE4E1]"
                  : index % 3 === 1
                    ? "from-[#D9C6FF] to-[#FFF0F5]"
                    : "from-[#BDE7FF] to-[#FFE4E1]"
              } opacity-80`}
              animate={{ scale: isOpen ? 1.08 : 1 }}
            />
            <div className="relative z-10 flex h-full flex-col items-center justify-center">
              <motion.div
                className="grid h-16 w-16 place-items-center rounded-2xl bg-white/80 shadow-sticker"
                animate={
                  isOpen
                    ? { rotate: [0, -10, 10, 0], scale: [1, 1.18, 1] }
                    : { y: [0, -5, 0] }
                }
                transition={{ duration: isOpen ? 0.55 : 2, repeat: isOpen ? 0 : Infinity }}
              >
                {index % 2 ? (
                  <Gift className="h-8 w-8 text-deeprose" />
                ) : (
                  <Heart className="h-8 w-8 fill-hotrose text-deeprose" />
                )}
              </motion.div>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.p
                    key="note"
                    className="mt-5 text-balance text-lg font-black leading-7 text-ink"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  >
                    {note}
                  </motion.p>
                ) : (
                  <motion.p
                    key="closed"
                    className="mt-5 text-sm font-extrabold uppercase tracking-[0.16em] text-deeprose"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Tap to pop
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

function PolaroidCarousel() {
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 220], [-12, 12]);
  const cardX = useSpring(x, { stiffness: 180, damping: 20 });

  const move = (direction) => {
    setActive((current) =>
      direction > 0
        ? (current + 1) % scrapbookPhotos.length
        : (current - 1 + scrapbookPhotos.length) % scrapbookPhotos.length
    );
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:justify-center">
      <div className="relative h-[440px] w-full max-w-sm sm:max-w-md">
        {scrapbookPhotos.map((photo, index) => {
          const stackIndex =
            (index - active + scrapbookPhotos.length) % scrapbookPhotos.length;
          const isTop = stackIndex === 0;

          return (
            <motion.div
              key={photo.title}
              className="absolute inset-x-3 top-5 origin-bottom rounded-[1.4rem] bg-white p-4 shadow-soft sm:inset-x-7"
              style={
                isTop
                  ? { x: cardX, rotate }
                  : {
                      rotate: photo.rotate,
                      y: stackIndex * 12,
                      scale: 1 - stackIndex * 0.04,
                      zIndex: scrapbookPhotos.length - stackIndex
                    }
              }
              animate={
                isTop
                  ? { scale: 1, zIndex: 20 }
                  : {
                      rotate: photo.rotate,
                      y: stackIndex * 16,
                      scale: 1 - stackIndex * 0.045,
                      zIndex: scrapbookPhotos.length - stackIndex
                    }
              }
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.65}
              onDragEnd={(_, info) => {
                if (info.offset.x > 95) move(-1);
                if (info.offset.x < -95) move(1);
                x.set(0);
              }}
              whileTap={isTop ? { cursor: "grabbing", scale: 0.98 } : undefined}
            >
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{ background: photo.image }}
              >
                <div className="absolute inset-0 grid place-items-center">
                  <motion.div
                    className="grid h-24 w-24 place-items-center rounded-full bg-white/70 shadow-sticker"
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <Heart className="h-11 w-11 fill-hotrose text-deeprose" />
                  </motion.div>
                </div>
              </div>
              <div className="px-2 py-5 text-center">
                <h3 className="font-display text-3xl text-ink">{photo.title}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-ink/62">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="max-w-sm text-center lg:text-left">
        <h3 className="font-display text-4xl text-ink">Drag the Polaroid</h3>
        <p className="mt-4 text-lg leading-8 text-ink/68">
          Swipe left or right to shuffle through our tiny memory stack. These are
          soft placeholders ready for your real photos.
        </p>
        <div className="mt-6 flex justify-center gap-2 lg:justify-start">
          {scrapbookPhotos.map((photo, index) => (
            <button
              key={photo.title}
              type="button"
              aria-label={`Show ${photo.title}`}
              onClick={() => setActive(index)}
              className={`h-3 rounded-full transition-all ${
                active === index ? "w-10 bg-deeprose" : "w-3 bg-hotrose/25"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function GiftFinale() {
  const [opened, setOpened] = useState(false);
  const [showSong, setShowSong] = useState(false);

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center">
      <motion.button
        type="button"
        aria-label="Open the anniversary gift"
        onClick={() => setOpened(true)}
        className="relative h-64 w-64 outline-none ring-deeprose/25 focus-visible:ring-4 sm:h-80 sm:w-80"
        animate={opened ? { y: 0 } : { y: [0, -12, 0] }}
        transition={{ duration: 2.4, repeat: opened ? 0 : Infinity, ease: "easeInOut" }}
        whileHover={!opened ? { scale: 1.04 } : undefined}
        whileTap={!opened ? { scale: 0.95 } : undefined}
      >
        <div className="absolute left-1/2 top-8 z-20 w-52 -translate-x-1/2 sm:top-10 sm:w-64">
          <motion.div
            className="h-20 rounded-2xl bg-gradient-to-br from-[#FF69B4] to-[#FF1493] shadow-glow"
            animate={
              opened
                ? { y: -110, rotate: -22, x: -80, opacity: 0 }
                : { rotate: [0, 1.8, -1.8, 0] }
            }
            transition={{ type: "spring", stiffness: 130, damping: 13 }}
          />
        </div>
        <div className="absolute left-1/2 top-24 z-10 w-56 -translate-x-1/2 sm:top-32 sm:w-72">
          <motion.div
            className="h-36 rounded-b-[2rem] bg-gradient-to-br from-[#FFF4B8] via-[#FFE4E1] to-[#D9C6FF] shadow-soft sm:h-40"
            animate={opened ? { rotateX: 10, y: 20 } : {}}
          />
        </div>
        <div className="absolute left-1/2 top-24 z-30 w-10 -translate-x-1/2 sm:top-32">
          <motion.div
            className="h-36 rounded-full bg-deeprose shadow-glow sm:h-40"
            animate={opened ? { scaleY: 0.18, opacity: 0 } : { scaleY: [1, 1.05, 1] }}
          />
        </div>
        <div className="absolute left-1/2 top-2 z-30 -translate-x-[95%] sm:top-3">
          <motion.div
            className="h-24 w-24 rotate-[-24deg] rounded-full border-[18px] border-deeprose bg-transparent sm:h-28 sm:w-28"
            animate={opened ? { x: -95, y: -95, rotate: -65, opacity: 0 } : {}}
          />
        </div>
        <div className="absolute left-1/2 top-2 z-30 -translate-x-[5%] sm:top-3">
          <motion.div
            className="h-24 w-24 rotate-[24deg] rounded-full border-[18px] border-deeprose bg-transparent sm:h-28 sm:w-28"
            animate={opened ? { x: 95, y: -95, rotate: 65, opacity: 0 } : {}}
          />
        </div>
        <div className="absolute bottom-10 left-1/2 z-0 w-56 -translate-x-1/2">
          <motion.div
            className="h-9 rounded-full bg-hotrose/20 blur-xl"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
        </div>
      </motion.button>

      <AnimatePresence>
        {opened && (
          <motion.div
            className="mt-2 w-full max-w-3xl rounded-[2rem] border border-white/80 bg-white/82 p-5 shadow-soft backdrop-blur sm:p-8"
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <div className="scroll-fade max-h-[520px] overflow-y-auto rounded-[1.5rem] bg-[#fffdf8] p-5 sm:p-8">
              <div className="mb-5 flex items-center gap-3 text-deeprose">
                <WandSparkles className="h-6 w-6" />
                <span className="text-sm font-black uppercase tracking-[0.18em]">
                  A letter for you
                </span>
              </div>
              <div className="space-y-5 font-display text-2xl leading-10 text-ink sm:text-3xl sm:leading-[3.2rem]">
                {letterParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <motion.button
                type="button"
                onClick={() => setShowSong((value) => !value)}
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-extrabold text-white shadow-sticker outline-none ring-ink/20 focus-visible:ring-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
              >
                <Music2 className="h-5 w-5 text-fairy" />
                Click for our song
              </motion.button>
              <AnimatePresence>
                {showSong && (
                  <motion.div
                    className="mt-6 overflow-hidden rounded-2xl border border-hotrose/15 bg-blush p-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <iframe
                      title="Our song"
                      className="h-28 w-full rounded-xl"
                      src="https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v?utm_source=generator"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LoveQuestion({ onCelebrate }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const dodge = () => {
    setNoPosition({
      x: Math.round((Math.random() - 0.5) * 210),
      y: Math.round((Math.random() - 0.5) * 130)
    });
  };

  return (
    <div className="mx-auto mt-16 max-w-xl rounded-[2rem] border border-white/80 bg-white/75 p-5 text-center shadow-soft backdrop-blur sm:p-8">
      <h3 className="font-display text-3xl text-ink">Do you love me?</h3>
      <div className="relative mx-auto mt-6 h-28 w-full max-w-xs">
        <motion.button
          type="button"
          onClick={onCelebrate}
          className="absolute left-8 top-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-deeprose px-7 py-3 text-base font-black text-white shadow-glow outline-none ring-deeprose/25 focus-visible:ring-4"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          <Heart className="h-5 w-5 fill-white" />
          Yes!
        </motion.button>
        <motion.button
          type="button"
          onMouseEnter={dodge}
          onFocus={dodge}
          onPointerMove={dodge}
          className="absolute rounded-full border border-hotrose/20 bg-white px-6 py-3 text-base font-black text-ink shadow-sticker outline-none ring-hotrose/20 focus-visible:ring-4"
          style={{ left: "calc(50% + 36px)", top: 32 }}
          animate={noPosition}
          transition={{ type: "spring", stiffness: 300, damping: 14 }}
        >
          No
        </motion.button>
      </div>
    </div>
  );
}

function CelebrationModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[85] grid place-items-center bg-ink/40 p-5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-md rounded-[2rem] bg-white p-7 text-center shadow-soft"
            initial={{ y: 70, scale: 0.8, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 30, scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
          >
            <button
              type="button"
              aria-label="Close celebration"
              onClick={onClose}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-blush text-ink outline-none ring-hotrose/20 focus-visible:ring-4"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-deeprose shadow-glow">
              <Heart className="h-10 w-10 fill-white text-white" />
            </div>
            <h3 className="mt-6 font-display text-4xl text-ink">
              I knew it.
            </h3>
            <p className="mt-3 text-lg leading-7 text-ink/70">
              Correct answer unlocked: infinite kisses, unlimited cuddles, and a
              very proud boyfriend.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [gateOpen, setGateOpen] = useState(false);
  const [heartRainKey, setHeartRainKey] = useState(0);
  const [celebrating, setCelebrating] = useState(false);
  const typedRef = useRef("");

  const triggerHeartRain = () => {
    setHeartRainKey((key) => key + 1);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      typedRef.current = `${typedRef.current}${event.key.toLowerCase()}`.slice(-8);
      if (typedRef.current.includes("love")) {
        typedRef.current = "";
        triggerHeartRain();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!heartRainKey) return undefined;
    const timeout = window.setTimeout(() => setHeartRainKey(0), 6200);
    return () => window.clearTimeout(timeout);
  }, [heartRainKey]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper font-body text-ink">
      <FloatingHeartField />
      <AnimatePresence>
        {!gateOpen && <LandingGate onUnlock={() => setGateOpen(true)} />}
      </AnimatePresence>
      {heartRainKey > 0 && <HeartRain triggerKey={heartRainKey} />}
      <CelebrationModal
        open={celebrating}
        onClose={() => setCelebrating(false)}
      />

      <section className="relative z-10 flex min-h-[92svh] items-center px-5 pb-16 pt-24 sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-hotrose/20 bg-white/75 px-4 py-2 text-sm font-black text-deeprose shadow-sm backdrop-blur"
              whileHover={{ scale: 1.04 }}
              onMouseEnter={triggerHeartRain}
              onFocus={triggerHeartRain}
              tabIndex={0}
            >
              <Star className="h-4 w-4 fill-fairy text-deeprose" />
              Our anniversary: {anniversaryDate}
            </motion.div>
            <motion.h1
              className="max-w-3xl font-display text-5xl leading-[1.02] text-ink sm:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: gateOpen ? 1 : 0, y: gateOpen ? 0 : 40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              365 Days of Us
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: gateOpen ? 1 : 0, y: gateOpen ? 0 : 25 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              A soft little world full of memories, tiny surprises, hidden
              notes, and one very dramatic gift box.
            </motion.p>
          </div>

          <motion.div
            className="relative mx-auto aspect-square w-full max-w-md"
            initial={{ opacity: 0, scale: 0.82, rotate: 5 }}
            animate={{ opacity: gateOpen ? 1 : 0, scale: gateOpen ? 1 : 0.82, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.45 }}
          >
            <div className="absolute inset-8 rounded-[2.5rem] bg-white/70 shadow-soft backdrop-blur" />
            <motion.div
              className="absolute left-6 top-8 w-56 -rotate-6 rounded-[1.4rem] bg-white p-3 shadow-sticker sm:w-64"
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3.6, repeat: Infinity }}
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rosemist via-blush to-lavender" />
              <p className="mt-3 text-center font-display text-2xl">you + me</p>
            </motion.div>
            <motion.div
              className="absolute bottom-8 right-5 w-52 rotate-8 rounded-[1.4rem] bg-white p-3 shadow-sticker sm:w-60"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity }}
            >
              <div className="grid aspect-[4/3] place-items-center rounded-2xl bg-gradient-to-br from-fairy via-rosemist to-[#BDE7FF]">
                <Heart className="h-16 w-16 fill-hotrose text-deeprose" />
              </div>
              <p className="mt-3 text-center font-display text-2xl">forever-ish</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Timeline" title="365 Days of Us">
          A playful path through some of the little milestones that became our
          favorite memories.
        </SectionHeader>
        <div className="space-y-7">
          {timeline.map((item, index) => (
            <TimelineCard
              key={item.title}
              item={item}
              index={index}
              onBadgeHover={triggerHeartRain}
            />
          ))}
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Tiny Reasons" title="Why I Love You">
          Six little pastel surprises, each hiding a thing I adore about you.
        </SectionHeader>
        <LovePopper />
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Scrapbook" title="Our Polaroid Stack">
          A draggable stack for the photos that deserve dramatic white borders.
        </SectionHeader>
        <PolaroidCarousel />
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8">
        <SectionHeader eyebrow="Finale" title="Open the Gift">
          The last surprise is tucked inside the floating present.
        </SectionHeader>
        <GiftFinale />
        <LoveQuestion onCelebrate={() => setCelebrating(true)} />
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
