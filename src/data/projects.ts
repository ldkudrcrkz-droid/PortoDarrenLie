import type { Project } from "../types";

import taskweaver1 from "../projects/taskweaver/1.jpeg";
import taskweaver2 from "../projects/taskweaver/2.jpeg";
import taskweaver4 from "../projects/taskweaver/4.jpeg";

import calorIQ1 from "../projects/calorIQ/1.jpeg";
import calorIQ2 from "../projects/calorIQ/2.jpeg";
import calorIQ3 from "../projects/calorIQ/3.jpeg";
import calorIQ4 from "../projects/calorIQ/4.jpeg";

import sonata1 from "../projects/sonata/1.jpeg";
import sonata2 from "../projects/sonata/2.jpeg";

import roomtogrow1 from "../projects/roomtogrow/1.jpeg";
import roomtogrow2 from "../projects/roomtogrow/2.jpeg";
import roomtogrow3 from "../projects/roomtogrow/3.jpeg";
import roomtogrow4 from "../projects/roomtogrow/4.jpeg";

import measles1 from "../projects/measles/1.jpeg";
import measles2 from "../projects/measles/2.jpeg";
import measles3 from "../projects/measles/3.jpeg";
import measles4 from "../projects/measles/4.jpeg";

import speech1 from "../projects/speechcommand/1.png";
import speech2 from "../projects/speechcommand/2.png";
import speech3 from "../projects/speechcommand/3.jpeg";

import study1 from "../projects/studyflow/1.jpg";
import study2 from "../projects/studyflow/2.jpg";
import study3 from "../projects/studyflow/3.jpg";

export const projects: Project[] = [
  {
    n: "01",
    year: "2025",
    category: "WEB APPLICATION",
    title: "TASKWEAVER",
    status: "COMPLETED",
    role: "Frontend Developer",

    description:
      "A web-based AI task allocation platform designed to distribute group tasks fairly and reduce disagreements over workload.",

    problem:
      "Group projects rarely fail because the work is too hard — they fail because nobody agrees on who should do what. Task lists get built ad-hoc, workloads end up lopsided, and disagreements over \"who did more\" eat into time that should go toward the actual project. Our team wanted a tool that took that negotiation out of people's hands and made allocation feel fair by default.",

    solution:
      "TaskWeaver splits group work into tasks and distributes them using rules designed around fairness rather than seniority or volume. I built the frontend: the interface and dark mode, a set of reusable components used across the app, and the additional pages beyond the core flow. My main contribution was wiring up real-time chat with Socket-based communication so members could see each other's messages instantly, plus connecting the frontend to the backend and fixing the bugs that turned up along the way.",

    learnings:
      "This was my first real exposure to building with sockets instead of plain request/response APIs, and it changed how I think about state — a chat feed has to stay in sync across multiple clients, which forced me to be much more deliberate about where state lives and how it updates. I also learned how much a shared component library speeds up a five-person frontend: once the base components existed, new pages came together far faster.",

    technologies: ["React", "TypeScript", "Socket", "Frontend", "REST API"],

    images: [taskweaver1, taskweaver2, taskweaver4],

    links: [
      { label: "Frontend GitHub", url: "https://github.com/rfvvel/TaskWeaver" },
      {
        label: "Backend GitHub",
        url: "https://github.com/myxolorian/ProjectTaskWeaverBackend",
      },
    ],
  },

  {
    n: "02",
    year: "2025",
    category: "AI / NLP",
    title: "CALORIQ",
    status: "COMPLETED",
    role: "Frontend Developer",

    description:
      "An AI-powered application designed around food and nutritional information.",

    problem:
      "Tracking nutrition by hand is tedious enough that most people give up on it within a few days — searching for the right food entry, guessing at portion sizes, and doing the math yourself adds friction to something that should be quick. We wanted to see whether an NLP model could take a plain description of a meal and return useful nutritional information without the manual lookup.",

    solution:
      "CalorIQ was built by a three-person team. I owned the frontend implementation and the UI design in Figma, and worked on integrating that frontend with the backend and the underlying machine learning model. I also implemented parts of the nutritional formula logic and helped define the evaluation metrics used to judge the model's accuracy, so the numbers shown to the user were something we could actually stand behind.",

    learnings:
      "Working across the UI and the ML side at once taught me how much interface design depends on understanding the model behind it — the way results were structured and how confident the model was in them directly shaped how I presented information to the user. I came away with a much better sense of how to connect a user-facing interface to a machine learning backend, and why evaluation metrics matter beyond just the notebook they're computed in.",

    technologies: ["React", "TypeScript", "Figma", "NLP", "Machine Learning"],

    images: [calorIQ1, calorIQ2, calorIQ3, calorIQ4],

    links: [
      {
        label: "GitHub",
        url: "https://github.com/ldkudrcrkz-droid/NLP-CalorIQ-",
      },
    ],
  },

  {
    n: "03",
    year: "2026",
    category: "MUSIC APPLICATION",
    title: "SONATA",
    status: "COMPLETED",
    role: "Backend Developer",

    description:
      "A desktop-oriented music player designed to scan a local music directory and organize downloaded songs for playback.",

    problem:
      "Music downloaded from scattered sources tends to pile up in one folder with no structure — mismatched metadata, duplicate files, and no easy way to browse it like a real library. We wanted a desktop player that treated a local folder as a first-class music library instead of forcing everything through a streaming service.",

    solution:
      "Sonata is a self-initiated, three-person project. I worked primarily on the backend in C#, building the logic that scans a local directory, reads file metadata, and organizes songs for playback, while also contributing to debugging and to the integration between that backend and the React-based frontend. The result is an app that treats your own downloaded music the way a streaming app treats its catalogue.",

    learnings:
      "This was my deepest backend project in C# and .NET so far, and it pushed me to think carefully about file I/O performance and how to keep a scanning process from blocking the UI. Working at the seam between a C# backend and a React frontend also sharpened how I think about API contracts — small mismatches in what each side expected caused most of our early bugs.",

    technologies: ["C#", ".NET", "React", "TypeScript", "REST API"],

    images: [sonata1, sonata2],

    links: [
      {
        label: "Frontend GitHub",
        url: "https://github.com/Pr13stess/SonataFrontend",
      },
      {
        label: "Backend GitHub",
        url: "https://github.com/ldkudrcrkz-droid/SonataBackend",
      },
    ],
  },

  {
    n: "04",
    year: "2026",
    category: "GAME DEVELOPMENT",
    title: "ROOM TO GROW",
    status: "COMPLETED",
    role: "3D Designer",

    description:
      "A game-jam project created during a seven-day game development challenge.",

    problem:
      "The brief for the jam was open-ended and the clock was not: a four-person team had seven days to go from concept to a playable game, which meant every asset had to be built fast without looking unfinished. My specific problem was producing a coherent set of 3D environment pieces quickly enough that the rest of the team could build levels around them well before the deadline.",

    solution:
      "Room to Grow was made as part of BINUS's S Class Program additional game development track. As 3D Designer, I modeled the environmental assets in Blender — furniture and other objects placed throughout the game world — keeping a consistent style and a low enough poly count that the game ran smoothly within Unity.",

    learnings:
      "Game jams are a crash course in scoping: I learned to block out a rough asset first and only add detail once I knew it would actually be visible and used in a level, rather than polishing something that might get cut. Working inside a hard seven-day deadline also taught me to communicate asset needs with the rest of the team early, instead of discovering mismatches during integration.",

    technologies: ["Blender", "Unity", "3D Modeling", "Game Development"],

    images: [roomtogrow1, roomtogrow2, roomtogrow3, roomtogrow4],

    links: [
      {
        label: "Play / Project Page",
        url: "https://jlhady.itch.io/room-to-grow",
      },
    ],
  },

  {
    n: "05",
    year: "2025",
    category: "MACHINE LEARNING",
    title: "MEASLES FORECASTING",
    status: "COMPLETED",
    role: "Machine Learning Researcher",

    description:
      "A research project investigating machine learning approaches for forecasting measles cases in tropical countries.",

    problem:
      "Measles outbreaks in tropical countries follow patterns that are harder to forecast than in temperate climates, where seasonality is more predictable. Public health planning benefits from knowing likely case counts ahead of time, but there was limited comparative work on which forecasting approach actually performs best for this kind of data.",

    solution:
      "We compared several forecasting approaches head to head: Random Forest, ARIMA, and XGBoost. I worked extensively on the machine learning experimentation — preparing the data, tuning each model, and comparing their forecasts — and wrote a large portion of the resulting research paper.",

    learnings:
      "The biggest lesson was that feature selection and dataset size mattered more to forecast quality than which algorithm we used — a well-chosen feature set with a simpler model consistently outperformed a more complex model with weaker inputs. It also gave me firsthand experience with how much rigor academic research demands compared to a typical class project, from documenting methodology to justifying every modeling decision in writing.",

    technologies: [
      "Python",
      "Random Forest",
      "ARIMA",
      "XGBoost",
      "Machine Learning",
    ],

    images: [measles1, measles2, measles3, measles4],
  },

  {
    n: "06",
    year: "2026",
    category: "DEEP LEARNING",
    title: "SPEECH COMMANDMENT",
    status: "IN DEVELOPMENT",
    role: "Machine Learning Developer",

    description:
      "A speech command recognition project using deep learning techniques.",

    problem:
      "Voice-controlled interfaces need to recognize a small set of spoken commands quickly and reliably, even with background noise and different speakers' accents and pacing. I wanted to understand, hands-on, what it actually takes to go from raw audio to a model that recognizes commands with usable accuracy.",

    solution:
      "Speech Commandment is my ongoing project to build that pipeline end to end: preparing and cleaning audio data, engineering a recognition pipeline suited to short spoken commands, training a deep learning model on the result, and evaluating how well it performs against unseen speakers.",

    learnings:
      "Audio has turned out to be a much messier signal to work with than the tabular and text data I'd used before — background noise, recording quality, and differences in how people speak the same word all had a bigger effect on accuracy than I expected. It has pushed me to get more comfortable with audio preprocessing and with evaluating a model on more than just a single accuracy number.",

    technologies: [
      "Python",
      "Deep Learning",
      "Audio Processing",
      "Speech Recognition",
    ],

    images: [speech1, speech2, speech3],

    links: [
      {
        label: "GitHub",
        url: "https://github.com/ldkudrcrkz-droid/SpeechCommandRecog",
      },
    ],
  },

  {
    n: "07",
    year: "2026",
    category: "LLM APPLICATION",
    title: "STUDYFLOW AI",
    status: "COMPLETED",
    role: "AI Developer",

    description:
      "A RAG and LLM powered study assistant that analyzes uploaded assignment PDFs and generates suggested questions from their content.",

    problem:
      "Assignment briefs are long, dense PDFs, and students often spend more time working out what is being asked than actually doing the work. A generic chatbot doesn't help much here because it has never seen the document and tends to answer from general knowledge instead of the brief in front of you.",

    solution:
      "StudyFlow AI (AIStudyManager) takes an uploaded assignment PDF, indexes its content, and uses retrieval-augmented generation so the LLM answers from the document itself. It generates suggested questions straight from the PDF to get a student started. I'm currently migrating the vector storage to Supabase with pgvector.",

    learnings:
      "Building it showed me that the quality of a RAG system depends as much on how the document is chunked and retrieved as on the LLM itself. Moving to a managed vector database is also teaching me how to structure storage for retrieval rather than just for saving data.",

    technologies: ["RAG", "LLM", "Supabase", "pgvector"],

    images: [study1, study2, study3],

     links: [
      {
        label: "GitHub",
        url: "https://github.com/ldkudrcrkz-droid/StudyReader",
      },

      {
        label: "deploy link",
        url: "https://study-reader-six.vercel.app/"
      },
    ],
    
  },
];