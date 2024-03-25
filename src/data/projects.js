import technologies from "./technologies";
import clients from "./clients";
import CRMImage from "@/assets/images/projects/crm.svg";
import SkillmateImage from "@/assets/images/projects/skillmate.svg";
import TaskImage from "@/assets/images/projects/task.svg";

export default [
  {
    id: 1,
    title: "CRM Solution",
    description: `This project is a locally hosted application designed to efficiently manage clients and organizations. 
    It features a user-friendly interface that allows for seamless creation, retrieval, updating, 
    and deletion (CRUD) operations for both clients and organizations. The system enables users 
    to establish associations between clients and organizations, facilitating comprehensive relationship management. 
    This feature-rich solution enhances efficiency and streamlines business processes 
    by providing a centralized platform for effective client and organization administration.`,
    technologies: [technologies[0], technologies[6]],
    client: clients[0],
    image: CRMImage,
  },
  {
    id: 2,
    title: "Skillmate",
    description: `Introducing Skillmate! An innovative web application that bridges the gap in the IT domain. 
    Skillmate connects individuals seeking IT services with passionate professionals ready to provide them. 
    Whether it's technical assistance or expert advice, Skillmate fosters collaboration and community within the IT realm.`,
    repo: "https://github.com/mehmetozdemir23/skillmate",
    demo: "https://skillmate.mehmetozdemir.fr",
    technologies: [technologies[1]],
    client: null,
    image: SkillmateImage,
  },
  {
    id: 3,
    title: "Smart Task Organizer",
    description: `This project is a task management web application developed using Laravel 10 as the API;
        Vue 3 composition API and Tailwind CSS as the frontend.
        The application allows users to perform CRUD operations on tasks and categories without requiring a user account or login.
        The application includes a dashboard that displays tasks that are due today and categories that have tasks in progress.
        This feature allows users to quickly see what tasks need to be completed and prioritize their workload accordingly.
        The Vue 3 composition API is used to manage the application state and handle complex logic.
        Tailwind CSS is used to create a clean and modern user interface that is both visually appealing and functional.
        This project showcases my skills in Laravel, Vue 3, and Tailwind CSS, and demonstrates my ability to develop a feature-rich web application that is both user-friendly and efficient.`,
    repo: "https://github.com/mehmetozdemir23/task-manager",
    technologies: [technologies[0], technologies[1]],
    image: TaskImage,
  },
];
