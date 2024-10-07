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
    <div className="relative">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: colors.background
              }
            },
            particles: {
              color: {
                value: [
                  "#FFAEBC",
                  "#A0E7E5",
                  "#B4F8C8",
                  "#FBE7C6",
                  "#FFC9AE",
                  "#FFAEE5",
                  "#A0C6E7",
                  "#A0E7C2",
                  "#B4F8EA",
                  "#C2F8B4",
                  "#F4FBC6",
                  "#FBCDC6"
                ]
              },
              move: {
                angle: {
                  offset: 0,
                  value: 50
                },
                direction: "bottom",
                enable: true,
                outModes: {
                  default: "split"
                },
                speed: 3
              },
              number: {
                value: 300
              },
              opacity: {
                value: 1
              },
              shape: {
                type: "heart"
              },
              size: {
                value: 16
              },
              roll: {
                darken: {
                  enable: true,
                  value: 30
                },
                enlighten: {
                  enable: true,
                  value: 30
                },
                enable: true,
                mode: "horizontal",
                speed: {
                  min: 5,
                  max: 15
                }
              },
              zIndex: {
                value: {
                  min: 0,
                  max: 100
                },
                opacityRate: 0,
                velocityRate: 2
              }
            }
          }}
          className="absolute z-10"
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
