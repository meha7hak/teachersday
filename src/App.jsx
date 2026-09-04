import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Mail,
  Trophy,
  Sprout,
  PenLine,
  MessageCircle,
  Heart,
  RotateCcw,
  X,
} from "lucide-react";
import "./App.css";

const messages = {
  lessons: {
    title: "Lessons I'll Always Remember",
    icon: <BookOpen size={45} />,
    text: "You taught me that learning is not just about marks or exams. It is about being curious, asking questions, making mistakes, and trying again.",
  },
  guidance: {
    title: "Thank You for Your Guidance",
    icon: <PenLine size={45} />,
    text: "Whenever I felt confused or lost, your words helped me find my way. Your guidance has shaped not only what I know, but who I am becoming.",
  },
  achievements: {
    title: "You Helped Me Believe",
    icon: <Trophy size={45} />,
    text: "Every achievement feels a little more special because there was a teacher who believed in me before I learned to believe in myself.",
  },
  growth: {
    title: "You Helped Me Grow",
    icon: <Sprout size={45} />,
    text: "Like a plant needs sunlight and care, students need someone who believes in their potential. Thank you for helping me grow.",
  },
};

const petals = Array.from({ length: 20 });

function App() {
  const [started, setStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const [selected, setSelected] = useState(null);
  const [letterOpen, setLetterOpen] = useState(false);
  const [personalized, setPersonalized] = useState(false);
  const [finalScreen, setFinalScreen] = useState(false);

  const [teacherName, setTeacherName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [personalMessage, setPersonalMessage] = useState("");

  // LIVE CLOCK
  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date());
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;

  const resetProject = () => {
    setStarted(false);
    setSelected(null);
    setLetterOpen(false);
    setPersonalized(false);
    setFinalScreen(false);
    setTeacherName("");
    setStudentName("");
    setPersonalMessage("");
  };

  if (!started) {
    return (
      <div className="landing">
        <motion.div
          className="landing-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="landing-flower">✿</div>

          <p className="eyebrow">
            A little something for every teacher
          </p>

          <h1>
            The Classroom
            <span>of Gratitude</span>
          </h1>

          <p className="intro">
            Every classroom has a teacher who leaves a little bit
            of themselves in every student.
          </p>

          <div className="name-section">
            <label htmlFor="teacher-name">
              Who are we thanking today?
            </label>

            <input
              id="teacher-name"
              type="text"
              placeholder="Enter your teacher's name"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              maxLength={40}
            />

            <button
              onClick={() => setStarted(true)}
              disabled={!teacherName.trim()}
            >
              Enter the Classroom
              <span>→</span>
            </button>
          </div>

          <p className="landing-footer">
            Made with gratitude ❤️
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="classroom">

      {/* WALL LIGHT */}
      <div className="wall-light wall-light-one" />
      <div className="wall-light wall-light-two" />

      {/* WINDOW */}
      <div className="window">
        <div className="window-sky">
          <div className="sun" />

          <div className="cloud cloud-one">
            <span />
            <span />
          </div>

          <div className="cloud cloud-two">
            <span />
            <span />
          </div>

          <div className="window-frame vertical" />
          <div className="window-frame horizontal" />
        </div>
      </div>

      {/* CLOCK */}
      <div className="clock">
        <span className="clock-number number-12">12</span>
        <span className="clock-number number-3">3</span>
        <span className="clock-number number-6">6</span>
        <span className="clock-number number-9">9</span>

        <div
          className="clock-hand hour"
          style={{
            transform: `translateX(-50%) rotate(${hourAngle}deg)`,
          }}
        />

        <div
          className="clock-hand minute"
          style={{
            transform: `translateX(-50%) rotate(${minuteAngle}deg)`,
          }}
        />

        <div
          className="clock-hand second"
          style={{
            transform: `translateX(-50%) rotate(${secondAngle}deg)`,
          }}
        />

        <div className="clock-center" />
      </div>

      {/* BLACKBOARD */}
      <div className="blackboard">
        <p>SEPTEMBER 5 • TEACHER'S DAY</p>

        <h2>
          Thank You,
          <br />
          {teacherName}!
        </h2>

        <div className="board-line" />

        <span>You made a difference.</span>
      </div>

      <p className="click-hint">
        ✦ Click around the classroom ✦
      </p>

      {/* CLASSROOM FLOOR */}
      <div className="classroom-floor">

        {/* FIVE CARDS IN ONE ROW */}
        <div className="objects-row">

          <motion.button
            className="object"
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected("lessons")}
          >
            <BookOpen size={42} />
            <span>Lessons</span>
          </motion.button>

          <motion.button
            className="object"
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected("guidance")}
          >
            <PenLine size={42} />
            <span>Guidance</span>
          </motion.button>

          <motion.button
            className="object letter-object"
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLetterOpen(true)}
          >
            <Mail size={42} />
            <span>My Letter</span>
          </motion.button>

          <motion.button
            className="object"
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected("achievements")}
          >
            <Trophy size={42} />
            <span>Achievements</span>
          </motion.button>

          <motion.button
            className="object"
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected("growth")}
          >
            <Sprout size={42} />
            <span>Growth</span>
          </motion.button>

        </div>

        {/* TEACHER DESK */}
        <div className="teacher-desk">
          <div className="desk-top">

            <div className="book-stack">
              <div />
              <div />
              <div />
            </div>

            <div className="desk-lamp">✦</div>

            <div className="coffee-cup">☕</div>
          </div>

          <div className="desk-front">
            <span>TEACHER</span>
          </div>
        </div>
      </div>

      {/* STUDENT DESKS */}
      <div className="student-desks">

        {[1, 2, 3].map((desk) => (
          <div className="student-desk" key={desk}>
            <div className="student-top">
              <div className="student-book" />
            </div>

            <div className="student-leg left" />
            <div className="student-leg right" />
          </div>
        ))}

      </div>

      {/* PLANT */}
      <div className="plant-decoration">
        <div className="plant-pot" />
        <div className="plant-stem" />
        <div className="leaf leaf-one" />
        <div className="leaf leaf-two" />
        <div className="leaf leaf-three" />
        <div className="leaf leaf-four" />
      </div>

      {/* WALL QUOTE */}
      <div className="wall-quote">
        <Heart size={15} />
        <span>Teach • Inspire • Believe</span>
      </div>

      {/* MESSAGE MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="message-card"
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setSelected(null)}
              >
                <X size={20} />
              </button>

              <div className="message-icon">
                {messages[selected].icon}
              </div>

              <h2>{messages[selected].title}</h2>

              <p>{messages[selected].text}</p>

              <div className="heart">♡</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PERSONALIZATION MODAL */}
      <AnimatePresence>
        {personalized && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPersonalized(false)}
          >
            <motion.div
              className="personal-card"
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setPersonalized(false)}
              >
                <X size={20} />
              </button>

              <div className="message-icon">
                <MessageCircle size={45} />
              </div>

              <h2>Your Turn ✍️</h2>

              <p className="personal-subtitle">
                Make this little gift truly yours.
              </p>

              <input
                className="personal-input"
                type="text"
                placeholder="Your name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                maxLength={40}
              />

              <textarea
                className="personal-textarea"
                placeholder="Write something you'd like to say to your teacher..."
                value={personalMessage}
                onChange={(e) => setPersonalMessage(e.target.value)}
                maxLength={300}
                rows={5}
              />

              <div className="character-count">
                {personalMessage.length}/300
              </div>

              <button
                className="save-message"
                onClick={() => setPersonalized(false)}
                disabled={
                  !studentName.trim() &&
                  !personalMessage.trim()
                }
              >
                Add to My Letter ✨
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LETTER */}
      <AnimatePresence>
        {letterOpen && (
          <motion.div
            className="letter-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <div className="petals">
              {petals.map((_, index) => (
                <motion.span
                  key={index}
                  className="petal"
                  initial={{
                    y: -50,
                    x: `${(index * 47) % 100}vw`,
                    rotate: 0,
                    opacity: 0,
                  }}
                  animate={{
                    y: "100vh",
                    rotate: 360,
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 6 + (index % 4),
                    delay: (index % 6) * 0.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ✿
                </motion.span>
              ))}
            </div>

            <motion.div
              className="letter-card"
              initial={{
                opacity: 0,
                scale: 0.7,
                rotateX: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
              }}
              transition={{
                duration: 0.9,
                type: "spring",
              }}
            >
              <button
                className="letter-close"
                onClick={() => setLetterOpen(false)}
              >
                <X size={20} />
              </button>

              <div className="letter-stamp">🌷</div>

              <p className="letter-date">
                September 5, 2026
              </p>

              <h2>
                Dear {teacherName || "Teacher"},
              </h2>

              <p className="letter-text">
                Some lessons are written on blackboards.
                Some are written in notebooks.
                But the most important ones stay with us
                long after we leave the classroom.
              </p>

              <p className="letter-text">
                Thank you for every lesson, every correction,
                every word of encouragement, and every moment
                you chose to believe in your students.
              </p>

              <p className="letter-text">
                You didn't just teach subjects.
                <br />
                You helped us become better versions of ourselves.
              </p>

              {personalMessage && (
                <div className="personal-message">
                  <div className="personal-message-icon">
                    <MessageCircle size={17} />
                  </div>

                  <p>{personalMessage}</p>
                </div>
              )}

              <div className="letter-signature">
                With gratitude,
                <br />
                <strong>
                  {studentName || "Your Student"} ❤️
                </strong>
              </div>

              <motion.div
                className="final-message"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                }}
              >
                Happy Teacher's Day! 🌷
              </motion.div>

              <button
                className="finish-button"
                onClick={() => {
                  setLetterOpen(false);
                  setFinalScreen(true);
                }}
              >
                Finish the Journey
                <span>→</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL SCREEN */}
      <AnimatePresence>
        {finalScreen && (
          <motion.div
            className="final-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="final-card"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
              }}
            >
              <div className="final-flower">🌷</div>

              <p className="final-eyebrow">
                A message from the heart
              </p>

              <h2>
                Thank You,
                <span>{teacherName}.</span>
              </h2>

              <p>
                For every lesson.
                <br />
                For every word of encouragement.
                <br />
                For believing in us.
              </p>

              <div className="final-heart">
                <Heart size={32} fill="currentColor" />
              </div>

              <strong>Happy Teacher's Day!</strong>

              <button
                className="restart-button"
                onClick={resetProject}
              >
                <RotateCcw size={16} />
                Start Again
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;