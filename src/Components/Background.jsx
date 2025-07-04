import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Background() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      {/* Futuristic Background Gradient */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-[#000d1a] via-[#001a33] to-[#000c1f]" />

      {/* Animated Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            number: { value: 90 },
            color: { value: '#66ccff' },
            links: {
              enable: true,
              distance: 120,
              color: '#00bcd4',
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.6 },
          },
        }}
        className="fixed inset-0 w-full h-full -z-40"
      />

      {/* Glowing animated blobs */}
      <div className="fixed top-[-6rem] left-[-6rem] w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse -z-30" />
      <div className="fixed bottom-[-6rem] right-[-6rem] w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-[wiggle_10s_ease-in-out_infinite] -z-30" />
    </>
  );
}
