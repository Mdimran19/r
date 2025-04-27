import React from "react";

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "Mongoose"] },
    { category: "DevOps", items: ["Docker", "CI/CD pipelines", "Linux", "AWS", "Kubernetes"] },
    { category: "Tools", items: ["Git", "GitHub", "VSCode", "Postman"] },
    { category: "Currently Learning", items: ["Python", "Django", "AI Automation Tools"] },
  ];

  return (
    <section className="p-8 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
        {skills.map((skillGroup, index) => (
          <div key={index} className=" rounded-2xl p-6 shadow-[7px_7px_0px_0px_black] hover:bg-white">
            <h3 className="text-2xl font-semibold mb-4">{skillGroup.category}</h3>
            <ul className="list-disc list-inside space-y-2">
              {skillGroup.items.map((item, idx) => (
                <li key={idx} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
