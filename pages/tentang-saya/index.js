import Metadata from "@/components/utilities/metadata";
import {
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <Metadata
        title="Portofolio - Tentang Saya"
        description="Saya adalah seorang Junior Web Developer, Network Technician, System Administrator"
        image="/metadata/home.png"
        url="tentang-saya"
      />

      <section className="pb-32 pt-32 transition duration-300 ease-in-out dark:bg-dark lg:pt-44">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h4 className="mb-3 text-lg font-bold uppercase text-primary">
                Tentang Saya
              </h4>

              <h2 className="mb-5 max-w-lg text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                Berdasarkan Pengalaman
              </h2>
                <br/>
              <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
                Saya seorang Junior Web Developer yang berawal dari rasa penasaran 
                dan semua yang dilakukan adalah hasil otodidak, bukan hanya soal software saya paham soal hardware 
                dan pernah memperbaiki komputer
              </p>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white lg:pt-10 lg:text-4xl">
                Mari Berteman
              </h2>

              <p className="mb-6 text-base font-medium text-secondary lg:mt-14 lg:text-lg">
                Jangan ragu untuk mengituki Saya di berbagai akun media sosial
                yang ada di bawah ini. Saya sangat berharap dapat terhubung
                dengan Anda dan menjalin persahabatan yang lebih dekat. Terima
                kasih atas kunjungannya
              </p>

              <div className="flex items-center">
                {/* Github */}
                <a
                  href="https://github.com/jacktor-stan"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaGithub className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    GitHub
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/deniliandi29/"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaFacebook className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    Facebook
                  </span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
