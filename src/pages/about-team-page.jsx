import lim from "../assets/img/profile/lim.png";
import peligro from "../assets/img/profile/peligro.png";
import barotilla from "../assets/img/profile/barotilla.png";
import sombe from "../assets/img/profile/sombe.png";
import bolleser from "../assets/img/profile/bolleser.png";
import petalcorin from "../assets/img/profile/petalcorin.png";

const people = [
  {
    name: "Rinaldo Samudio Lim Jr.",
    role: "Project Manager & Embedded System Engineer",
    imageUrl: lim,
  },

  {
    name: "Justin C. Peligro",
    role: "Software Engineer",
    imageUrl: peligro,
  },

  {
    name: "Jhon Carlo Barotilla",
    role: "Product Design Engineer",
    imageUrl: barotilla,
  },

  {
    name: "Christian Nerio Sombe",
    role: "Product Design Engineer",
    imageUrl: sombe,
  },

  {
    name: "Aaron Jan T. Bolleser",
    role: "Embedded System Engineer",
    imageUrl: bolleser,
  },

  {
    name: "Mark Petalcorin",
    role: "Research and Development Engineer",
    imageUrl: petalcorin,
  },
  // More people...
];

export default function AboutTeam() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We are students from Rizal Technological University - Boni Campus,
            passionate about technology and innovation. Dedicated to developing
            smart healthcare solutions, we strive to create impactful and
            user-friendly applications for better health management.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
