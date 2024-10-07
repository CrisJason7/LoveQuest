import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { loadAll } from "@tsparticles/all";
import Particles from "@tsparticles/react";
import { Container } from "@tsparticles/engine";
import { initParticlesEngine } from "@tsparticles/react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import colors from "../constants/colors";

const MainLayout: React.FC = () => {
  const [init, setInit] = useState<boolean>(false);

  const particlesLoaded = async (container?: Container | undefined) => {
    console.log(container);
  };

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div
      className="relative min-h-screen"
      style={{
        background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`
      }}
    >
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            particles: {
              color: {
                value: [
                  "#FFAEBC",
                  "#A0E7E5",
                  "#B4F8C8",
                  "#FBE7C6",
                  "#FFC9AE",
                  "#FFAEE5"
                ]
              },
              move: {
                angle: {
                  offset: 0,
                  value: 45
                },
                direction: "bottom",
                enable: true,
                outModes: {
                  default: "out"
                },
                speed: 2
              },
              number: {
                value: 150
              },
              opacity: {
                value: 0.7
              },
              shape: {
                type: "heart"
              },
              size: {
                value: 10
              },
              roll: {
                darken: {
                  enable: true,
                  value: 10
                },
                enlighten: {
                  enable: true,
                  value: 20
                },
                enable: true,
                mode: "horizontal",
                speed: {
                  min: 3,
                  max: 8
                }
              },
              zIndex: {
                value: {
                  min: 0,
                  max: 50
                },
                opacityRate: 0.5,
                velocityRate: 1
              }
            }
          }}
          className="absolute inset-0 z-10"
        />
      )}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />

        <div className="content-wrapper">
          <main className="flex-grow container mx-auto px-4 py-8">
            <Outlet />
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
