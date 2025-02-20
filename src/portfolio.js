/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Lalith Sagar J",
  title: "Hi all, I'm Lalith Sagar",
  subTitle: emoji(
    "I am a results-driven DevOps Engineer with expertise in cloud automation, CI/CD pipelines, and infrastructure as code using tools like GCP, Kubernetes, Terraform, and Ansible. Passionate about optimizing workflows, enhancing system reliability, and driving efficient deployments in cloud environments."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lr4PF4MynbU0Ye0E8fFpCVOpsYTFtDis/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/lalith-sagar-j-43aa67175/",
  gmail: "jlalithsagar@gmail.com",
  medium: "https://medium.com/@jlalithsagar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AUTOMATION-DRIVEN DEVOPS ENGINEER WHO LOVES SCALABILITY & SECURITY",
  skills: [
    emoji("⚡ Build and automate CI/CD pipelines for seamless deployments 🚀"),
    emoji("⚡ Design scalable cloud infrastructure with GCP, Azure & Kubernetes ☁️"),
    emoji("⚡ Infrastructure as Code (IaC) using Terraform & Ansible 🔧"),
    emoji("⚡ Optimize system performance with monitoring & logging 📊"),
    emoji("⚡ Secure cloud environments with best DevSecOps practices 🔐"),
    emoji("⚡ Containerization & orchestration with Docker and Kubernetes 🐳"),
    emoji("⚡ Automate workflows to eliminate manual intervention ⚙️"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "fas fa-network-wired"
  },
  {
    skillName: "Terraform",
    fontAwesomeClassname: "fas fa-cubes"
  },
  {
    skillName: "Ansible",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "Jenkins",
    fontAwesomeClassname: "fas fa-tools"
  },
  {
    skillName: "CI/CD",
    fontAwesomeClassname: "fas fa-sync-alt"
  },
  {
    skillName: "Cloud (GCP/Azure)",
    fontAwesomeClassname: "fab fa-cloudversify"
  },
  {
    skillName: "Shell Scripting",
    fontAwesomeClassname: "fas fa-terminal"
  },
  {
    skillName: "Monitoring & Logging",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "Pentesting",
    fontAwesomeClassname: "fas fa-user-secret"
  },
  {
    skillName: "Kali Linux",
    fontAwesomeClassname: "fas fa-user-ninja"
  },
  {
    skillName: "Metasploit",
    fontAwesomeClassname: "fas fa-bomb"
  },
  {
    skillName: "Burp Suite",
    fontAwesomeClassname: "fas fa-bug"
  },
  {
    skillName: "Wireshark",
    fontAwesomeClassname: "fas fa-network-wired"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dayananda Sagar University",
      logo: require("./assets/images/dsuLogo.png"), // Ensure the logo exists
      subHeader: "B.Tech in Computer Science",
      duration: "2018 - 2022",
      desc: "Graduated with a minor in Cyber Security, achieving an 8.8 CGPA.",
      descBullets: [
        "Focused on Cyber Security, DevOps, and Cloud Technologies.",
        "Completed hands-on projects in Infrastructure Automation and Cloud Security."
      ]
    },
    {
      schoolName: "SFS PU College",
      logo: require("./assets/images/sfsLogo.png"), // Ensure the logo exists
      subHeader: "PUC in Science (PCMC)",
      duration: "2016 - 2018",
      desc: "Completed pre-university education with a 92.5% score.",
      descBullets: [
        "Excelled in Mathematics and Computer Science.",
        "Actively participated in extracurricular activities."
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show the Proficiency Section
  proficiency: [
    {
      Stack: "DevOps & Cloud Infrastructure",
      progressPercentage: "90%"
    },
    {
      Stack: "CI/CD & Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "Infrastructure as Code (IaC)",
      progressPercentage: "80%"
    },
    {
      Stack: "Monitoring & Logging",
      progressPercentage: "75%"
    },
    {
      Stack: "Shell Scripting & Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "Containerization (Docker & Kubernetes)",
      progressPercentage: "80%"
    },
  ],
  additionalSkills: [
    {
      Stack: "Networking & Firewalls",
      progressPercentage: "70%"
    },
    {
      Stack: "Security & Ethical Hacking",
      progressPercentage: "85%"
    },
    {
      Stack: "Penetration Testing",
      progressPercentage: "80%"
    },
    {
      Stack: "Version Control (Git, GitLab, GitHub)",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Security & IAM",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: true, // Set to true to show workExperiences section
  experience: [
    {
      role: "DevOps Engineer",
      company: "Verse Innovations",
      companylogo: require("./assets/images/verseInnovationsLogo.png"), // Ensure this logo exists
      date: "June 2024 – Present",
      desc: "Specializing in infrastructure automation, cloud migration, and CI/CD implementation with GCP and GKE.",
      descBullets: [
        "Expertise in Linux system administration, server management, and automation through shell scripting.",
        "Built and managed CI/CD pipelines using Jenkins and GitLab for fast and reliable software delivery.",
        "Implemented infrastructure-as-code with Ansible, Terraform, and Docker for automated cloud deployments.",
        "Enhanced real-time monitoring and logging, improving operational efficiency and issue resolution."
      ]
    },
    {
      role: "Associate DevOps Engineer",
      company: "Verse Innovations",
      companylogo: require("./assets/images/verseInnovationsLogo.png"),
      date: "September 2022 – May 2024",
      desc: "Worked on cloud automation, CI/CD pipelines, and infrastructure scalability.",
      descBullets: [
        "Assisted in cloud migration projects, ensuring smooth transitions of applications to GCP and Azure.",
        "Supported design and maintenance of CI/CD workflows for automated deployments.",
        "Collaborated on infrastructure automation tasks including server provisioning and monitoring."
      ]
    },
    {
      role: "DevOps Intern",
      company: "Verse Innovations",
      companylogo: require("./assets/images/verseInnovationsLogo.png"),
      date: "March 2022 – August 2022",
      desc: "Gained hands-on experience in Linux administration, cloud infrastructure, and CI/CD automation.",
      descBullets: [
        "Configured and supported CI/CD pipelines to streamline development workflows.",
        "Assisted in cloud infrastructure management, including security and process automation.",
        "Worked on Linux system administration and performance monitoring."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "GCP Cloud Engineer",
      subtitle:
        "Google Cloud Certified - Associate Cloud Engineer",
      image: require("./assets/images/gcpLogo.png"),
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/a014c2b3-9685-4b54-93b6-36ba88030a2e/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+919148147362",
  email_address: "jlalithsagar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
