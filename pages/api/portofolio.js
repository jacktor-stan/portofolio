// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cors from "cors";

const cors = Cors({
  methods: ["GET"],
});

export default async function handler(req, res) {
  cors(req, res, async () => {
    res.status(200).json({
      data,
    });
  });
}

const data = [
  {
    link: "https://github.com/jacktor-stan/battery-lab",
    thubmnail: "/images/portofolio/battery_lab.png",
    alt: "Battery Lab",
    title: "Battery Lab",
    excerpt:
      "Aplikasi Android untuk memantau status baterai berserta fitur lainnya, ini adalah fork Capacity Info",
    techs: ["Android", "Android Studio", "Kotlin", "Java", "C++"],
  },
  {
    link: "https://github.com/jacktor-stan/BNotifier",
    thubmnail: "/images/portofolio/bnotifier.png",
    alt: "BNotifier",
    title: "BNotifier",
    excerpt:
      "Aplikasi Android sederhana untuk memantau status baterai, Ini adalah aplikasi native pertama saya",
    techs: ["Android", "Android Studio", "Kotlin"],
  },
  {
    link: "https://github.com/jacktor-stan/mlpi",
    thubmnail: "/images/portofolio/mlpi.png",
    alt: "MLPI - CRUD, Login Dan Register",
    title: "MLPI - CRUD, Login Dan Register",
    excerpt:
      "Website CRUD sederhana dengan Login dan Register, sebagai bahan pembelajaran",
    techs: ["Web", "PHP", "Bootstrap", "Abandoned"],
  },
  {
    link: "https://github.com/jacktor-stan/portofolio",
    thubmnail: "/images/portofolio/portofolio.png",
    alt: "Web Portofolio",
    title: "Web Portofolio",
    excerpt:
      "Web Portofolio dibuat menggunakan NextJS dan Tailwind CSS",
    techs: ["Web", "NextJS", "ReactJS", "TailwindCSS"],
  },
  {
    link: "https://github.com/jacktor-stan/FastSocial",
    thubmnail: "/images/portofolio/webview.png",
    alt: "FastSocial - Android WebView",
    title: "FastSocial - Android WebView",
    excerpt:
      "Aplikasi Android WebView sederhana",
    techs: ["Android", "Android Studio", "Kotlin"],
  },
  {
    link: "https://github.com/jacktor-stan/nusa-town",
    thubmnail: "/images/portofolio/nusa-town.png",
    alt: "Nusa Town",
    title: "Nusa Town",
    excerpt:
      "Game berbasis WebGL, Fork dari Pony Town [Custom Server]",
    techs: ["Web", "WebGL", "TypeScript", "JavaScript"],
  },
  {
    link: "https://drive.google.com/drive/folders/1rZ_ITOFkMewn9kHc7R7DhuVdBvkQCyYy?usp=sharing",
    thubmnail: "/images/portofolio/jacktor_adventure.png",
    alt: "Jacktor Adventure",
    title: "Jacktor Adventure",
    excerpt:
      "Game 2D Platformer Android, pengembangan lanjutan dari Jacktor: Land Adventure",
    techs: ["Android", "Unity", "C#"],
  },
  {
    link: "https://drive.google.com/drive/folders/17acnM77IumvUKx-9ne7TySobWKs6CSDD?usp=sharing",
    thubmnail: "/images/portofolio/jacktor_land_adventure.png",
    alt: "Jacktor: Land Adventure",
    title: "Jacktor: Land Adventure",
    excerpt:
      "Game 2D Platformer Windows, dikembangkan pada masa Covid-19",
    techs: ["Windows", "Unity", "C#", "Abandoned"],
  },
  {
    link: "https://drive.google.com/drive/folders/1TlQi2x910lc-Y-Dnja26XF4_K_US1gut?usp=sharing",
    thubmnail: "/images/portofolio/mr-package.png",
    alt: "MR Package - Mobile App",
    title: "MR Package - Mobile App",
    excerpt:
      "Aplikasi MR Package versi WebView",
    techs: ["Android", "Android Studio", "Flutter", "Dart"],
  },
];
